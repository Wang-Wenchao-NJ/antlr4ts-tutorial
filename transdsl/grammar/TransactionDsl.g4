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

