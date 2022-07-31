// Generated from grammar/Hello.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { RContext } from "./HelloParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `HelloParser`.
 */
export interface HelloListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `HelloParser.r`.
	 * @param ctx the parse tree
	 */
	enterR?: (ctx: RContext) => void;
	/**
	 * Exit a parse tree produced by `HelloParser.r`.
	 * @param ctx the parse tree
	 */
	exitR?: (ctx: RContext) => void;
}

