// Generated from grammar/TransactionDsl.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `TransactionDslParser`.
 */
export interface TransactionDslListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `TransactionDslParser.transactionFile`.
	 * @param ctx the parse tree
	 */
	enterTransactionFile?: (ctx: TransactionFileContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionDslParser.transactionFile`.
	 * @param ctx the parse tree
	 */
	exitTransactionFile?: (ctx: TransactionFileContext) => void;

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
	 * Enter a parse tree produced by `TransactionDslParser.procedureBody`.
	 * @param ctx the parse tree
	 */
	enterProcedureBody?: (ctx: ProcedureBodyContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionDslParser.procedureBody`.
	 * @param ctx the parse tree
	 */
	exitProcedureBody?: (ctx: ProcedureBodyContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionDslParser.sequenceAction`.
	 * @param ctx the parse tree
	 */
	enterSequenceAction?: (ctx: SequenceActionContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionDslParser.sequenceAction`.
	 * @param ctx the parse tree
	 */
	exitSequenceAction?: (ctx: SequenceActionContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionDslParser.action`.
	 * @param ctx the parse tree
	 */
	enterAction?: (ctx: ActionContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionDslParser.action`.
	 * @param ctx the parse tree
	 */
	exitAction?: (ctx: ActionContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionDslParser.syncAction`.
	 * @param ctx the parse tree
	 */
	enterSyncAction?: (ctx: SyncActionContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionDslParser.syncAction`.
	 * @param ctx the parse tree
	 */
	exitSyncAction?: (ctx: SyncActionContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionDslParser.asyncAction`.
	 * @param ctx the parse tree
	 */
	enterAsyncAction?: (ctx: AsyncActionContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionDslParser.asyncAction`.
	 * @param ctx the parse tree
	 */
	exitAsyncAction?: (ctx: AsyncActionContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionDslParser.optionAction`.
	 * @param ctx the parse tree
	 */
	enterOptionAction?: (ctx: OptionActionContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionDslParser.optionAction`.
	 * @param ctx the parse tree
	 */
	exitOptionAction?: (ctx: OptionActionContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionDslParser.procedureAction`.
	 * @param ctx the parse tree
	 */
	enterProcedureAction?: (ctx: ProcedureActionContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionDslParser.procedureAction`.
	 * @param ctx the parse tree
	 */
	exitProcedureAction?: (ctx: ProcedureActionContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionDslParser.whileAction`.
	 * @param ctx the parse tree
	 */
	enterWhileAction?: (ctx: WhileActionContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionDslParser.whileAction`.
	 * @param ctx the parse tree
	 */
	exitWhileAction?: (ctx: WhileActionContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionDslParser.doWhileAction`.
	 * @param ctx the parse tree
	 */
	enterDoWhileAction?: (ctx: DoWhileActionContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionDslParser.doWhileAction`.
	 * @param ctx the parse tree
	 */
	exitDoWhileAction?: (ctx: DoWhileActionContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionDslParser.receiveAction`.
	 * @param ctx the parse tree
	 */
	enterReceiveAction?: (ctx: ReceiveActionContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionDslParser.receiveAction`.
	 * @param ctx the parse tree
	 */
	exitReceiveAction?: (ctx: ReceiveActionContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionDslParser.receiveActionItem`.
	 * @param ctx the parse tree
	 */
	enterReceiveActionItem?: (ctx: ReceiveActionItemContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionDslParser.receiveActionItem`.
	 * @param ctx the parse tree
	 */
	exitReceiveActionItem?: (ctx: ReceiveActionItemContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionDslParser.syncReceiveAction`.
	 * @param ctx the parse tree
	 */
	enterSyncReceiveAction?: (ctx: SyncReceiveActionContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionDslParser.syncReceiveAction`.
	 * @param ctx the parse tree
	 */
	exitSyncReceiveAction?: (ctx: SyncReceiveActionContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionDslParser.sendAction`.
	 * @param ctx the parse tree
	 */
	enterSendAction?: (ctx: SendActionContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionDslParser.sendAction`.
	 * @param ctx the parse tree
	 */
	exitSendAction?: (ctx: SendActionContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionDslParser.delayAction`.
	 * @param ctx the parse tree
	 */
	enterDelayAction?: (ctx: DelayActionContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionDslParser.delayAction`.
	 * @param ctx the parse tree
	 */
	exitDelayAction?: (ctx: DelayActionContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionDslParser.timer`.
	 * @param ctx the parse tree
	 */
	enterTimer?: (ctx: TimerContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionDslParser.timer`.
	 * @param ctx the parse tree
	 */
	exitTimer?: (ctx: TimerContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionDslParser.optionBranch`.
	 * @param ctx the parse tree
	 */
	enterOptionBranch?: (ctx: OptionBranchContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionDslParser.optionBranch`.
	 * @param ctx the parse tree
	 */
	exitOptionBranch?: (ctx: OptionBranchContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionDslParser.elseBranch`.
	 * @param ctx the parse tree
	 */
	enterElseBranch?: (ctx: ElseBranchContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionDslParser.elseBranch`.
	 * @param ctx the parse tree
	 */
	exitElseBranch?: (ctx: ElseBranchContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionDslParser.conditionExpress`.
	 * @param ctx the parse tree
	 */
	enterConditionExpress?: (ctx: ConditionExpressContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionDslParser.conditionExpress`.
	 * @param ctx the parse tree
	 */
	exitConditionExpress?: (ctx: ConditionExpressContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionDslParser.express`.
	 * @param ctx the parse tree
	 */
	enterExpress?: (ctx: ExpressContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionDslParser.express`.
	 * @param ctx the parse tree
	 */
	exitExpress?: (ctx: ExpressContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionDslParser.failAction`.
	 * @param ctx the parse tree
	 */
	enterFailAction?: (ctx: FailActionContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionDslParser.failAction`.
	 * @param ctx the parse tree
	 */
	exitFailAction?: (ctx: FailActionContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionDslParser.failActionSpecificBranch`.
	 * @param ctx the parse tree
	 */
	enterFailActionSpecificBranch?: (ctx: FailActionSpecificBranchContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionDslParser.failActionSpecificBranch`.
	 * @param ctx the parse tree
	 */
	exitFailActionSpecificBranch?: (ctx: FailActionSpecificBranchContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionDslParser.failActionDefaultBranch`.
	 * @param ctx the parse tree
	 */
	enterFailActionDefaultBranch?: (ctx: FailActionDefaultBranchContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionDslParser.failActionDefaultBranch`.
	 * @param ctx the parse tree
	 */
	exitFailActionDefaultBranch?: (ctx: FailActionDefaultBranchContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionDslParser.finalAction`.
	 * @param ctx the parse tree
	 */
	enterFinalAction?: (ctx: FinalActionContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionDslParser.finalAction`.
	 * @param ctx the parse tree
	 */
	exitFinalAction?: (ctx: FinalActionContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionDslParser.msgProcFunction`.
	 * @param ctx the parse tree
	 */
	enterMsgProcFunction?: (ctx: MsgProcFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionDslParser.msgProcFunction`.
	 * @param ctx the parse tree
	 */
	exitMsgProcFunction?: (ctx: MsgProcFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionDslParser.syncProcFunction`.
	 * @param ctx the parse tree
	 */
	enterSyncProcFunction?: (ctx: SyncProcFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionDslParser.syncProcFunction`.
	 * @param ctx the parse tree
	 */
	exitSyncProcFunction?: (ctx: SyncProcFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionDslParser.msgBuilder`.
	 * @param ctx the parse tree
	 */
	enterMsgBuilder?: (ctx: MsgBuilderContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionDslParser.msgBuilder`.
	 * @param ctx the parse tree
	 */
	exitMsgBuilder?: (ctx: MsgBuilderContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionDslParser.procFunction`.
	 * @param ctx the parse tree
	 */
	enterProcFunction?: (ctx: ProcFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionDslParser.procFunction`.
	 * @param ctx the parse tree
	 */
	exitProcFunction?: (ctx: ProcFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionDslParser.conditionFunction`.
	 * @param ctx the parse tree
	 */
	enterConditionFunction?: (ctx: ConditionFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionDslParser.conditionFunction`.
	 * @param ctx the parse tree
	 */
	exitConditionFunction?: (ctx: ConditionFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionDslParser.failCondition`.
	 * @param ctx the parse tree
	 */
	enterFailCondition?: (ctx: FailConditionContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionDslParser.failCondition`.
	 * @param ctx the parse tree
	 */
	exitFailCondition?: (ctx: FailConditionContext) => void;

	/**
	 * Enter a parse tree produced by `TransactionDslParser.timerDuration`.
	 * @param ctx the parse tree
	 */
	enterTimerDuration?: (ctx: TimerDurationContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionDslParser.timerDuration`.
	 * @param ctx the parse tree
	 */
	exitTimerDuration?: (ctx: TimerDurationContext) => void;

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

	/**
	 * Enter a parse tree produced by `TransactionDslParser.msg`.
	 * @param ctx the parse tree
	 */
	enterMsg?: (ctx: MsgContext) => void;
	/**
	 * Exit a parse tree produced by `TransactionDslParser.msg`.
	 * @param ctx the parse tree
	 */
	exitMsg?: (ctx: MsgContext) => void;
}

