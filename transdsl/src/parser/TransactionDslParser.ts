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
	public static readonly ID = 5;
	public static readonly WS = 6;
	public static readonly NEWLINE = 7;
	public static readonly COMMENT = 8;
	public static readonly LINE_COMMENT = 9;
	public static readonly NATURAL_NUM = 10;
	public static readonly RULE_transctionFile = 0;
	public static readonly RULE_transaction = 1;
	public static readonly RULE_procedure = 2;
	public static readonly RULE_identifier = 3;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"transctionFile", "transaction", "procedure", "identifier",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'transaction'", "'{'", "'}'", "'procedure'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "ID", "WS", "NEWLINE", 
		"COMMENT", "LINE_COMMENT", "NATURAL_NUM",
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
	public transctionFile(): TransctionFileContext {
		let _localctx: TransctionFileContext = new TransctionFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, TransactionDslParser.RULE_transctionFile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 12;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TransactionDslParser.T__0) | (1 << TransactionDslParser.T__3) | (1 << TransactionDslParser.NEWLINE))) !== 0)) {
				{
				this.state = 10;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 8;
					this.transaction();
					}
					break;

				case 2:
					{
					this.state = 9;
					this.procedure();
					}
					break;
				}
				}
				this.state = 14;
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
			this.state = 16;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TransactionDslParser.NEWLINE) {
				{
				this.state = 15;
				this.match(TransactionDslParser.NEWLINE);
				}
			}

			this.state = 18;
			this.match(TransactionDslParser.T__0);
			this.state = 19;
			this.identifier();
			this.state = 20;
			this.match(TransactionDslParser.T__1);
			this.state = 21;
			this.match(TransactionDslParser.NEWLINE);
			this.state = 22;
			this.match(TransactionDslParser.T__2);
			this.state = 24;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 23;
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
	public procedure(): ProcedureContext {
		let _localctx: ProcedureContext = new ProcedureContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, TransactionDslParser.RULE_procedure);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 27;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TransactionDslParser.NEWLINE) {
				{
				this.state = 26;
				this.match(TransactionDslParser.NEWLINE);
				}
			}

			this.state = 29;
			this.match(TransactionDslParser.T__3);
			this.state = 30;
			this.identifier();
			this.state = 31;
			this.match(TransactionDslParser.T__1);
			this.state = 32;
			this.match(TransactionDslParser.NEWLINE);
			this.state = 33;
			this.match(TransactionDslParser.T__2);
			this.state = 35;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 34;
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
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, TransactionDslParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 37;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\f*\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x03\x02\x07\x02" +
		"\r\n\x02\f\x02\x0E\x02\x10\v\x02\x03\x03\x05\x03\x13\n\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x1B\n\x03\x03\x04\x05\x04" +
		"\x1E\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04&\n" +
		"\x04\x03\x05\x03\x05\x03\x05\x02\x02\x02\x06\x02\x02\x04\x02\x06\x02\b" +
		"\x02\x02\x02\x02+\x02\x0E\x03\x02\x02\x02\x04\x12\x03\x02\x02\x02\x06" +
		"\x1D\x03\x02\x02\x02\b\'\x03\x02\x02\x02\n\r\x05\x04\x03\x02\v\r\x05\x06" +
		"\x04\x02\f\n\x03\x02\x02\x02\f\v\x03\x02\x02\x02\r\x10\x03\x02\x02\x02" +
		"\x0E\f\x03\x02\x02\x02\x0E\x0F\x03\x02\x02\x02\x0F\x03\x03\x02\x02\x02" +
		"\x10\x0E\x03\x02\x02\x02\x11\x13\x07\t\x02\x02\x12\x11\x03\x02\x02\x02" +
		"\x12\x13\x03\x02\x02\x02\x13\x14\x03\x02\x02\x02\x14\x15\x07\x03\x02\x02" +
		"\x15\x16\x05\b\x05\x02\x16\x17\x07\x04\x02\x02\x17\x18\x07\t\x02\x02\x18" +
		"\x1A\x07\x05\x02\x02\x19\x1B\x07\t\x02\x02\x1A\x19\x03\x02\x02\x02\x1A" +
		"\x1B\x03\x02\x02\x02\x1B\x05\x03\x02\x02\x02\x1C\x1E\x07\t\x02\x02\x1D" +
		"\x1C\x03\x02\x02\x02\x1D\x1E\x03\x02\x02\x02\x1E\x1F\x03\x02\x02\x02\x1F" +
		" \x07\x06\x02\x02 !\x05\b\x05\x02!\"\x07\x04\x02\x02\"#\x07\t\x02\x02" +
		"#%\x07\x05\x02\x02$&\x07\t\x02\x02%$\x03\x02\x02\x02%&\x03\x02\x02\x02" +
		"&\x07\x03\x02\x02\x02\'(\x07\x07\x02\x02(\t\x03\x02\x02\x02\b\f\x0E\x12" +
		"\x1A\x1D%";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TransactionDslParser.__ATN) {
			TransactionDslParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(TransactionDslParser._serializedATN));
		}

		return TransactionDslParser.__ATN;
	}

}

export class TransctionFileContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return TransactionDslParser.RULE_transctionFile; }
	// @Override
	public enterRule(listener: TransactionDslListener): void {
		if (listener.enterTransctionFile) {
			listener.enterTransctionFile(this);
		}
	}
	// @Override
	public exitRule(listener: TransactionDslListener): void {
		if (listener.exitTransctionFile) {
			listener.exitTransctionFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TransactionDslVisitor<Result>): Result {
		if (visitor.visitTransctionFile) {
			return visitor.visitTransctionFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TransactionContext extends ParserRuleContext {
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


