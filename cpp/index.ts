import * as fs from "fs";

import { CharStreams, CommonTokenStream } from "antlr4ts";
import { ParseTreeWalker, TerminalNode, ParseTree } from "antlr4ts/tree";
import { DetailListener } from "./src/backend/DetailListener";
import { CPP14Lexer } from "./src/parser/CPP14Lexer";
import { CPP14Parser } from "./src/parser/CPP14Parser";


let fileName = "D:\\Code\\antlr4ts-tutorial\\cpp\\test\\AmfCrtSmCtx.cc";
let source = fs.readFileSync(fileName, "utf8");

let inputStream = CharStreams.fromString(source); 
let lexer = new CPP14Lexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new CPP14Parser(tokenStream);
let tree = parser.translationUnit();
//console.log(tree.toStringTree());

let listener = new DetailListener();
ParseTreeWalker.DEFAULT.walk(listener, tree);