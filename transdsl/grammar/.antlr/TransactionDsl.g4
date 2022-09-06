grammar TransactionDsl;

transactionFile: (transaction | procedure)*;

transaction: NEWLINE? 'transaction' procedureBody;
procedure: NEWLINE? 'procedure' procedureBody;

procedureBody:
	identifier '{' NEWLINE sequenceAction failAction? finalAction? '}' NEWLINE?;

sequenceAction: action*;
action: (
		syncAction
		| receiveAction
		| sendAction
		| delayAction
		| syncReceiveAction
		| asyncAction
		| optionAction
		| procedureAction
		| whileAction
		| doWhileAction
	);
syncAction: (Ignore | Catch)? syncProcFunction NEWLINE;
asyncAction: (Ignore | Catch)? syncProcFunction '{' NEWLINE receiveAction '}' NEWLINE;
optionAction: 'if' optionBranch ('else' 'if' optionBranch)* ('else' elseBranch)?;
procedureAction: (Ignore | Catch)? 'call' identifier NEWLINE;
whileAction: 'while' conditionExpress '{' NEWLINE sequenceAction '}' NEWLINE;
doWhileAction: 'do' '{' NEWLINE sequenceAction '}' 'while' conditionExpress NEWLINE;

receiveAction: (Ignore | Catch)? 'receive' receiveActionItem+ timer?;
receiveActionItem: msg msgProcFunction NEWLINE;
syncReceiveAction: (Ignore | Catch)? Sync? 'receive' msg msgProcFunction NEWLINE;
sendAction: (Ignore | Catch)? Sync? 'send' msg msgBuilder NEWLINE;
delayAction: 'delay' syncProcFunction NEWLINE;

timer: 'after' timerDuration msgProcFunction NEWLINE;

optionBranch:
	conditionExpress '{' NEWLINE sequenceAction '}' NEWLINE;
elseBranch: '{' NEWLINE sequenceAction '}' NEWLINE;

conditionExpress: express | '(' express ')';
express: OpNot? conditionFunction;

failAction: (failActionSpecificBranch+ failActionDefaultBranch?)
	| failActionDefaultBranch;
failActionSpecificBranch:
	'fail' '(' failCondition (',' failCondition)* ')' '{' NEWLINE sequenceAction '}' NEWLINE;
failActionDefaultBranch:
	'fail' '{' NEWLINE sequenceAction '}' NEWLINE;
finalAction: 'finally' '{' NEWLINE sequenceAction '}' NEWLINE;

msgProcFunction: procFunction;
syncProcFunction: procFunction;
msgBuilder: procFunction;
procFunction: ID;
conditionFunction: ID;
failCondition: ID;
timerDuration: ID;

Sync: 'sync';
OpNot: 'not';
Ignore: 'ignore';
Catch: 'catch';



dispatchFile: appName context defTransactionTypes confilctPolicyTable? emsplusEventIdHeadFile? transAttributeTable triggerEventTable interruptEventTable;

appName: 'app' ':' ID NEWLINE;
context: 'context' ':' ID NEWLINE;
defTransactionTypes: 'transaction' 'types' ':' (ID (',' ID)*)? NEWLINE;
emsplusEventIdHeadFile: 'emsplusEventIdHeadFile' ':' headfile NEWLINE;

confilctPolicyTable: 'conflict' 'polices' '{' NEWLINE msgBufferPolicyTable? bufferedMsgPopPolicyTable? confilctPolicy* '}' NEWLINE;
confilctPolicy: ((newTransactionType '{' NEWLINE confilctPolicyItem* '}' NEWLINE) | (newTransactionType confilctPolicyItem));
confilctPolicyItem: oldTransactionType policyType NEWLINE;
policyType: ('buffer' | 'permanent_buffer' | 'replace' | 'grab' | 'discard' | 'reject' | 'fail_discard' | 'fail_reject' | 'force_replace' | 'resok_goon' | 'buffer_replace' | 'none');
newTransactionType: transactionTypeChecker;
oldTransactionType: transactionTypeChecker;
transactionTypeChecker: (any | transactionId | transactionTypeGroup);

msgBufferPolicyTable: 'msg' 'buffer' 'polices' '{' NEWLINE msgBufferPolicy* '}' NEWLINE;
msgBufferPolicy: newMsgTypeChecker (('{' NEWLINE msgBufferPolicyItem* '}' NEWLINE) | msgBufferPolicyItem) ;
msgBufferPolicyItem: oldMsgTypeChecker msgBufferPolicyType NEWLINE;
msgBufferPolicyType: 'merge' | policyType;
oldMsgTypeChecker: msgTypeChecker;
newMsgTypeChecker: msgTypeChecker;

bufferedMsgPopPolicyTable: 'buffered' 'msg' 'pop' 'polices' '{' NEWLINE bufferedMsgPopPolicy* '}' NEWLINE;
bufferedMsgPopPolicy: bufferedMsgTypeChecker oldTransactionType bufferedMsgPopPolicyType NEWLINE;
bufferedMsgPopPolicyType: 'pop' | 'not_pop';
bufferedMsgTypeChecker: msgTypeChecker;
msgTypeChecker: (any | transactionId | transactionTypeGroup);

any:'any';

transAttributeTable: 'transaction' 'register' '{' NEWLINE transAttribute* '}' NEWLINE;
transAttribute: transID transName emsPlusEventID? NEWLINE;

triggerEventTable: 'trigger' 'events' '{' NEWLINE triggerEvent* '}' NEWLINE;
triggerEvent: msg (defaultTransactionItem | (dispatchPreProcFunc '{' NEWLINE tranactionItem+ '}' NEWLINE)) ;
defaultTransactionItem: tranactionItemInfo;
tranactionItem: dispatchScene tranactionItemInfo;
tranactionItemInfo: transactionId transactionTypeGroup? getConfilctTransactionFunc? NEWLINE;
dispatchPreProcFunc: ID;
getConfilctTransactionFunc: ID;


interruptEventTable: 'interrupt' 'events' '{' NEWLINE interruptEvent* '}' NEWLINE;
interruptEvent: msg getTransacionContextFunc NEWLINE;

getTransacionContextFunc : ID;
transactionId:ID;
transactionTypeGroup: 'type' '(' ID (',' ID)* ')';
dispatchScene:ID;

transID : NATURAL_NUM;
transName : ID;
emsPlusEventID : ID;
headfile : '"''../'?(ID '/')* ID ('.h'|'.hpp')'"';

identifier: ID;
msg: ID;

ID: ID_LETTER (ID_LETTER | DIGIT)*;
WS: [ \t]+ -> skip;
NEWLINE: ((WS | COMMENT | LINE_COMMENT)* (('\r\n') | '\n'))+;

COMMENT: '/*' .*? '*/' -> skip;
LINE_COMMENT: '//' ~[\r\n]* -> skip;

fragment ID_LETTER: 'a' ..'z' | 'A' ..'Z' | '_';
fragment DIGIT: '0' ..'9';
NATURAL_NUM: '1' ..'9' DIGIT*;

