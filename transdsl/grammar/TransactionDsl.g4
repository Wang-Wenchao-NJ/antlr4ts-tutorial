grammar TransactionDsl;

transctionFile : (transaction | procedure)* ;

transaction: NEWLINE? 'transaction' identifier '{' NEWLINE  '}' NEWLINE?;
procedure: NEWLINE? 'procedure'  identifier '{' NEWLINE  '}' NEWLINE?;

identifier : ID;

ID : ID_LETTER (ID_LETTER | DIGIT)* ;
WS : [ \t]+ ->skip ;
NEWLINE : ((WS | COMMENT | LINE_COMMENT)* (('\r\n') | '\n'))+;

COMMENT : '/*' .*? '*/' -> skip;
LINE_COMMENT : '//' ~[\r\n]* -> skip;

fragment
ID_LETTER : 'a'..'z'|'A'..'Z'|'_' ;
fragment
DIGIT : '0'..'9' ;
NATURAL_NUM: '1'..'9' DIGIT*;

