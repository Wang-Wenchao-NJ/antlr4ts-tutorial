import * as fs from "fs";

import { CharStreams, CommonTokenStream } from "antlr4ts";
import { TransactionDslLexer } from "./src/parser/TransactionDslLexer";
import { TransactionDslParser } from "./src/parser/TransactionDslParser";
import { DetailListener } from "./src/backend/DetailListener";
import { ParseTreeWalker, TerminalNode, ParseTree } from "antlr4ts/tree";


let fileName = "D:\\Code\\antlr4ts-tutorial\\transdsl\\test\\SessionCreate.trans";
let source = fs.readFileSync(fileName, "utf8");

let inputStream = CharStreams.fromString(source); 
let lexer = new TransactionDslLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new TransactionDslParser(tokenStream);
let tree = parser.transactionFile();
//console.log(tree.toStringTree());

let listener = new DetailListener();
ParseTreeWalker.DEFAULT.walk(listener, tree);
