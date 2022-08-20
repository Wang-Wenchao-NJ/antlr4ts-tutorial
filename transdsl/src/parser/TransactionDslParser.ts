// Generated from grammar/TransactionDsl.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { TransactionDslListener } from "./TransactionDslListener";
import { TransactionDslVisitor } from "./TransactionDslVisitor";


export class TransactionDslParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly Sync = 19;
	public static readonly OpNot = 20;
	public static readonly Ignore = 21;
	public static readonly Catch = 22;
	public static readonly ID = 23;
	public static readonly WS = 24;
	public static readonly NEWLINE = 25;
	public static readonly COMMENT = 26;
	public static readonly LINE_COMMENT = 27;
	public static readonly NATURAL_NUM = 28;
	public static readonly RULE_transactionFile = 0;
	public static readonly RULE_transaction = 1;
	public static readonly RULE_procedure = 2;
	public static readonly RULE_procedureBody = 3;
	public static readonly RULE_sequenceAction = 4;
	public static readonly RULE_action = 5;
	public static readonly RULE_syncAction = 6;
	public static readonly RULE_asyncAction = 7;
	public static readonly RULE_optionAction = 8;
	public static readonly RULE_procedureAction = 9;
	public static readonly RULE_whileAction = 10;
	public static readonly RULE_doWhileAction = 11;
	public static readonly RULE_receiveAction = 12;
	public static readonly RULE_receiveActionItem = 13;
	public static readonly RULE_syncReceiveAction = 14;
	public static readonly RULE_sendAction = 15;
	public static readonly RULE_delayAction = 16;
	public static readonly RULE_timer = 17;
	public static readonly RULE_optionBranch = 18;
	public static readonly RULE_elseBranch = 19;
	public static readonly RULE_conditionExpress = 20;
	public static readonly RULE_express = 21;
	public static readonly RULE_failAction = 22;
	public static readonly RULE_failActionSpecificBranch = 23;
	public static readonly RULE_failActionDefaultBranch = 24;
	public static readonly RULE_finalAction = 25;
	public static readonly RULE_msgProcFunction = 26;
	public static readonly RULE_syncProcFunction = 27;
	public static readonly RULE_msgBuilder = 28;
	public static readonly RULE_procFunction = 29;
	public static readonly RULE_conditionFunction = 30;
	public static readonly RULE_failCondition = 31;
	public static readonly RULE_timerDuration = 32;
	public static readonly RULE_identifier = 33;
	public static readonly RULE_msg = 34;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"transactionFile", "transaction", "procedure", "procedureBody", "sequenceAction", 
		"action", "syncAction", "asyncAction", "optionAction", "procedureAction", 
		"whileAction", "doWhileAction", "receiveAction", "receiveActionItem", 
		"syncReceiveAction", "sendAction", "delayAction", "timer", "optionBranch", 
		"elseBranch", "conditionExpress", "express", "failAction", "failActionSpecificBranch", 
		"failActionDefaultBranch", "finalAction", "msgProcFunction", "syncProcFunction", 
		"msgBuilder", "procFunction", "conditionFunction", "failCondition", "timerDuration", 
		"identifier", "msg",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'transaction'", "'procedure'", "'{'", "'}'", "'if'", "'else'", 
		"'call'", "'while'", "'do'", "'receive'", "'send'", "'delay'", "'after'", 
		"'('", "')'", "'fail'", "','", "'finally'", "'sync'", "'not'", "'ignore'", 
		"'catch'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "Sync", "OpNot", 
		"Ignore", "Catch", "ID", "WS", "NEWLINE", "COMMENT", "LINE_COMMENT", "NATURAL_NUM",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(TransactionDslParser._LITERAL_NAMES, TransactionDslParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return TransactionDslParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "TransactionDsl.g4"; }

	// @Override
	public get ruleNames(): string[] { return TransactionDslParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return TransactionDslParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(TransactionDslParser._ATN, this);
	}
	// @RuleVersion(0)
	public transactionFile(): TransactionFileContext {
		let _localctx: TransactionFileContext = new TransactionFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, TransactionDslParser.RULE_transactionFile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionDslParser.T__0) | (1 << TransactionDslParser.T__1) | (1 << TransactionDslParser.NEWLINE))) !== 0)) {
				{
				this.state = 72;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 70;
					this.transaction();
					}
					break;

				case 2:
					{
					this.state = 71;
					this.procedure();
					}
					break;
				}
				}
				this.state = 76;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public transaction(): TransactionContext {
		let _localctx: TransactionContext = new TransactionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, TransactionDslParser.RULE_transaction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 78;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TransactionDslParser.NEWLINE) {
				{
				this.state = 77;
				this.match(TransactionDslParser.NEWLINE);
				}
			}

			this.state = 80;
			this.match(TransactionDslParser.T__0);
			this.state = 81;
			this.procedureBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public procedure(): ProcedureContext {
		let _localctx: ProcedureContext = new ProcedureContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, TransactionDslParser.RULE_procedure);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 84;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TransactionDslParser.NEWLINE) {
				{
				this.state = 83;
				this.match(TransactionDslParser.NEWLINE);
				}
			}

			this.state = 86;
			this.match(TransactionDslParser.T__1);
			this.state = 87;
			this.procedureBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public procedureBody(): ProcedureBodyContext {
		let _localctx: ProcedureBodyContext = new ProcedureBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, TransactionDslParser.RULE_procedureBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 89;
			this.identifier();
			this.state = 90;
			this.match(TransactionDslParser.T__2);
			this.state = 91;
			this.match(TransactionDslParser.NEWLINE);
			this.state = 92;
			this.sequenceAction();
			this.state = 94;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TransactionDslParser.T__15) {
				{
				this.state = 93;
				this.failAction();
				}
			}

			this.state = 97;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TransactionDslParser.T__17) {
				{
				this.state = 96;
				this.finalAction();
				}
			}

			this.state = 99;
			this.match(TransactionDslParser.T__3);
			this.state = 101;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 100;
				this.match(TransactionDslParser.NEWLINE);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sequenceAction(): SequenceActionContext {
		let _localctx: SequenceActionContext = new SequenceActionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, TransactionDslParser.RULE_sequenceAction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionDslParser.T__4) | (1 << TransactionDslParser.T__6) | (1 << TransactionDslParser.T__7) | (1 << TransactionDslParser.T__8) | (1 << TransactionDslParser.T__9) | (1 << TransactionDslParser.T__10) | (1 << TransactionDslParser.T__11) | (1 << TransactionDslParser.Sync) | (1 << TransactionDslParser.Ignore) | (1 << TransactionDslParser.Catch) | (1 << TransactionDslParser.ID))) !== 0)) {
				{
				{
				this.state = 103;
				this.action();
				}
				}
				this.state = 108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public action(): ActionContext {
		let _localctx: ActionContext = new ActionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, TransactionDslParser.RULE_action);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 119;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 109;
				this.syncAction();
				}
				break;

			case 2:
				{
				this.state = 110;
				this.receiveAction();
				}
				break;

			case 3:
				{
				this.state = 111;
				this.sendAction();
				}
				break;

			case 4:
				{
				this.state = 112;
				this.delayAction();
				}
				break;

			case 5:
				{
				this.state = 113;
				this.syncReceiveAction();
				}
				break;

			case 6:
				{
				this.state = 114;
				this.asyncAction();
				}
				break;

			case 7:
				{
				this.state = 115;
				this.optionAction();
				}
				break;

			case 8:
				{
				this.state = 116;
				this.procedureAction();
				}
				break;

			case 9:
				{
				this.state = 117;
				this.whileAction();
				}
				break;

			case 10:
				{
				this.state = 118;
				this.doWhileAction();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public syncAction(): SyncActionContext {
		let _localctx: SyncActionContext = new SyncActionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, TransactionDslParser.RULE_syncAction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 122;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TransactionDslParser.Ignore || _la === TransactionDslParser.Catch) {
				{
				this.state = 121;
				_la = this._input.LA(1);
				if (!(_la === TransactionDslParser.Ignore || _la === TransactionDslParser.Catch)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 124;
			this.syncProcFunction();
			this.state = 125;
			this.match(TransactionDslParser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public asyncAction(): AsyncActionContext {
		let _localctx: AsyncActionContext = new AsyncActionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, TransactionDslParser.RULE_asyncAction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 128;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TransactionDslParser.Ignore || _la === TransactionDslParser.Catch) {
				{
				this.state = 127;
				_la = this._input.LA(1);
				if (!(_la === TransactionDslParser.Ignore || _la === TransactionDslParser.Catch)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 130;
			this.syncProcFunction();
			this.state = 131;
			this.match(TransactionDslParser.T__2);
			this.state = 132;
			this.match(TransactionDslParser.NEWLINE);
			this.state = 133;
			this.receiveAction();
			this.state = 134;
			this.match(TransactionDslParser.T__3);
			this.state = 135;
			this.match(TransactionDslParser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optionAction(): OptionActionContext {
		let _localctx: OptionActionContext = new OptionActionContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, TransactionDslParser.RULE_optionAction);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 137;
			this.match(TransactionDslParser.T__4);
			this.state = 138;
			this.optionBranch();
			this.state = 144;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 139;
					this.match(TransactionDslParser.T__5);
					this.state = 140;
					this.match(TransactionDslParser.T__4);
					this.state = 141;
					this.optionBranch();
					}
					}
				}
				this.state = 146;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			}
			this.state = 149;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TransactionDslParser.T__5) {
				{
				this.state = 147;
				this.match(TransactionDslParser.T__5);
				this.state = 148;
				this.elseBranch();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public procedureAction(): ProcedureActionContext {
		let _localctx: ProcedureActionContext = new ProcedureActionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, TransactionDslParser.RULE_procedureAction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 152;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TransactionDslParser.Ignore || _la === TransactionDslParser.Catch) {
				{
				this.state = 151;
				_la = this._input.LA(1);
				if (!(_la === TransactionDslParser.Ignore || _la === TransactionDslParser.Catch)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 154;
			this.match(TransactionDslParser.T__6);
			this.state = 155;
			this.identifier();
			this.state = 156;
			this.match(TransactionDslParser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileAction(): WhileActionContext {
		let _localctx: WhileActionContext = new WhileActionContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, TransactionDslParser.RULE_whileAction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			this.match(TransactionDslParser.T__7);
			this.state = 159;
			this.conditionExpress();
			this.state = 160;
			this.match(TransactionDslParser.T__2);
			this.state = 161;
			this.match(TransactionDslParser.NEWLINE);
			this.state = 162;
			this.sequenceAction();
			this.state = 163;
			this.match(TransactionDslParser.T__3);
			this.state = 164;
			this.match(TransactionDslParser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public doWhileAction(): DoWhileActionContext {
		let _localctx: DoWhileActionContext = new DoWhileActionContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, TransactionDslParser.RULE_doWhileAction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			this.match(TransactionDslParser.T__8);
			this.state = 167;
			this.match(TransactionDslParser.T__2);
			this.state = 168;
			this.match(TransactionDslParser.NEWLINE);
			this.state = 169;
			this.sequenceAction();
			this.state = 170;
			this.match(TransactionDslParser.T__3);
			this.state = 171;
			this.match(TransactionDslParser.T__7);
			this.state = 172;
			this.conditionExpress();
			this.state = 173;
			this.match(TransactionDslParser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public receiveAction(): ReceiveActionContext {
		let _localctx: ReceiveActionContext = new ReceiveActionContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, TransactionDslParser.RULE_receiveAction);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TransactionDslParser.Ignore || _la === TransactionDslParser.Catch) {
				{
				this.state = 175;
				_la = this._input.LA(1);
				if (!(_la === TransactionDslParser.Ignore || _la === TransactionDslParser.Catch)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 178;
			this.match(TransactionDslParser.T__9);
			this.state = 180;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 179;
					this.receiveActionItem();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 182;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TransactionDslParser.T__12) {
				{
				this.state = 184;
				this.timer();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public receiveActionItem(): ReceiveActionItemContext {
		let _localctx: ReceiveActionItemContext = new ReceiveActionItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, TransactionDslParser.RULE_receiveActionItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 187;
			this.msg();
			this.state = 188;
			this.msgProcFunction();
			this.state = 189;
			this.match(TransactionDslParser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public syncReceiveAction(): SyncReceiveActionContext {
		let _localctx: SyncReceiveActionContext = new SyncReceiveActionContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, TransactionDslParser.RULE_syncReceiveAction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 192;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TransactionDslParser.Ignore || _la === TransactionDslParser.Catch) {
				{
				this.state = 191;
				_la = this._input.LA(1);
				if (!(_la === TransactionDslParser.Ignore || _la === TransactionDslParser.Catch)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 195;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TransactionDslParser.Sync) {
				{
				this.state = 194;
				this.match(TransactionDslParser.Sync);
				}
			}

			this.state = 197;
			this.match(TransactionDslParser.T__9);
			this.state = 198;
			this.msg();
			this.state = 199;
			this.msgProcFunction();
			this.state = 200;
			this.match(TransactionDslParser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sendAction(): SendActionContext {
		let _localctx: SendActionContext = new SendActionContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, TransactionDslParser.RULE_sendAction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TransactionDslParser.Ignore || _la === TransactionDslParser.Catch) {
				{
				this.state = 202;
				_la = this._input.LA(1);
				if (!(_la === TransactionDslParser.Ignore || _la === TransactionDslParser.Catch)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TransactionDslParser.Sync) {
				{
				this.state = 205;
				this.match(TransactionDslParser.Sync);
				}
			}

			this.state = 208;
			this.match(TransactionDslParser.T__10);
			this.state = 209;
			this.msg();
			this.state = 210;
			this.msgBuilder();
			this.state = 211;
			this.match(TransactionDslParser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public delayAction(): DelayActionContext {
		let _localctx: DelayActionContext = new DelayActionContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, TransactionDslParser.RULE_delayAction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 213;
			this.match(TransactionDslParser.T__11);
			this.state = 214;
			this.syncProcFunction();
			this.state = 215;
			this.match(TransactionDslParser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public timer(): TimerContext {
		let _localctx: TimerContext = new TimerContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, TransactionDslParser.RULE_timer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 217;
			this.match(TransactionDslParser.T__12);
			this.state = 218;
			this.timerDuration();
			this.state = 219;
			this.msgProcFunction();
			this.state = 220;
			this.match(TransactionDslParser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optionBranch(): OptionBranchContext {
		let _localctx: OptionBranchContext = new OptionBranchContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, TransactionDslParser.RULE_optionBranch);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 222;
			this.conditionExpress();
			this.state = 223;
			this.match(TransactionDslParser.T__2);
			this.state = 224;
			this.match(TransactionDslParser.NEWLINE);
			this.state = 225;
			this.sequenceAction();
			this.state = 226;
			this.match(TransactionDslParser.T__3);
			this.state = 227;
			this.match(TransactionDslParser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elseBranch(): ElseBranchContext {
		let _localctx: ElseBranchContext = new ElseBranchContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, TransactionDslParser.RULE_elseBranch);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 229;
			this.match(TransactionDslParser.T__2);
			this.state = 230;
			this.match(TransactionDslParser.NEWLINE);
			this.state = 231;
			this.sequenceAction();
			this.state = 232;
			this.match(TransactionDslParser.T__3);
			this.state = 233;
			this.match(TransactionDslParser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionExpress(): ConditionExpressContext {
		let _localctx: ConditionExpressContext = new ConditionExpressContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, TransactionDslParser.RULE_conditionExpress);
		try {
			this.state = 240;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TransactionDslParser.OpNot:
			case TransactionDslParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 235;
				this.express();
				}
				break;
			case TransactionDslParser.T__13:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 236;
				this.match(TransactionDslParser.T__13);
				this.state = 237;
				this.express();
				this.state = 238;
				this.match(TransactionDslParser.T__14);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public express(): ExpressContext {
		let _localctx: ExpressContext = new ExpressContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, TransactionDslParser.RULE_express);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 243;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TransactionDslParser.OpNot) {
				{
				this.state = 242;
				this.match(TransactionDslParser.OpNot);
				}
			}

			this.state = 245;
			this.conditionFunction();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public failAction(): FailActionContext {
		let _localctx: FailActionContext = new FailActionContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, TransactionDslParser.RULE_failAction);
		let _la: number;
		try {
			let _alt: number;
			this.state = 256;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 248;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 247;
						this.failActionSpecificBranch();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 250;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 253;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TransactionDslParser.T__15) {
					{
					this.state = 252;
					this.failActionDefaultBranch();
					}
				}

				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 255;
				this.failActionDefaultBranch();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public failActionSpecificBranch(): FailActionSpecificBranchContext {
		let _localctx: FailActionSpecificBranchContext = new FailActionSpecificBranchContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, TransactionDslParser.RULE_failActionSpecificBranch);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 258;
			this.match(TransactionDslParser.T__15);
			this.state = 259;
			this.match(TransactionDslParser.T__13);
			this.state = 260;
			this.failCondition();
			this.state = 265;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TransactionDslParser.T__16) {
				{
				{
				this.state = 261;
				this.match(TransactionDslParser.T__16);
				this.state = 262;
				this.failCondition();
				}
				}
				this.state = 267;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 268;
			this.match(TransactionDslParser.T__14);
			this.state = 269;
			this.match(TransactionDslParser.T__2);
			this.state = 270;
			this.match(TransactionDslParser.NEWLINE);
			this.state = 271;
			this.sequenceAction();
			this.state = 272;
			this.match(TransactionDslParser.T__3);
			this.state = 273;
			this.match(TransactionDslParser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public failActionDefaultBranch(): FailActionDefaultBranchContext {
		let _localctx: FailActionDefaultBranchContext = new FailActionDefaultBranchContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, TransactionDslParser.RULE_failActionDefaultBranch);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 275;
			this.match(TransactionDslParser.T__15);
			this.state = 276;
			this.match(TransactionDslParser.T__2);
			this.state = 277;
			this.match(TransactionDslParser.NEWLINE);
			this.state = 278;
			this.sequenceAction();
			this.state = 279;
			this.match(TransactionDslParser.T__3);
			this.state = 280;
			this.match(TransactionDslParser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public finalAction(): FinalActionContext {
		let _localctx: FinalActionContext = new FinalActionContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, TransactionDslParser.RULE_finalAction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 282;
			this.match(TransactionDslParser.T__17);
			this.state = 283;
			this.match(TransactionDslParser.T__2);
			this.state = 284;
			this.match(TransactionDslParser.NEWLINE);
			this.state = 285;
			this.sequenceAction();
			this.state = 286;
			this.match(TransactionDslParser.T__3);
			this.state = 287;
			this.match(TransactionDslParser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public msgProcFunction(): MsgProcFunctionContext {
		let _localctx: MsgProcFunctionContext = new MsgProcFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, TransactionDslParser.RULE_msgProcFunction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 289;
			this.procFunction();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public syncProcFunction(): SyncProcFunctionContext {
		let _localctx: SyncProcFunctionContext = new SyncProcFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, TransactionDslParser.RULE_syncProcFunction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 291;
			this.procFunction();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public msgBuilder(): MsgBuilderContext {
		let _localctx: MsgBuilderContext = new MsgBuilderContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, TransactionDslParser.RULE_msgBuilder);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 293;
			this.procFunction();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public procFunction(): ProcFunctionContext {
		let _localctx: ProcFunctionContext = new ProcFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, TransactionDslParser.RULE_procFunction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 295;
			this.match(TransactionDslParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionFunction(): ConditionFunctionContext {
		let _localctx: ConditionFunctionContext = new ConditionFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, TransactionDslParser.RULE_conditionFunction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 297;
			this.match(TransactionDslParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public failCondition(): FailConditionContext {
		let _localctx: FailConditionContext = new FailConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, TransactionDslParser.RULE_failCondition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 299;
			this.match(TransactionDslParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public timerDuration(): TimerDurationContext {
		let _localctx: TimerDurationContext = new TimerDurationContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, TransactionDslParser.RULE_timerDuration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 301;
			this.match(TransactionDslParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, TransactionDslParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 303;
			this.match(TransactionDslParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public msg(): MsgContext {
		let _localctx: MsgContext = new MsgContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, TransactionDslParser.RULE_msg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 305;
			this.match(TransactionDslParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1E\u0136\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x03\x02\x03\x02\x07\x02K\n\x02\f\x02\x0E\x02N\v\x02\x03\x03" +
		"\x05\x03Q\n\x03\x03\x03\x03\x03\x03\x03\x03\x04\x05\x04W\n\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05a\n\x05" +
		"\x03\x05\x05\x05d\n\x05\x03\x05\x03\x05\x05\x05h\n\x05\x03\x06\x07\x06" +
		"k\n\x06\f\x06\x0E\x06n\v\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07z\n\x07\x03\b\x05\b}\n\b\x03" +
		"\b\x03\b\x03\b\x03\t\x05\t\x83\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\x91\n\n\f\n\x0E\n\x94\v\n\x03" +
		"\n\x03\n\x05\n\x98\n\n\x03\v\x05\v\x9B\n\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x05\x0E\xB3\n\x0E\x03\x0E\x03\x0E\x06" +
		"\x0E\xB7\n\x0E\r\x0E\x0E\x0E\xB8\x03\x0E\x05\x0E\xBC\n\x0E\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x10\x05\x10\xC3\n\x10\x03\x10\x05\x10\xC6\n\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x05\x11\xCE\n\x11\x03" +
		"\x11\x05\x11\xD1\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16" +
		"\xF3\n\x16\x03\x17\x05\x17\xF6\n\x17\x03\x17\x03\x17\x03\x18\x06\x18\xFB" +
		"\n\x18\r\x18\x0E\x18\xFC\x03\x18\x05\x18\u0100\n\x18\x03\x18\x05\x18\u0103" +
		"\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u010A\n\x19\f\x19" +
		"\x0E\x19\u010D\v\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
		"\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03" +
		"\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03" +
		"#\x03#\x03$\x03$\x03$\x02\x02\x02%\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02" +
		"8\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02\x02\x03\x03\x02\x17\x18\x02\u0135" +
		"\x02L\x03\x02\x02\x02\x04P\x03\x02\x02\x02\x06V\x03\x02\x02\x02\b[\x03" +
		"\x02\x02\x02\nl\x03\x02\x02\x02\fy\x03\x02\x02\x02\x0E|\x03\x02\x02\x02" +
		"\x10\x82\x03\x02\x02\x02\x12\x8B\x03\x02\x02\x02\x14\x9A\x03\x02\x02\x02" +
		"\x16\xA0\x03\x02\x02\x02\x18\xA8\x03\x02\x02\x02\x1A\xB2\x03\x02\x02\x02" +
		"\x1C\xBD\x03\x02\x02\x02\x1E\xC2\x03\x02\x02\x02 \xCD\x03\x02\x02\x02" +
		"\"\xD7\x03\x02\x02\x02$\xDB\x03\x02\x02\x02&\xE0\x03\x02\x02\x02(\xE7" +
		"\x03\x02\x02\x02*\xF2\x03\x02\x02\x02,\xF5\x03\x02\x02\x02.\u0102\x03" +
		"\x02\x02\x020\u0104\x03\x02\x02\x022\u0115\x03\x02\x02\x024\u011C\x03" +
		"\x02\x02\x026\u0123\x03\x02\x02\x028\u0125\x03\x02\x02\x02:\u0127\x03" +
		"\x02\x02\x02<\u0129\x03\x02\x02\x02>\u012B\x03\x02\x02\x02@\u012D\x03" +
		"\x02\x02\x02B\u012F\x03\x02\x02\x02D\u0131\x03\x02\x02\x02F\u0133\x03" +
		"\x02\x02\x02HK\x05\x04\x03\x02IK\x05\x06\x04\x02JH\x03\x02\x02\x02JI\x03" +
		"\x02\x02\x02KN\x03\x02\x02\x02LJ\x03\x02\x02\x02LM\x03\x02\x02\x02M\x03" +
		"\x03\x02\x02\x02NL\x03\x02\x02\x02OQ\x07\x1B\x02\x02PO\x03\x02\x02\x02" +
		"PQ\x03\x02\x02\x02QR\x03\x02\x02\x02RS\x07\x03\x02\x02ST\x05\b\x05\x02" +
		"T\x05\x03\x02\x02\x02UW\x07\x1B\x02\x02VU\x03\x02\x02\x02VW\x03\x02\x02" +
		"\x02WX\x03\x02\x02\x02XY\x07\x04\x02\x02YZ\x05\b\x05\x02Z\x07\x03\x02" +
		"\x02\x02[\\\x05D#\x02\\]\x07\x05\x02\x02]^\x07\x1B\x02\x02^`\x05\n\x06" +
		"\x02_a\x05.\x18\x02`_\x03\x02\x02\x02`a\x03\x02\x02\x02ac\x03\x02\x02" +
		"\x02bd\x054\x1B\x02cb\x03\x02\x02\x02cd\x03\x02\x02\x02de\x03\x02\x02" +
		"\x02eg\x07\x06\x02\x02fh\x07\x1B\x02\x02gf\x03\x02\x02\x02gh\x03\x02\x02" +
		"\x02h\t\x03\x02\x02\x02ik\x05\f\x07\x02ji\x03\x02\x02\x02kn\x03\x02\x02" +
		"\x02lj\x03\x02\x02\x02lm\x03\x02\x02\x02m\v\x03\x02\x02\x02nl\x03\x02" +
		"\x02\x02oz\x05\x0E\b\x02pz\x05\x1A\x0E\x02qz\x05 \x11\x02rz\x05\"\x12" +
		"\x02sz\x05\x1E\x10\x02tz\x05\x10\t\x02uz\x05\x12\n\x02vz\x05\x14\v\x02" +
		"wz\x05\x16\f\x02xz\x05\x18\r\x02yo\x03\x02\x02\x02yp\x03\x02\x02\x02y" +
		"q\x03\x02\x02\x02yr\x03\x02\x02\x02ys\x03\x02\x02\x02yt\x03\x02\x02\x02" +
		"yu\x03\x02\x02\x02yv\x03\x02\x02\x02yw\x03\x02\x02\x02yx\x03\x02\x02\x02" +
		"z\r\x03\x02\x02\x02{}\t\x02\x02\x02|{\x03\x02\x02\x02|}\x03\x02\x02\x02" +
		"}~\x03\x02\x02\x02~\x7F\x058\x1D\x02\x7F\x80\x07\x1B\x02\x02\x80\x0F\x03" +
		"\x02\x02\x02\x81\x83\t\x02\x02\x02\x82\x81\x03\x02\x02\x02\x82\x83\x03" +
		"\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x85\x058\x1D\x02\x85\x86\x07" +
		"\x05\x02\x02\x86\x87\x07\x1B\x02\x02\x87\x88\x05\x1A\x0E\x02\x88\x89\x07" +
		"\x06\x02\x02\x89\x8A\x07\x1B\x02\x02\x8A\x11\x03\x02\x02\x02\x8B\x8C\x07" +
		"\x07\x02\x02\x8C\x92\x05&\x14\x02\x8D\x8E\x07\b\x02\x02\x8E\x8F\x07\x07" +
		"\x02\x02\x8F\x91\x05&\x14\x02\x90\x8D\x03\x02\x02\x02\x91\x94\x03\x02" +
		"\x02\x02\x92\x90\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x97\x03\x02" +
		"\x02\x02\x94\x92\x03\x02\x02\x02\x95\x96\x07\b\x02\x02\x96\x98\x05(\x15" +
		"\x02\x97\x95\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x13\x03\x02\x02" +
		"\x02\x99\x9B\t\x02\x02\x02\x9A\x99\x03\x02\x02\x02\x9A\x9B\x03\x02\x02" +
		"\x02\x9B\x9C\x03\x02\x02\x02\x9C\x9D\x07\t\x02\x02\x9D\x9E\x05D#\x02\x9E" +
		"\x9F\x07\x1B\x02\x02\x9F\x15\x03\x02\x02\x02\xA0\xA1\x07\n\x02\x02\xA1" +
		"\xA2\x05*\x16\x02\xA2\xA3\x07\x05\x02\x02\xA3\xA4\x07\x1B\x02\x02\xA4" +
		"\xA5\x05\n\x06\x02\xA5\xA6\x07\x06\x02\x02\xA6\xA7\x07\x1B\x02\x02\xA7" +
		"\x17\x03\x02\x02\x02\xA8\xA9\x07\v\x02\x02\xA9\xAA\x07\x05\x02\x02\xAA" +
		"\xAB\x07\x1B\x02\x02\xAB\xAC\x05\n\x06\x02\xAC\xAD\x07\x06\x02\x02\xAD" +
		"\xAE\x07\n\x02\x02\xAE\xAF\x05*\x16\x02\xAF\xB0\x07\x1B\x02\x02\xB0\x19" +
		"\x03\x02\x02\x02\xB1\xB3\t\x02\x02\x02\xB2\xB1\x03\x02\x02\x02\xB2\xB3" +
		"\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\xB6\x07\f\x02\x02\xB5\xB7" +
		"\x05\x1C\x0F\x02\xB6\xB5\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xB6" +
		"\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xBB\x03\x02\x02\x02\xBA\xBC" +
		"\x05$\x13\x02\xBB\xBA\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\x1B" +
		"\x03\x02\x02\x02\xBD\xBE\x05F$\x02\xBE\xBF\x056\x1C\x02\xBF\xC0\x07\x1B" +
		"\x02\x02\xC0\x1D\x03\x02\x02\x02\xC1\xC3\t\x02\x02\x02\xC2\xC1\x03\x02" +
		"\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC5\x03\x02\x02\x02\xC4\xC6\x07\x15" +
		"\x02\x02\xC5\xC4\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xC7\x03\x02" +
		"\x02\x02\xC7\xC8\x07\f\x02\x02\xC8\xC9\x05F$\x02\xC9\xCA\x056\x1C\x02" +
		"\xCA\xCB\x07\x1B\x02\x02\xCB\x1F\x03\x02\x02\x02\xCC\xCE\t\x02\x02\x02" +
		"\xCD\xCC\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xD0\x03\x02\x02\x02" +
		"\xCF\xD1\x07\x15\x02\x02\xD0\xCF\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02" +
		"\xD1\xD2\x03\x02\x02\x02\xD2\xD3\x07\r\x02\x02\xD3\xD4\x05F$\x02\xD4\xD5" +
		"\x05:\x1E\x02\xD5\xD6\x07\x1B\x02\x02\xD6!\x03\x02\x02\x02\xD7\xD8\x07" +
		"\x0E\x02\x02\xD8\xD9\x058\x1D\x02\xD9\xDA\x07\x1B\x02\x02\xDA#\x03\x02" +
		"\x02\x02\xDB\xDC\x07\x0F\x02\x02\xDC\xDD\x05B\"\x02\xDD\xDE\x056\x1C\x02" +
		"\xDE\xDF\x07\x1B\x02\x02\xDF%\x03\x02\x02\x02\xE0\xE1\x05*\x16\x02\xE1" +
		"\xE2\x07\x05\x02\x02\xE2\xE3\x07\x1B\x02\x02\xE3\xE4\x05\n\x06\x02\xE4" +
		"\xE5\x07\x06\x02\x02\xE5\xE6\x07\x1B\x02\x02\xE6\'\x03\x02\x02\x02\xE7" +
		"\xE8\x07\x05\x02\x02\xE8\xE9\x07\x1B\x02\x02\xE9\xEA\x05\n\x06\x02\xEA" +
		"\xEB\x07\x06\x02\x02\xEB\xEC\x07\x1B\x02\x02\xEC)\x03\x02\x02\x02\xED" +
		"\xF3\x05,\x17\x02\xEE\xEF\x07\x10\x02\x02\xEF\xF0\x05,\x17\x02\xF0\xF1" +
		"\x07\x11\x02\x02\xF1\xF3\x03\x02\x02\x02\xF2\xED\x03\x02\x02\x02\xF2\xEE" +
		"\x03\x02\x02\x02\xF3+\x03\x02\x02\x02\xF4\xF6\x07\x16\x02\x02\xF5\xF4" +
		"\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\xF8" +
		"\x05> \x02\xF8-\x03\x02\x02\x02\xF9\xFB\x050\x19\x02\xFA\xF9\x03\x02\x02" +
		"\x02\xFB\xFC\x03\x02\x02\x02\xFC\xFA\x03\x02\x02\x02\xFC\xFD\x03\x02\x02" +
		"\x02\xFD\xFF\x03\x02\x02\x02\xFE\u0100\x052\x1A\x02\xFF\xFE\x03\x02\x02" +
		"\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0103\x03\x02\x02\x02\u0101\u0103" +
		"\x052\x1A\x02\u0102\xFA\x03\x02\x02\x02\u0102\u0101\x03\x02\x02\x02\u0103" +
		"/\x03\x02\x02\x02\u0104\u0105\x07\x12\x02\x02\u0105\u0106\x07\x10\x02" +
		"\x02\u0106\u010B\x05@!\x02\u0107\u0108\x07\x13\x02\x02\u0108\u010A\x05" +
		"@!\x02\u0109\u0107\x03\x02\x02\x02\u010A\u010D\x03\x02\x02\x02\u010B\u0109" +
		"\x03\x02\x02\x02\u010B\u010C\x03\x02\x02\x02\u010C\u010E\x03\x02\x02\x02" +
		"\u010D\u010B\x03\x02\x02\x02\u010E\u010F\x07\x11\x02\x02\u010F\u0110\x07" +
		"\x05\x02\x02\u0110\u0111\x07\x1B\x02\x02\u0111\u0112\x05\n\x06\x02\u0112" +
		"\u0113\x07\x06\x02\x02\u0113\u0114\x07\x1B\x02\x02\u01141\x03\x02\x02" +
		"\x02\u0115\u0116\x07\x12\x02\x02\u0116\u0117\x07\x05\x02\x02\u0117\u0118" +
		"\x07\x1B\x02\x02\u0118\u0119\x05\n\x06\x02\u0119\u011A\x07\x06\x02\x02" +
		"\u011A\u011B\x07\x1B\x02\x02\u011B3\x03\x02\x02\x02\u011C\u011D\x07\x14" +
		"\x02\x02\u011D\u011E\x07\x05\x02\x02\u011E\u011F\x07\x1B\x02\x02\u011F" +
		"\u0120\x05\n\x06\x02\u0120\u0121\x07\x06\x02\x02\u0121\u0122\x07\x1B\x02" +
		"\x02\u01225\x03\x02\x02\x02\u0123\u0124\x05<\x1F\x02\u01247\x03\x02\x02" +
		"\x02\u0125\u0126\x05<\x1F\x02\u01269\x03\x02\x02\x02\u0127\u0128\x05<" +
		"\x1F\x02\u0128;\x03\x02\x02\x02\u0129\u012A\x07\x19\x02\x02\u012A=\x03" +
		"\x02\x02\x02\u012B\u012C\x07\x19\x02\x02\u012C?\x03\x02\x02\x02\u012D" +
		"\u012E\x07\x19\x02\x02\u012EA\x03\x02\x02\x02\u012F\u0130\x07\x19\x02" +
		"\x02\u0130C\x03\x02\x02\x02\u0131\u0132\x07\x19\x02\x02\u0132E\x03\x02" +
		"\x02\x02\u0133\u0134\x07\x19\x02\x02\u0134G\x03\x02\x02\x02\x1DJLPV`c" +
		"gly|\x82\x92\x97\x9A\xB2\xB8\xBB\xC2\xC5\xCD\xD0\xF2\xF5\xFC\xFF\u0102" +
		"\u010B";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TransactionDslParser.__ATN) {
			TransactionDslParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(TransactionDslParser._serializedATN));
		}

		return TransactionDslParser.__ATN;
	}

}

export class TransactionFileContext extends ParserRuleContext {
	public transaction(): TransactionContext[];
	public transaction(i: number): TransactionContext;
	public transaction(i?: number): TransactionContext | TransactionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TransactionContext);
		} else {
			return this.getRuleContext(i, TransactionContext);
		}
	}
	public procedure(): ProcedureContext[];
	public procedure(i: number): ProcedureContext;
	public procedure(i?: number): ProcedureContext | ProcedureContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProcedureContext);
		} else {
			return this.getRuleContext(i, ProcedureContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionDslParser.RULE_transactionFile; }
	// @Override
	public enterRule(listener: TransactionDslListener): void {
		if (listener.enterTransactionFile) {
			listener.enterTransactionFile(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionDslListener): void {
		if (listener.exitTransactionFile) {
			listener.exitTransactionFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionDslVisitor<Result>): Result {
		if (visitor.visitTransactionFile) {
			return visitor.visitTransactionFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TransactionContext extends ParserRuleContext {
	public procedureBody(): ProcedureBodyContext {
		return this.getRuleContext(0, ProcedureBodyContext);
	}
	public NEWLINE(): TerminalNode | undefined { return this.tryGetToken(TransactionDslParser.NEWLINE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionDslParser.RULE_transaction; }
	// @Override
	public enterRule(listener: TransactionDslListener): void {
		if (listener.enterTransaction) {
			listener.enterTransaction(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionDslListener): void {
		if (listener.exitTransaction) {
			listener.exitTransaction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionDslVisitor<Result>): Result {
		if (visitor.visitTransaction) {
			return visitor.visitTransaction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcedureContext extends ParserRuleContext {
	public procedureBody(): ProcedureBodyContext {
		return this.getRuleContext(0, ProcedureBodyContext);
	}
	public NEWLINE(): TerminalNode | undefined { return this.tryGetToken(TransactionDslParser.NEWLINE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionDslParser.RULE_procedure; }
	// @Override
	public enterRule(listener: TransactionDslListener): void {
		if (listener.enterProcedure) {
			listener.enterProcedure(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionDslListener): void {
		if (listener.exitProcedure) {
			listener.exitProcedure(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionDslVisitor<Result>): Result {
		if (visitor.visitProcedure) {
			return visitor.visitProcedure(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcedureBodyContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TransactionDslParser.NEWLINE);
		} else {
			return this.getToken(TransactionDslParser.NEWLINE, i);
		}
	}
	public sequenceAction(): SequenceActionContext {
		return this.getRuleContext(0, SequenceActionContext);
	}
	public failAction(): FailActionContext | undefined {
		return this.tryGetRuleContext(0, FailActionContext);
	}
	public finalAction(): FinalActionContext | undefined {
		return this.tryGetRuleContext(0, FinalActionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionDslParser.RULE_procedureBody; }
	// @Override
	public enterRule(listener: TransactionDslListener): void {
		if (listener.enterProcedureBody) {
			listener.enterProcedureBody(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionDslListener): void {
		if (listener.exitProcedureBody) {
			listener.exitProcedureBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionDslVisitor<Result>): Result {
		if (visitor.visitProcedureBody) {
			return visitor.visitProcedureBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SequenceActionContext extends ParserRuleContext {
	public action(): ActionContext[];
	public action(i: number): ActionContext;
	public action(i?: number): ActionContext | ActionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ActionContext);
		} else {
			return this.getRuleContext(i, ActionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionDslParser.RULE_sequenceAction; }
	// @Override
	public enterRule(listener: TransactionDslListener): void {
		if (listener.enterSequenceAction) {
			listener.enterSequenceAction(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionDslListener): void {
		if (listener.exitSequenceAction) {
			listener.exitSequenceAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionDslVisitor<Result>): Result {
		if (visitor.visitSequenceAction) {
			return visitor.visitSequenceAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ActionContext extends ParserRuleContext {
	public syncAction(): SyncActionContext | undefined {
		return this.tryGetRuleContext(0, SyncActionContext);
	}
	public receiveAction(): ReceiveActionContext | undefined {
		return this.tryGetRuleContext(0, ReceiveActionContext);
	}
	public sendAction(): SendActionContext | undefined {
		return this.tryGetRuleContext(0, SendActionContext);
	}
	public delayAction(): DelayActionContext | undefined {
		return this.tryGetRuleContext(0, DelayActionContext);
	}
	public syncReceiveAction(): SyncReceiveActionContext | undefined {
		return this.tryGetRuleContext(0, SyncReceiveActionContext);
	}
	public asyncAction(): AsyncActionContext | undefined {
		return this.tryGetRuleContext(0, AsyncActionContext);
	}
	public optionAction(): OptionActionContext | undefined {
		return this.tryGetRuleContext(0, OptionActionContext);
	}
	public procedureAction(): ProcedureActionContext | undefined {
		return this.tryGetRuleContext(0, ProcedureActionContext);
	}
	public whileAction(): WhileActionContext | undefined {
		return this.tryGetRuleContext(0, WhileActionContext);
	}
	public doWhileAction(): DoWhileActionContext | undefined {
		return this.tryGetRuleContext(0, DoWhileActionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionDslParser.RULE_action; }
	// @Override
	public enterRule(listener: TransactionDslListener): void {
		if (listener.enterAction) {
			listener.enterAction(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionDslListener): void {
		if (listener.exitAction) {
			listener.exitAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionDslVisitor<Result>): Result {
		if (visitor.visitAction) {
			return visitor.visitAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SyncActionContext extends ParserRuleContext {
	public syncProcFunction(): SyncProcFunctionContext {
		return this.getRuleContext(0, SyncProcFunctionContext);
	}
	public NEWLINE(): TerminalNode { return this.getToken(TransactionDslParser.NEWLINE, 0); }
	public Ignore(): TerminalNode | undefined { return this.tryGetToken(TransactionDslParser.Ignore, 0); }
	public Catch(): TerminalNode | undefined { return this.tryGetToken(TransactionDslParser.Catch, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionDslParser.RULE_syncAction; }
	// @Override
	public enterRule(listener: TransactionDslListener): void {
		if (listener.enterSyncAction) {
			listener.enterSyncAction(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionDslListener): void {
		if (listener.exitSyncAction) {
			listener.exitSyncAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionDslVisitor<Result>): Result {
		if (visitor.visitSyncAction) {
			return visitor.visitSyncAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AsyncActionContext extends ParserRuleContext {
	public syncProcFunction(): SyncProcFunctionContext {
		return this.getRuleContext(0, SyncProcFunctionContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TransactionDslParser.NEWLINE);
		} else {
			return this.getToken(TransactionDslParser.NEWLINE, i);
		}
	}
	public receiveAction(): ReceiveActionContext {
		return this.getRuleContext(0, ReceiveActionContext);
	}
	public Ignore(): TerminalNode | undefined { return this.tryGetToken(TransactionDslParser.Ignore, 0); }
	public Catch(): TerminalNode | undefined { return this.tryGetToken(TransactionDslParser.Catch, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionDslParser.RULE_asyncAction; }
	// @Override
	public enterRule(listener: TransactionDslListener): void {
		if (listener.enterAsyncAction) {
			listener.enterAsyncAction(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionDslListener): void {
		if (listener.exitAsyncAction) {
			listener.exitAsyncAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionDslVisitor<Result>): Result {
		if (visitor.visitAsyncAction) {
			return visitor.visitAsyncAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionActionContext extends ParserRuleContext {
	public optionBranch(): OptionBranchContext[];
	public optionBranch(i: number): OptionBranchContext;
	public optionBranch(i?: number): OptionBranchContext | OptionBranchContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptionBranchContext);
		} else {
			return this.getRuleContext(i, OptionBranchContext);
		}
	}
	public elseBranch(): ElseBranchContext | undefined {
		return this.tryGetRuleContext(0, ElseBranchContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionDslParser.RULE_optionAction; }
	// @Override
	public enterRule(listener: TransactionDslListener): void {
		if (listener.enterOptionAction) {
			listener.enterOptionAction(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionDslListener): void {
		if (listener.exitOptionAction) {
			listener.exitOptionAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionDslVisitor<Result>): Result {
		if (visitor.visitOptionAction) {
			return visitor.visitOptionAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcedureActionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public NEWLINE(): TerminalNode { return this.getToken(TransactionDslParser.NEWLINE, 0); }
	public Ignore(): TerminalNode | undefined { return this.tryGetToken(TransactionDslParser.Ignore, 0); }
	public Catch(): TerminalNode | undefined { return this.tryGetToken(TransactionDslParser.Catch, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionDslParser.RULE_procedureAction; }
	// @Override
	public enterRule(listener: TransactionDslListener): void {
		if (listener.enterProcedureAction) {
			listener.enterProcedureAction(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionDslListener): void {
		if (listener.exitProcedureAction) {
			listener.exitProcedureAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionDslVisitor<Result>): Result {
		if (visitor.visitProcedureAction) {
			return visitor.visitProcedureAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileActionContext extends ParserRuleContext {
	public conditionExpress(): ConditionExpressContext {
		return this.getRuleContext(0, ConditionExpressContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TransactionDslParser.NEWLINE);
		} else {
			return this.getToken(TransactionDslParser.NEWLINE, i);
		}
	}
	public sequenceAction(): SequenceActionContext {
		return this.getRuleContext(0, SequenceActionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionDslParser.RULE_whileAction; }
	// @Override
	public enterRule(listener: TransactionDslListener): void {
		if (listener.enterWhileAction) {
			listener.enterWhileAction(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionDslListener): void {
		if (listener.exitWhileAction) {
			listener.exitWhileAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionDslVisitor<Result>): Result {
		if (visitor.visitWhileAction) {
			return visitor.visitWhileAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DoWhileActionContext extends ParserRuleContext {
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TransactionDslParser.NEWLINE);
		} else {
			return this.getToken(TransactionDslParser.NEWLINE, i);
		}
	}
	public sequenceAction(): SequenceActionContext {
		return this.getRuleContext(0, SequenceActionContext);
	}
	public conditionExpress(): ConditionExpressContext {
		return this.getRuleContext(0, ConditionExpressContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionDslParser.RULE_doWhileAction; }
	// @Override
	public enterRule(listener: TransactionDslListener): void {
		if (listener.enterDoWhileAction) {
			listener.enterDoWhileAction(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionDslListener): void {
		if (listener.exitDoWhileAction) {
			listener.exitDoWhileAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionDslVisitor<Result>): Result {
		if (visitor.visitDoWhileAction) {
			return visitor.visitDoWhileAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReceiveActionContext extends ParserRuleContext {
	public receiveActionItem(): ReceiveActionItemContext[];
	public receiveActionItem(i: number): ReceiveActionItemContext;
	public receiveActionItem(i?: number): ReceiveActionItemContext | ReceiveActionItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ReceiveActionItemContext);
		} else {
			return this.getRuleContext(i, ReceiveActionItemContext);
		}
	}
	public timer(): TimerContext | undefined {
		return this.tryGetRuleContext(0, TimerContext);
	}
	public Ignore(): TerminalNode | undefined { return this.tryGetToken(TransactionDslParser.Ignore, 0); }
	public Catch(): TerminalNode | undefined { return this.tryGetToken(TransactionDslParser.Catch, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionDslParser.RULE_receiveAction; }
	// @Override
	public enterRule(listener: TransactionDslListener): void {
		if (listener.enterReceiveAction) {
			listener.enterReceiveAction(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionDslListener): void {
		if (listener.exitReceiveAction) {
			listener.exitReceiveAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionDslVisitor<Result>): Result {
		if (visitor.visitReceiveAction) {
			return visitor.visitReceiveAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReceiveActionItemContext extends ParserRuleContext {
	public msg(): MsgContext {
		return this.getRuleContext(0, MsgContext);
	}
	public msgProcFunction(): MsgProcFunctionContext {
		return this.getRuleContext(0, MsgProcFunctionContext);
	}
	public NEWLINE(): TerminalNode { return this.getToken(TransactionDslParser.NEWLINE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionDslParser.RULE_receiveActionItem; }
	// @Override
	public enterRule(listener: TransactionDslListener): void {
		if (listener.enterReceiveActionItem) {
			listener.enterReceiveActionItem(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionDslListener): void {
		if (listener.exitReceiveActionItem) {
			listener.exitReceiveActionItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionDslVisitor<Result>): Result {
		if (visitor.visitReceiveActionItem) {
			return visitor.visitReceiveActionItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SyncReceiveActionContext extends ParserRuleContext {
	public msg(): MsgContext {
		return this.getRuleContext(0, MsgContext);
	}
	public msgProcFunction(): MsgProcFunctionContext {
		return this.getRuleContext(0, MsgProcFunctionContext);
	}
	public NEWLINE(): TerminalNode { return this.getToken(TransactionDslParser.NEWLINE, 0); }
	public Sync(): TerminalNode | undefined { return this.tryGetToken(TransactionDslParser.Sync, 0); }
	public Ignore(): TerminalNode | undefined { return this.tryGetToken(TransactionDslParser.Ignore, 0); }
	public Catch(): TerminalNode | undefined { return this.tryGetToken(TransactionDslParser.Catch, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionDslParser.RULE_syncReceiveAction; }
	// @Override
	public enterRule(listener: TransactionDslListener): void {
		if (listener.enterSyncReceiveAction) {
			listener.enterSyncReceiveAction(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionDslListener): void {
		if (listener.exitSyncReceiveAction) {
			listener.exitSyncReceiveAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionDslVisitor<Result>): Result {
		if (visitor.visitSyncReceiveAction) {
			return visitor.visitSyncReceiveAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SendActionContext extends ParserRuleContext {
	public msg(): MsgContext {
		return this.getRuleContext(0, MsgContext);
	}
	public msgBuilder(): MsgBuilderContext {
		return this.getRuleContext(0, MsgBuilderContext);
	}
	public NEWLINE(): TerminalNode { return this.getToken(TransactionDslParser.NEWLINE, 0); }
	public Sync(): TerminalNode | undefined { return this.tryGetToken(TransactionDslParser.Sync, 0); }
	public Ignore(): TerminalNode | undefined { return this.tryGetToken(TransactionDslParser.Ignore, 0); }
	public Catch(): TerminalNode | undefined { return this.tryGetToken(TransactionDslParser.Catch, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionDslParser.RULE_sendAction; }
	// @Override
	public enterRule(listener: TransactionDslListener): void {
		if (listener.enterSendAction) {
			listener.enterSendAction(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionDslListener): void {
		if (listener.exitSendAction) {
			listener.exitSendAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionDslVisitor<Result>): Result {
		if (visitor.visitSendAction) {
			return visitor.visitSendAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DelayActionContext extends ParserRuleContext {
	public syncProcFunction(): SyncProcFunctionContext {
		return this.getRuleContext(0, SyncProcFunctionContext);
	}
	public NEWLINE(): TerminalNode { return this.getToken(TransactionDslParser.NEWLINE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionDslParser.RULE_delayAction; }
	// @Override
	public enterRule(listener: TransactionDslListener): void {
		if (listener.enterDelayAction) {
			listener.enterDelayAction(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionDslListener): void {
		if (listener.exitDelayAction) {
			listener.exitDelayAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionDslVisitor<Result>): Result {
		if (visitor.visitDelayAction) {
			return visitor.visitDelayAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimerContext extends ParserRuleContext {
	public timerDuration(): TimerDurationContext {
		return this.getRuleContext(0, TimerDurationContext);
	}
	public msgProcFunction(): MsgProcFunctionContext {
		return this.getRuleContext(0, MsgProcFunctionContext);
	}
	public NEWLINE(): TerminalNode { return this.getToken(TransactionDslParser.NEWLINE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionDslParser.RULE_timer; }
	// @Override
	public enterRule(listener: TransactionDslListener): void {
		if (listener.enterTimer) {
			listener.enterTimer(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionDslListener): void {
		if (listener.exitTimer) {
			listener.exitTimer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionDslVisitor<Result>): Result {
		if (visitor.visitTimer) {
			return visitor.visitTimer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionBranchContext extends ParserRuleContext {
	public conditionExpress(): ConditionExpressContext {
		return this.getRuleContext(0, ConditionExpressContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TransactionDslParser.NEWLINE);
		} else {
			return this.getToken(TransactionDslParser.NEWLINE, i);
		}
	}
	public sequenceAction(): SequenceActionContext {
		return this.getRuleContext(0, SequenceActionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionDslParser.RULE_optionBranch; }
	// @Override
	public enterRule(listener: TransactionDslListener): void {
		if (listener.enterOptionBranch) {
			listener.enterOptionBranch(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionDslListener): void {
		if (listener.exitOptionBranch) {
			listener.exitOptionBranch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionDslVisitor<Result>): Result {
		if (visitor.visitOptionBranch) {
			return visitor.visitOptionBranch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseBranchContext extends ParserRuleContext {
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TransactionDslParser.NEWLINE);
		} else {
			return this.getToken(TransactionDslParser.NEWLINE, i);
		}
	}
	public sequenceAction(): SequenceActionContext {
		return this.getRuleContext(0, SequenceActionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionDslParser.RULE_elseBranch; }
	// @Override
	public enterRule(listener: TransactionDslListener): void {
		if (listener.enterElseBranch) {
			listener.enterElseBranch(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionDslListener): void {
		if (listener.exitElseBranch) {
			listener.exitElseBranch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionDslVisitor<Result>): Result {
		if (visitor.visitElseBranch) {
			return visitor.visitElseBranch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionExpressContext extends ParserRuleContext {
	public express(): ExpressContext {
		return this.getRuleContext(0, ExpressContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionDslParser.RULE_conditionExpress; }
	// @Override
	public enterRule(listener: TransactionDslListener): void {
		if (listener.enterConditionExpress) {
			listener.enterConditionExpress(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionDslListener): void {
		if (listener.exitConditionExpress) {
			listener.exitConditionExpress(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionDslVisitor<Result>): Result {
		if (visitor.visitConditionExpress) {
			return visitor.visitConditionExpress(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressContext extends ParserRuleContext {
	public conditionFunction(): ConditionFunctionContext {
		return this.getRuleContext(0, ConditionFunctionContext);
	}
	public OpNot(): TerminalNode | undefined { return this.tryGetToken(TransactionDslParser.OpNot, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionDslParser.RULE_express; }
	// @Override
	public enterRule(listener: TransactionDslListener): void {
		if (listener.enterExpress) {
			listener.enterExpress(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionDslListener): void {
		if (listener.exitExpress) {
			listener.exitExpress(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionDslVisitor<Result>): Result {
		if (visitor.visitExpress) {
			return visitor.visitExpress(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FailActionContext extends ParserRuleContext {
	public failActionSpecificBranch(): FailActionSpecificBranchContext[];
	public failActionSpecificBranch(i: number): FailActionSpecificBranchContext;
	public failActionSpecificBranch(i?: number): FailActionSpecificBranchContext | FailActionSpecificBranchContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FailActionSpecificBranchContext);
		} else {
			return this.getRuleContext(i, FailActionSpecificBranchContext);
		}
	}
	public failActionDefaultBranch(): FailActionDefaultBranchContext | undefined {
		return this.tryGetRuleContext(0, FailActionDefaultBranchContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionDslParser.RULE_failAction; }
	// @Override
	public enterRule(listener: TransactionDslListener): void {
		if (listener.enterFailAction) {
			listener.enterFailAction(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionDslListener): void {
		if (listener.exitFailAction) {
			listener.exitFailAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionDslVisitor<Result>): Result {
		if (visitor.visitFailAction) {
			return visitor.visitFailAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FailActionSpecificBranchContext extends ParserRuleContext {
	public failCondition(): FailConditionContext[];
	public failCondition(i: number): FailConditionContext;
	public failCondition(i?: number): FailConditionContext | FailConditionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FailConditionContext);
		} else {
			return this.getRuleContext(i, FailConditionContext);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TransactionDslParser.NEWLINE);
		} else {
			return this.getToken(TransactionDslParser.NEWLINE, i);
		}
	}
	public sequenceAction(): SequenceActionContext {
		return this.getRuleContext(0, SequenceActionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionDslParser.RULE_failActionSpecificBranch; }
	// @Override
	public enterRule(listener: TransactionDslListener): void {
		if (listener.enterFailActionSpecificBranch) {
			listener.enterFailActionSpecificBranch(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionDslListener): void {
		if (listener.exitFailActionSpecificBranch) {
			listener.exitFailActionSpecificBranch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionDslVisitor<Result>): Result {
		if (visitor.visitFailActionSpecificBranch) {
			return visitor.visitFailActionSpecificBranch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FailActionDefaultBranchContext extends ParserRuleContext {
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TransactionDslParser.NEWLINE);
		} else {
			return this.getToken(TransactionDslParser.NEWLINE, i);
		}
	}
	public sequenceAction(): SequenceActionContext {
		return this.getRuleContext(0, SequenceActionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionDslParser.RULE_failActionDefaultBranch; }
	// @Override
	public enterRule(listener: TransactionDslListener): void {
		if (listener.enterFailActionDefaultBranch) {
			listener.enterFailActionDefaultBranch(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionDslListener): void {
		if (listener.exitFailActionDefaultBranch) {
			listener.exitFailActionDefaultBranch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionDslVisitor<Result>): Result {
		if (visitor.visitFailActionDefaultBranch) {
			return visitor.visitFailActionDefaultBranch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FinalActionContext extends ParserRuleContext {
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TransactionDslParser.NEWLINE);
		} else {
			return this.getToken(TransactionDslParser.NEWLINE, i);
		}
	}
	public sequenceAction(): SequenceActionContext {
		return this.getRuleContext(0, SequenceActionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionDslParser.RULE_finalAction; }
	// @Override
	public enterRule(listener: TransactionDslListener): void {
		if (listener.enterFinalAction) {
			listener.enterFinalAction(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionDslListener): void {
		if (listener.exitFinalAction) {
			listener.exitFinalAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionDslVisitor<Result>): Result {
		if (visitor.visitFinalAction) {
			return visitor.visitFinalAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MsgProcFunctionContext extends ParserRuleContext {
	public procFunction(): ProcFunctionContext {
		return this.getRuleContext(0, ProcFunctionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionDslParser.RULE_msgProcFunction; }
	// @Override
	public enterRule(listener: TransactionDslListener): void {
		if (listener.enterMsgProcFunction) {
			listener.enterMsgProcFunction(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionDslListener): void {
		if (listener.exitMsgProcFunction) {
			listener.exitMsgProcFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionDslVisitor<Result>): Result {
		if (visitor.visitMsgProcFunction) {
			return visitor.visitMsgProcFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SyncProcFunctionContext extends ParserRuleContext {
	public procFunction(): ProcFunctionContext {
		return this.getRuleContext(0, ProcFunctionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionDslParser.RULE_syncProcFunction; }
	// @Override
	public enterRule(listener: TransactionDslListener): void {
		if (listener.enterSyncProcFunction) {
			listener.enterSyncProcFunction(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionDslListener): void {
		if (listener.exitSyncProcFunction) {
			listener.exitSyncProcFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionDslVisitor<Result>): Result {
		if (visitor.visitSyncProcFunction) {
			return visitor.visitSyncProcFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MsgBuilderContext extends ParserRuleContext {
	public procFunction(): ProcFunctionContext {
		return this.getRuleContext(0, ProcFunctionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionDslParser.RULE_msgBuilder; }
	// @Override
	public enterRule(listener: TransactionDslListener): void {
		if (listener.enterMsgBuilder) {
			listener.enterMsgBuilder(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionDslListener): void {
		if (listener.exitMsgBuilder) {
			listener.exitMsgBuilder(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionDslVisitor<Result>): Result {
		if (visitor.visitMsgBuilder) {
			return visitor.visitMsgBuilder(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcFunctionContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(TransactionDslParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionDslParser.RULE_procFunction; }
	// @Override
	public enterRule(listener: TransactionDslListener): void {
		if (listener.enterProcFunction) {
			listener.enterProcFunction(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionDslListener): void {
		if (listener.exitProcFunction) {
			listener.exitProcFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionDslVisitor<Result>): Result {
		if (visitor.visitProcFunction) {
			return visitor.visitProcFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionFunctionContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(TransactionDslParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionDslParser.RULE_conditionFunction; }
	// @Override
	public enterRule(listener: TransactionDslListener): void {
		if (listener.enterConditionFunction) {
			listener.enterConditionFunction(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionDslListener): void {
		if (listener.exitConditionFunction) {
			listener.exitConditionFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionDslVisitor<Result>): Result {
		if (visitor.visitConditionFunction) {
			return visitor.visitConditionFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FailConditionContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(TransactionDslParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionDslParser.RULE_failCondition; }
	// @Override
	public enterRule(listener: TransactionDslListener): void {
		if (listener.enterFailCondition) {
			listener.enterFailCondition(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionDslListener): void {
		if (listener.exitFailCondition) {
			listener.exitFailCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionDslVisitor<Result>): Result {
		if (visitor.visitFailCondition) {
			return visitor.visitFailCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimerDurationContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(TransactionDslParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionDslParser.RULE_timerDuration; }
	// @Override
	public enterRule(listener: TransactionDslListener): void {
		if (listener.enterTimerDuration) {
			listener.enterTimerDuration(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionDslListener): void {
		if (listener.exitTimerDuration) {
			listener.exitTimerDuration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionDslVisitor<Result>): Result {
		if (visitor.visitTimerDuration) {
			return visitor.visitTimerDuration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(TransactionDslParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionDslParser.RULE_identifier; }
	// @Override
	public enterRule(listener: TransactionDslListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionDslListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionDslVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MsgContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(TransactionDslParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TransactionDslParser.RULE_msg; }
	// @Override
	public enterRule(listener: TransactionDslListener): void {
		if (listener.enterMsg) {
			listener.enterMsg(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionDslListener): void {
		if (listener.exitMsg) {
			listener.exitMsg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionDslVisitor<Result>): Result {
		if (visitor.visitMsg) {
			return visitor.visitMsg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


