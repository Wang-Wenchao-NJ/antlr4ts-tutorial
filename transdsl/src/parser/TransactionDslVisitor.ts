// Generated from grammar/TransactionDsl.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { TransactionFileContext } from "./TransactionDslParser";
import { TransactionContext } from "./TransactionDslParser";
import { ProcedureContext } from "./TransactionDslParser";
import { ProcedureBodyContext } from "./TransactionDslParser";
import { SequenceActionContext } from "./TransactionDslParser";
import { ActionContext } from "./TransactionDslParser";
import { SyncActionContext } from "./TransactionDslParser";
import { AsyncActionContext } from "./TransactionDslParser";
import { OptionActionContext } from "./TransactionDslParser";
import { ProcedureActionContext } from "./TransactionDslParser";
import { WhileActionContext } from "./TransactionDslParser";
import { DoWhileActionContext } from "./TransactionDslParser";
import { ReceiveActionContext } from "./TransactionDslParser";
import { ReceiveActionItemContext } from "./TransactionDslParser";
import { SyncReceiveActionContext } from "./TransactionDslParser";
import { SendActionContext } from "./TransactionDslParser";
import { DelayActionContext } from "./TransactionDslParser";
import { TimerContext } from "./TransactionDslParser";
import { OptionBranchContext } from "./TransactionDslParser";
import { ElseBranchContext } from "./TransactionDslParser";
import { ConditionExpressContext } from "./TransactionDslParser";
import { ExpressContext } from "./TransactionDslParser";
import { FailActionContext } from "./TransactionDslParser";
import { FailActionSpecificBranchContext } from "./TransactionDslParser";
import { FailActionDefaultBranchContext } from "./TransactionDslParser";
import { FinalActionContext } from "./TransactionDslParser";
import { MsgProcFunctionContext } from "./TransactionDslParser";
import { SyncProcFunctionContext } from "./TransactionDslParser";
import { MsgBuilderContext } from "./TransactionDslParser";
import { ProcFunctionContext } from "./TransactionDslParser";
import { ConditionFunctionContext } from "./TransactionDslParser";
import { FailConditionContext } from "./TransactionDslParser";
import { TimerDurationContext } from "./TransactionDslParser";
import { IdentifierContext } from "./TransactionDslParser";
import { MsgContext } from "./TransactionDslParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `TransactionDslParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface TransactionDslVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `TransactionDslParser.transactionFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransactionFile?: (ctx: TransactionFileContext) => Result;

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
	 * Visit a parse tree produced by `TransactionDslParser.procedureBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedureBody?: (ctx: ProcedureBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionDslParser.sequenceAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSequenceAction?: (ctx: SequenceActionContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionDslParser.action`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAction?: (ctx: ActionContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionDslParser.syncAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSyncAction?: (ctx: SyncActionContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionDslParser.asyncAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAsyncAction?: (ctx: AsyncActionContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionDslParser.optionAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionAction?: (ctx: OptionActionContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionDslParser.procedureAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedureAction?: (ctx: ProcedureActionContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionDslParser.whileAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileAction?: (ctx: WhileActionContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionDslParser.doWhileAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoWhileAction?: (ctx: DoWhileActionContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionDslParser.receiveAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReceiveAction?: (ctx: ReceiveActionContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionDslParser.receiveActionItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReceiveActionItem?: (ctx: ReceiveActionItemContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionDslParser.syncReceiveAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSyncReceiveAction?: (ctx: SyncReceiveActionContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionDslParser.sendAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSendAction?: (ctx: SendActionContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionDslParser.delayAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelayAction?: (ctx: DelayActionContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionDslParser.timer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimer?: (ctx: TimerContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionDslParser.optionBranch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionBranch?: (ctx: OptionBranchContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionDslParser.elseBranch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseBranch?: (ctx: ElseBranchContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionDslParser.conditionExpress`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionExpress?: (ctx: ConditionExpressContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionDslParser.express`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpress?: (ctx: ExpressContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionDslParser.failAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFailAction?: (ctx: FailActionContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionDslParser.failActionSpecificBranch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFailActionSpecificBranch?: (ctx: FailActionSpecificBranchContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionDslParser.failActionDefaultBranch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFailActionDefaultBranch?: (ctx: FailActionDefaultBranchContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionDslParser.finalAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFinalAction?: (ctx: FinalActionContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionDslParser.msgProcFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMsgProcFunction?: (ctx: MsgProcFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionDslParser.syncProcFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSyncProcFunction?: (ctx: SyncProcFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionDslParser.msgBuilder`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMsgBuilder?: (ctx: MsgBuilderContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionDslParser.procFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcFunction?: (ctx: ProcFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionDslParser.conditionFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionFunction?: (ctx: ConditionFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionDslParser.failCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFailCondition?: (ctx: FailConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionDslParser.timerDuration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimerDuration?: (ctx: TimerDurationContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionDslParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `TransactionDslParser.msg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMsg?: (ctx: MsgContext) => Result;
}

