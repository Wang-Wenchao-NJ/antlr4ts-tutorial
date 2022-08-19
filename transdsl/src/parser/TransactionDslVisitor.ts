// Generated from grammar/TransactionDsl.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { TransctionFileContext } from "./TransactionDslParser";
import { TransactionContext } from "./TransactionDslParser";
import { ProcedureContext } from "./TransactionDslParser";
import { IdentifierContext } from "./TransactionDslParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `TransactionDslParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface TransactionDslVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `TransactionDslParser.transctionFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransctionFile?: (ctx: TransctionFileContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionDslParser.transaction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransaction?: (ctx: TransactionContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionDslParser.procedure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedure?: (ctx: ProcedureContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionDslParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;
}

