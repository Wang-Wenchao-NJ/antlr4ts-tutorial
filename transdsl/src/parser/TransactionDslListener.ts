// Generated from grammar/TransactionDsl.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { TransctionFileContext } from "./TransactionDslParser";
import { TransactionContext } from "./TransactionDslParser";
import { ProcedureContext } from "./TransactionDslParser";
import { IdentifierContext } from "./TransactionDslParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `TransactionDslParser`.
 */
export interface TransactionDslListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `TransactionDslParser.transctionFile`.
	 * @param ctx the parse tree
	 */
	enterTransctionFile?: (ctx: TransctionFileContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionDslParser.transctionFile`.
	 * @param ctx the parse tree
	 */
	exitTransctionFile?: (ctx: TransctionFileContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionDslParser.transaction`.
	 * @param ctx the parse tree
	 */
	enterTransaction?: (ctx: TransactionContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionDslParser.transaction`.
	 * @param ctx the parse tree
	 */
	exitTransaction?: (ctx: TransactionContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionDslParser.procedure`.
	 * @param ctx the parse tree
	 */
	enterProcedure?: (ctx: ProcedureContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionDslParser.procedure`.
	 * @param ctx the parse tree
	 */
	exitProcedure?: (ctx: ProcedureContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionDslParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionDslParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
}

