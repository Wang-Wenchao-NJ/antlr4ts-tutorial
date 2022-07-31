import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts'; 
import { HelloLexer } from './src/parser/HelloLexer' 
import { HelloParser } from './src/parser/HelloParser' 

// Create the lexer and parser 
let inputStream = new ANTLRInputStream("hello world"); 
let lexer = new HelloLexer(inputStream); 
let tokenStream = new CommonTokenStream(lexer); 
let parser = new HelloParser(tokenStream); 
let tree = parser.r(); 
console.log(tree.toStringTree()); 