// Generated from d:\Code\antlr4ts-tutorial\transdsl\grammar\TransactionDsl.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class TransactionDslParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, Sync=19, OpNot=20, Ignore=21, Catch=22, ID=23, WS=24, NEWLINE=25, 
		COMMENT=26, LINE_COMMENT=27, NATURAL_NUM=28;
	public static final int
		RULE_transactionFile = 0, RULE_transaction = 1, RULE_procedure = 2, RULE_procedureBody = 3, 
		RULE_sequenceAction = 4, RULE_action = 5, RULE_syncAction = 6, RULE_asyncAction = 7, 
		RULE_optionAction = 8, RULE_procedureAction = 9, RULE_whileAction = 10, 
		RULE_doWhileAction = 11, RULE_receiveAction = 12, RULE_receiveActionItem = 13, 
		RULE_syncReceiveAction = 14, RULE_sendAction = 15, RULE_delayAction = 16, 
		RULE_timer = 17, RULE_optionBranch = 18, RULE_elseBranch = 19, RULE_conditionExpress = 20, 
		RULE_express = 21, RULE_failAction = 22, RULE_failActionSpecificBranch = 23, 
		RULE_failActionDefaultBranch = 24, RULE_finalAction = 25, RULE_msgProcFunction = 26, 
		RULE_syncProcFunction = 27, RULE_msgBuilder = 28, RULE_procFunction = 29, 
		RULE_conditionFunction = 30, RULE_failCondition = 31, RULE_timerDuration = 32, 
		RULE_identifier = 33, RULE_msg = 34;
	private static String[] makeRuleNames() {
		return new String[] {
			"transactionFile", "transaction", "procedure", "procedureBody", "sequenceAction", 
			"action", "syncAction", "asyncAction", "optionAction", "procedureAction", 
			"whileAction", "doWhileAction", "receiveAction", "receiveActionItem", 
			"syncReceiveAction", "sendAction", "delayAction", "timer", "optionBranch", 
			"elseBranch", "conditionExpress", "express", "failAction", "failActionSpecificBranch", 
			"failActionDefaultBranch", "finalAction", "msgProcFunction", "syncProcFunction", 
			"msgBuilder", "procFunction", "conditionFunction", "failCondition", "timerDuration", 
			"identifier", "msg"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'transaction'", "'procedure'", "'{'", "'}'", "'if'", "'else'", 
			"'call'", "'while'", "'do'", "'receive'", "'send'", "'delay'", "'after'", 
			"'('", "')'", "'fail'", "','", "'finally'", "'sync'", "'not'", "'ignore'", 
			"'catch'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, "Sync", "OpNot", "Ignore", 
			"Catch", "ID", "WS", "NEWLINE", "COMMENT", "LINE_COMMENT", "NATURAL_NUM"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "TransactionDsl.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public TransactionDslParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class TransactionFileContext extends ParserRuleContext {
		public List<TransactionContext> transaction() {
			return getRuleContexts(TransactionContext.class);
		}
		public TransactionContext transaction(int i) {
			return getRuleContext(TransactionContext.class,i);
		}
		public List<ProcedureContext> procedure() {
			return getRuleContexts(ProcedureContext.class);
		}
		public ProcedureContext procedure(int i) {
			return getRuleContext(ProcedureContext.class,i);
		}
		public TransactionFileContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_transactionFile; }
	}

	public final TransactionFileContext transactionFile() throws RecognitionException {
		TransactionFileContext _localctx = new TransactionFileContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_transactionFile);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(74);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << NEWLINE))) != 0)) {
				{
				setState(72);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
				case 1:
					{
					setState(70);
					transaction();
					}
					break;
				case 2:
					{
					setState(71);
					procedure();
					}
					break;
				}
				}
				setState(76);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TransactionContext extends ParserRuleContext {
		public ProcedureBodyContext procedureBody() {
			return getRuleContext(ProcedureBodyContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(TransactionDslParser.NEWLINE, 0); }
		public TransactionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_transaction; }
	}

	public final TransactionContext transaction() throws RecognitionException {
		TransactionContext _localctx = new TransactionContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_transaction);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(78);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==NEWLINE) {
				{
				setState(77);
				match(NEWLINE);
				}
			}

			setState(80);
			match(T__0);
			setState(81);
			procedureBody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProcedureContext extends ParserRuleContext {
		public ProcedureBodyContext procedureBody() {
			return getRuleContext(ProcedureBodyContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(TransactionDslParser.NEWLINE, 0); }
		public ProcedureContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_procedure; }
	}

	public final ProcedureContext procedure() throws RecognitionException {
		ProcedureContext _localctx = new ProcedureContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_procedure);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(84);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==NEWLINE) {
				{
				setState(83);
				match(NEWLINE);
				}
			}

			setState(86);
			match(T__1);
			setState(87);
			procedureBody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProcedureBodyContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(TransactionDslParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(TransactionDslParser.NEWLINE, i);
		}
		public SequenceActionContext sequenceAction() {
			return getRuleContext(SequenceActionContext.class,0);
		}
		public FailActionContext failAction() {
			return getRuleContext(FailActionContext.class,0);
		}
		public FinalActionContext finalAction() {
			return getRuleContext(FinalActionContext.class,0);
		}
		public ProcedureBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_procedureBody; }
	}

	public final ProcedureBodyContext procedureBody() throws RecognitionException {
		ProcedureBodyContext _localctx = new ProcedureBodyContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_procedureBody);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(89);
			identifier();
			setState(90);
			match(T__2);
			setState(91);
			match(NEWLINE);
			setState(92);
			sequenceAction();
			setState(94);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__15) {
				{
				setState(93);
				failAction();
				}
			}

			setState(97);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__17) {
				{
				setState(96);
				finalAction();
				}
			}

			setState(99);
			match(T__3);
			setState(101);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				{
				setState(100);
				match(NEWLINE);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SequenceActionContext extends ParserRuleContext {
		public List<ActionContext> action() {
			return getRuleContexts(ActionContext.class);
		}
		public ActionContext action(int i) {
			return getRuleContext(ActionContext.class,i);
		}
		public SequenceActionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sequenceAction; }
	}

	public final SequenceActionContext sequenceAction() throws RecognitionException {
		SequenceActionContext _localctx = new SequenceActionContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_sequenceAction);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(106);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__4) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << T__9) | (1L << T__10) | (1L << T__11) | (1L << Sync) | (1L << Ignore) | (1L << Catch) | (1L << ID))) != 0)) {
				{
				{
				setState(103);
				action();
				}
				}
				setState(108);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ActionContext extends ParserRuleContext {
		public SyncActionContext syncAction() {
			return getRuleContext(SyncActionContext.class,0);
		}
		public ReceiveActionContext receiveAction() {
			return getRuleContext(ReceiveActionContext.class,0);
		}
		public SendActionContext sendAction() {
			return getRuleContext(SendActionContext.class,0);
		}
		public DelayActionContext delayAction() {
			return getRuleContext(DelayActionContext.class,0);
		}
		public SyncReceiveActionContext syncReceiveAction() {
			return getRuleContext(SyncReceiveActionContext.class,0);
		}
		public AsyncActionContext asyncAction() {
			return getRuleContext(AsyncActionContext.class,0);
		}
		public OptionActionContext optionAction() {
			return getRuleContext(OptionActionContext.class,0);
		}
		public ProcedureActionContext procedureAction() {
			return getRuleContext(ProcedureActionContext.class,0);
		}
		public WhileActionContext whileAction() {
			return getRuleContext(WhileActionContext.class,0);
		}
		public DoWhileActionContext doWhileAction() {
			return getRuleContext(DoWhileActionContext.class,0);
		}
		public ActionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_action; }
	}

	public final ActionContext action() throws RecognitionException {
		ActionContext _localctx = new ActionContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_action);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(119);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				{
				setState(109);
				syncAction();
				}
				break;
			case 2:
				{
				setState(110);
				receiveAction();
				}
				break;
			case 3:
				{
				setState(111);
				sendAction();
				}
				break;
			case 4:
				{
				setState(112);
				delayAction();
				}
				break;
			case 5:
				{
				setState(113);
				syncReceiveAction();
				}
				break;
			case 6:
				{
				setState(114);
				asyncAction();
				}
				break;
			case 7:
				{
				setState(115);
				optionAction();
				}
				break;
			case 8:
				{
				setState(116);
				procedureAction();
				}
				break;
			case 9:
				{
				setState(117);
				whileAction();
				}
				break;
			case 10:
				{
				setState(118);
				doWhileAction();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SyncActionContext extends ParserRuleContext {
		public SyncProcFunctionContext syncProcFunction() {
			return getRuleContext(SyncProcFunctionContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(TransactionDslParser.NEWLINE, 0); }
		public TerminalNode Ignore() { return getToken(TransactionDslParser.Ignore, 0); }
		public TerminalNode Catch() { return getToken(TransactionDslParser.Catch, 0); }
		public SyncActionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_syncAction; }
	}

	public final SyncActionContext syncAction() throws RecognitionException {
		SyncActionContext _localctx = new SyncActionContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_syncAction);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(122);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Ignore || _la==Catch) {
				{
				setState(121);
				_la = _input.LA(1);
				if ( !(_la==Ignore || _la==Catch) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(124);
			syncProcFunction();
			setState(125);
			match(NEWLINE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AsyncActionContext extends ParserRuleContext {
		public SyncProcFunctionContext syncProcFunction() {
			return getRuleContext(SyncProcFunctionContext.class,0);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(TransactionDslParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(TransactionDslParser.NEWLINE, i);
		}
		public ReceiveActionContext receiveAction() {
			return getRuleContext(ReceiveActionContext.class,0);
		}
		public TerminalNode Ignore() { return getToken(TransactionDslParser.Ignore, 0); }
		public TerminalNode Catch() { return getToken(TransactionDslParser.Catch, 0); }
		public AsyncActionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_asyncAction; }
	}

	public final AsyncActionContext asyncAction() throws RecognitionException {
		AsyncActionContext _localctx = new AsyncActionContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_asyncAction);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(128);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Ignore || _la==Catch) {
				{
				setState(127);
				_la = _input.LA(1);
				if ( !(_la==Ignore || _la==Catch) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(130);
			syncProcFunction();
			setState(131);
			match(T__2);
			setState(132);
			match(NEWLINE);
			setState(133);
			receiveAction();
			setState(134);
			match(T__3);
			setState(135);
			match(NEWLINE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OptionActionContext extends ParserRuleContext {
		public List<OptionBranchContext> optionBranch() {
			return getRuleContexts(OptionBranchContext.class);
		}
		public OptionBranchContext optionBranch(int i) {
			return getRuleContext(OptionBranchContext.class,i);
		}
		public ElseBranchContext elseBranch() {
			return getRuleContext(ElseBranchContext.class,0);
		}
		public OptionActionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_optionAction; }
	}

	public final OptionActionContext optionAction() throws RecognitionException {
		OptionActionContext _localctx = new OptionActionContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_optionAction);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(137);
			match(T__4);
			setState(138);
			optionBranch();
			setState(144);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(139);
					match(T__5);
					setState(140);
					match(T__4);
					setState(141);
					optionBranch();
					}
					} 
				}
				setState(146);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			}
			setState(149);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__5) {
				{
				setState(147);
				match(T__5);
				setState(148);
				elseBranch();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProcedureActionContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(TransactionDslParser.NEWLINE, 0); }
		public TerminalNode Ignore() { return getToken(TransactionDslParser.Ignore, 0); }
		public TerminalNode Catch() { return getToken(TransactionDslParser.Catch, 0); }
		public ProcedureActionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_procedureAction; }
	}

	public final ProcedureActionContext procedureAction() throws RecognitionException {
		ProcedureActionContext _localctx = new ProcedureActionContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_procedureAction);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(152);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Ignore || _la==Catch) {
				{
				setState(151);
				_la = _input.LA(1);
				if ( !(_la==Ignore || _la==Catch) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(154);
			match(T__6);
			setState(155);
			identifier();
			setState(156);
			match(NEWLINE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WhileActionContext extends ParserRuleContext {
		public ConditionExpressContext conditionExpress() {
			return getRuleContext(ConditionExpressContext.class,0);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(TransactionDslParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(TransactionDslParser.NEWLINE, i);
		}
		public SequenceActionContext sequenceAction() {
			return getRuleContext(SequenceActionContext.class,0);
		}
		public WhileActionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whileAction; }
	}

	public final WhileActionContext whileAction() throws RecognitionException {
		WhileActionContext _localctx = new WhileActionContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_whileAction);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(158);
			match(T__7);
			setState(159);
			conditionExpress();
			setState(160);
			match(T__2);
			setState(161);
			match(NEWLINE);
			setState(162);
			sequenceAction();
			setState(163);
			match(T__3);
			setState(164);
			match(NEWLINE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DoWhileActionContext extends ParserRuleContext {
		public List<TerminalNode> NEWLINE() { return getTokens(TransactionDslParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(TransactionDslParser.NEWLINE, i);
		}
		public SequenceActionContext sequenceAction() {
			return getRuleContext(SequenceActionContext.class,0);
		}
		public ConditionExpressContext conditionExpress() {
			return getRuleContext(ConditionExpressContext.class,0);
		}
		public DoWhileActionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_doWhileAction; }
	}

	public final DoWhileActionContext doWhileAction() throws RecognitionException {
		DoWhileActionContext _localctx = new DoWhileActionContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_doWhileAction);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(166);
			match(T__8);
			setState(167);
			match(T__2);
			setState(168);
			match(NEWLINE);
			setState(169);
			sequenceAction();
			setState(170);
			match(T__3);
			setState(171);
			match(T__7);
			setState(172);
			conditionExpress();
			setState(173);
			match(NEWLINE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ReceiveActionContext extends ParserRuleContext {
		public List<ReceiveActionItemContext> receiveActionItem() {
			return getRuleContexts(ReceiveActionItemContext.class);
		}
		public ReceiveActionItemContext receiveActionItem(int i) {
			return getRuleContext(ReceiveActionItemContext.class,i);
		}
		public TimerContext timer() {
			return getRuleContext(TimerContext.class,0);
		}
		public TerminalNode Ignore() { return getToken(TransactionDslParser.Ignore, 0); }
		public TerminalNode Catch() { return getToken(TransactionDslParser.Catch, 0); }
		public ReceiveActionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_receiveAction; }
	}

	public final ReceiveActionContext receiveAction() throws RecognitionException {
		ReceiveActionContext _localctx = new ReceiveActionContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_receiveAction);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(176);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Ignore || _la==Catch) {
				{
				setState(175);
				_la = _input.LA(1);
				if ( !(_la==Ignore || _la==Catch) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(178);
			match(T__9);
			setState(180); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(179);
					receiveActionItem();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(182); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			setState(185);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__12) {
				{
				setState(184);
				timer();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ReceiveActionItemContext extends ParserRuleContext {
		public MsgContext msg() {
			return getRuleContext(MsgContext.class,0);
		}
		public MsgProcFunctionContext msgProcFunction() {
			return getRuleContext(MsgProcFunctionContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(TransactionDslParser.NEWLINE, 0); }
		public ReceiveActionItemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_receiveActionItem; }
	}

	public final ReceiveActionItemContext receiveActionItem() throws RecognitionException {
		ReceiveActionItemContext _localctx = new ReceiveActionItemContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_receiveActionItem);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(187);
			msg();
			setState(188);
			msgProcFunction();
			setState(189);
			match(NEWLINE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SyncReceiveActionContext extends ParserRuleContext {
		public MsgContext msg() {
			return getRuleContext(MsgContext.class,0);
		}
		public MsgProcFunctionContext msgProcFunction() {
			return getRuleContext(MsgProcFunctionContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(TransactionDslParser.NEWLINE, 0); }
		public TerminalNode Sync() { return getToken(TransactionDslParser.Sync, 0); }
		public TerminalNode Ignore() { return getToken(TransactionDslParser.Ignore, 0); }
		public TerminalNode Catch() { return getToken(TransactionDslParser.Catch, 0); }
		public SyncReceiveActionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_syncReceiveAction; }
	}

	public final SyncReceiveActionContext syncReceiveAction() throws RecognitionException {
		SyncReceiveActionContext _localctx = new SyncReceiveActionContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_syncReceiveAction);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(192);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Ignore || _la==Catch) {
				{
				setState(191);
				_la = _input.LA(1);
				if ( !(_la==Ignore || _la==Catch) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(195);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Sync) {
				{
				setState(194);
				match(Sync);
				}
			}

			setState(197);
			match(T__9);
			setState(198);
			msg();
			setState(199);
			msgProcFunction();
			setState(200);
			match(NEWLINE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SendActionContext extends ParserRuleContext {
		public MsgContext msg() {
			return getRuleContext(MsgContext.class,0);
		}
		public MsgBuilderContext msgBuilder() {
			return getRuleContext(MsgBuilderContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(TransactionDslParser.NEWLINE, 0); }
		public TerminalNode Sync() { return getToken(TransactionDslParser.Sync, 0); }
		public TerminalNode Ignore() { return getToken(TransactionDslParser.Ignore, 0); }
		public TerminalNode Catch() { return getToken(TransactionDslParser.Catch, 0); }
		public SendActionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sendAction; }
	}

	public final SendActionContext sendAction() throws RecognitionException {
		SendActionContext _localctx = new SendActionContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_sendAction);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(203);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Ignore || _la==Catch) {
				{
				setState(202);
				_la = _input.LA(1);
				if ( !(_la==Ignore || _la==Catch) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(206);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Sync) {
				{
				setState(205);
				match(Sync);
				}
			}

			setState(208);
			match(T__10);
			setState(209);
			msg();
			setState(210);
			msgBuilder();
			setState(211);
			match(NEWLINE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DelayActionContext extends ParserRuleContext {
		public SyncProcFunctionContext syncProcFunction() {
			return getRuleContext(SyncProcFunctionContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(TransactionDslParser.NEWLINE, 0); }
		public DelayActionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_delayAction; }
	}

	public final DelayActionContext delayAction() throws RecognitionException {
		DelayActionContext _localctx = new DelayActionContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_delayAction);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(213);
			match(T__11);
			setState(214);
			syncProcFunction();
			setState(215);
			match(NEWLINE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TimerContext extends ParserRuleContext {
		public TimerDurationContext timerDuration() {
			return getRuleContext(TimerDurationContext.class,0);
		}
		public MsgProcFunctionContext msgProcFunction() {
			return getRuleContext(MsgProcFunctionContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(TransactionDslParser.NEWLINE, 0); }
		public TimerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_timer; }
	}

	public final TimerContext timer() throws RecognitionException {
		TimerContext _localctx = new TimerContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_timer);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(217);
			match(T__12);
			setState(218);
			timerDuration();
			setState(219);
			msgProcFunction();
			setState(220);
			match(NEWLINE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OptionBranchContext extends ParserRuleContext {
		public ConditionExpressContext conditionExpress() {
			return getRuleContext(ConditionExpressContext.class,0);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(TransactionDslParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(TransactionDslParser.NEWLINE, i);
		}
		public SequenceActionContext sequenceAction() {
			return getRuleContext(SequenceActionContext.class,0);
		}
		public OptionBranchContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_optionBranch; }
	}

	public final OptionBranchContext optionBranch() throws RecognitionException {
		OptionBranchContext _localctx = new OptionBranchContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_optionBranch);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(222);
			conditionExpress();
			setState(223);
			match(T__2);
			setState(224);
			match(NEWLINE);
			setState(225);
			sequenceAction();
			setState(226);
			match(T__3);
			setState(227);
			match(NEWLINE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElseBranchContext extends ParserRuleContext {
		public List<TerminalNode> NEWLINE() { return getTokens(TransactionDslParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(TransactionDslParser.NEWLINE, i);
		}
		public SequenceActionContext sequenceAction() {
			return getRuleContext(SequenceActionContext.class,0);
		}
		public ElseBranchContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseBranch; }
	}

	public final ElseBranchContext elseBranch() throws RecognitionException {
		ElseBranchContext _localctx = new ElseBranchContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_elseBranch);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(229);
			match(T__2);
			setState(230);
			match(NEWLINE);
			setState(231);
			sequenceAction();
			setState(232);
			match(T__3);
			setState(233);
			match(NEWLINE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConditionExpressContext extends ParserRuleContext {
		public ExpressContext express() {
			return getRuleContext(ExpressContext.class,0);
		}
		public ConditionExpressContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conditionExpress; }
	}

	public final ConditionExpressContext conditionExpress() throws RecognitionException {
		ConditionExpressContext _localctx = new ConditionExpressContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_conditionExpress);
		try {
			setState(240);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OpNot:
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(235);
				express();
				}
				break;
			case T__13:
				enterOuterAlt(_localctx, 2);
				{
				setState(236);
				match(T__13);
				setState(237);
				express();
				setState(238);
				match(T__14);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressContext extends ParserRuleContext {
		public ConditionFunctionContext conditionFunction() {
			return getRuleContext(ConditionFunctionContext.class,0);
		}
		public TerminalNode OpNot() { return getToken(TransactionDslParser.OpNot, 0); }
		public ExpressContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_express; }
	}

	public final ExpressContext express() throws RecognitionException {
		ExpressContext _localctx = new ExpressContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_express);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(243);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OpNot) {
				{
				setState(242);
				match(OpNot);
				}
			}

			setState(245);
			conditionFunction();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FailActionContext extends ParserRuleContext {
		public List<FailActionSpecificBranchContext> failActionSpecificBranch() {
			return getRuleContexts(FailActionSpecificBranchContext.class);
		}
		public FailActionSpecificBranchContext failActionSpecificBranch(int i) {
			return getRuleContext(FailActionSpecificBranchContext.class,i);
		}
		public FailActionDefaultBranchContext failActionDefaultBranch() {
			return getRuleContext(FailActionDefaultBranchContext.class,0);
		}
		public FailActionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_failAction; }
	}

	public final FailActionContext failAction() throws RecognitionException {
		FailActionContext _localctx = new FailActionContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_failAction);
		int _la;
		try {
			int _alt;
			setState(256);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,25,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(248); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(247);
						failActionSpecificBranch();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(250); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,23,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				setState(253);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__15) {
					{
					setState(252);
					failActionDefaultBranch();
					}
				}

				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(255);
				failActionDefaultBranch();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FailActionSpecificBranchContext extends ParserRuleContext {
		public List<FailConditionContext> failCondition() {
			return getRuleContexts(FailConditionContext.class);
		}
		public FailConditionContext failCondition(int i) {
			return getRuleContext(FailConditionContext.class,i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(TransactionDslParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(TransactionDslParser.NEWLINE, i);
		}
		public SequenceActionContext sequenceAction() {
			return getRuleContext(SequenceActionContext.class,0);
		}
		public FailActionSpecificBranchContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_failActionSpecificBranch; }
	}

	public final FailActionSpecificBranchContext failActionSpecificBranch() throws RecognitionException {
		FailActionSpecificBranchContext _localctx = new FailActionSpecificBranchContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_failActionSpecificBranch);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(258);
			match(T__15);
			setState(259);
			match(T__13);
			setState(260);
			failCondition();
			setState(265);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__16) {
				{
				{
				setState(261);
				match(T__16);
				setState(262);
				failCondition();
				}
				}
				setState(267);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(268);
			match(T__14);
			setState(269);
			match(T__2);
			setState(270);
			match(NEWLINE);
			setState(271);
			sequenceAction();
			setState(272);
			match(T__3);
			setState(273);
			match(NEWLINE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FailActionDefaultBranchContext extends ParserRuleContext {
		public List<TerminalNode> NEWLINE() { return getTokens(TransactionDslParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(TransactionDslParser.NEWLINE, i);
		}
		public SequenceActionContext sequenceAction() {
			return getRuleContext(SequenceActionContext.class,0);
		}
		public FailActionDefaultBranchContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_failActionDefaultBranch; }
	}

	public final FailActionDefaultBranchContext failActionDefaultBranch() throws RecognitionException {
		FailActionDefaultBranchContext _localctx = new FailActionDefaultBranchContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_failActionDefaultBranch);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(275);
			match(T__15);
			setState(276);
			match(T__2);
			setState(277);
			match(NEWLINE);
			setState(278);
			sequenceAction();
			setState(279);
			match(T__3);
			setState(280);
			match(NEWLINE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FinalActionContext extends ParserRuleContext {
		public List<TerminalNode> NEWLINE() { return getTokens(TransactionDslParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(TransactionDslParser.NEWLINE, i);
		}
		public SequenceActionContext sequenceAction() {
			return getRuleContext(SequenceActionContext.class,0);
		}
		public FinalActionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_finalAction; }
	}

	public final FinalActionContext finalAction() throws RecognitionException {
		FinalActionContext _localctx = new FinalActionContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_finalAction);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(282);
			match(T__17);
			setState(283);
			match(T__2);
			setState(284);
			match(NEWLINE);
			setState(285);
			sequenceAction();
			setState(286);
			match(T__3);
			setState(287);
			match(NEWLINE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MsgProcFunctionContext extends ParserRuleContext {
		public ProcFunctionContext procFunction() {
			return getRuleContext(ProcFunctionContext.class,0);
		}
		public MsgProcFunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_msgProcFunction; }
	}

	public final MsgProcFunctionContext msgProcFunction() throws RecognitionException {
		MsgProcFunctionContext _localctx = new MsgProcFunctionContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_msgProcFunction);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(289);
			procFunction();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SyncProcFunctionContext extends ParserRuleContext {
		public ProcFunctionContext procFunction() {
			return getRuleContext(ProcFunctionContext.class,0);
		}
		public SyncProcFunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_syncProcFunction; }
	}

	public final SyncProcFunctionContext syncProcFunction() throws RecognitionException {
		SyncProcFunctionContext _localctx = new SyncProcFunctionContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_syncProcFunction);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(291);
			procFunction();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MsgBuilderContext extends ParserRuleContext {
		public ProcFunctionContext procFunction() {
			return getRuleContext(ProcFunctionContext.class,0);
		}
		public MsgBuilderContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_msgBuilder; }
	}

	public final MsgBuilderContext msgBuilder() throws RecognitionException {
		MsgBuilderContext _localctx = new MsgBuilderContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_msgBuilder);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(293);
			procFunction();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProcFunctionContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(TransactionDslParser.ID, 0); }
		public ProcFunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_procFunction; }
	}

	public final ProcFunctionContext procFunction() throws RecognitionException {
		ProcFunctionContext _localctx = new ProcFunctionContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_procFunction);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(295);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConditionFunctionContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(TransactionDslParser.ID, 0); }
		public ConditionFunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conditionFunction; }
	}

	public final ConditionFunctionContext conditionFunction() throws RecognitionException {
		ConditionFunctionContext _localctx = new ConditionFunctionContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_conditionFunction);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(297);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FailConditionContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(TransactionDslParser.ID, 0); }
		public FailConditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_failCondition; }
	}

	public final FailConditionContext failCondition() throws RecognitionException {
		FailConditionContext _localctx = new FailConditionContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_failCondition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(299);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TimerDurationContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(TransactionDslParser.ID, 0); }
		public TimerDurationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_timerDuration; }
	}

	public final TimerDurationContext timerDuration() throws RecognitionException {
		TimerDurationContext _localctx = new TimerDurationContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_timerDuration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(301);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(TransactionDslParser.ID, 0); }
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_identifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(303);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MsgContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(TransactionDslParser.ID, 0); }
		public MsgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_msg; }
	}

	public final MsgContext msg() throws RecognitionException {
		MsgContext _localctx = new MsgContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_msg);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(305);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\36\u0136\4\2\t\2"+
		"\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\3\2\3\2\7\2K\n\2\f\2\16\2N\13\2\3\3\5\3Q\n\3\3"+
		"\3\3\3\3\3\3\4\5\4W\n\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\5\5a\n\5\3\5\5"+
		"\5d\n\5\3\5\3\5\5\5h\n\5\3\6\7\6k\n\6\f\6\16\6n\13\6\3\7\3\7\3\7\3\7\3"+
		"\7\3\7\3\7\3\7\3\7\3\7\5\7z\n\7\3\b\5\b}\n\b\3\b\3\b\3\b\3\t\5\t\u0083"+
		"\n\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\7\n\u0091\n\n\f\n"+
		"\16\n\u0094\13\n\3\n\3\n\5\n\u0098\n\n\3\13\5\13\u009b\n\13\3\13\3\13"+
		"\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r"+
		"\3\r\3\r\3\16\5\16\u00b3\n\16\3\16\3\16\6\16\u00b7\n\16\r\16\16\16\u00b8"+
		"\3\16\5\16\u00bc\n\16\3\17\3\17\3\17\3\17\3\20\5\20\u00c3\n\20\3\20\5"+
		"\20\u00c6\n\20\3\20\3\20\3\20\3\20\3\20\3\21\5\21\u00ce\n\21\3\21\5\21"+
		"\u00d1\n\21\3\21\3\21\3\21\3\21\3\21\3\22\3\22\3\22\3\22\3\23\3\23\3\23"+
		"\3\23\3\23\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\25\3\25\3\25\3\25\3\25"+
		"\3\25\3\26\3\26\3\26\3\26\3\26\5\26\u00f3\n\26\3\27\5\27\u00f6\n\27\3"+
		"\27\3\27\3\30\6\30\u00fb\n\30\r\30\16\30\u00fc\3\30\5\30\u0100\n\30\3"+
		"\30\5\30\u0103\n\30\3\31\3\31\3\31\3\31\3\31\7\31\u010a\n\31\f\31\16\31"+
		"\u010d\13\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\32\3\32\3\32\3\32\3"+
		"\32\3\32\3\32\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\34\3\34\3\35\3\35\3"+
		"\36\3\36\3\37\3\37\3 \3 \3!\3!\3\"\3\"\3#\3#\3$\3$\3$\2\2%\2\4\6\b\n\f"+
		"\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDF\2\3\3\2\27\30"+
		"\2\u0135\2L\3\2\2\2\4P\3\2\2\2\6V\3\2\2\2\b[\3\2\2\2\nl\3\2\2\2\fy\3\2"+
		"\2\2\16|\3\2\2\2\20\u0082\3\2\2\2\22\u008b\3\2\2\2\24\u009a\3\2\2\2\26"+
		"\u00a0\3\2\2\2\30\u00a8\3\2\2\2\32\u00b2\3\2\2\2\34\u00bd\3\2\2\2\36\u00c2"+
		"\3\2\2\2 \u00cd\3\2\2\2\"\u00d7\3\2\2\2$\u00db\3\2\2\2&\u00e0\3\2\2\2"+
		"(\u00e7\3\2\2\2*\u00f2\3\2\2\2,\u00f5\3\2\2\2.\u0102\3\2\2\2\60\u0104"+
		"\3\2\2\2\62\u0115\3\2\2\2\64\u011c\3\2\2\2\66\u0123\3\2\2\28\u0125\3\2"+
		"\2\2:\u0127\3\2\2\2<\u0129\3\2\2\2>\u012b\3\2\2\2@\u012d\3\2\2\2B\u012f"+
		"\3\2\2\2D\u0131\3\2\2\2F\u0133\3\2\2\2HK\5\4\3\2IK\5\6\4\2JH\3\2\2\2J"+
		"I\3\2\2\2KN\3\2\2\2LJ\3\2\2\2LM\3\2\2\2M\3\3\2\2\2NL\3\2\2\2OQ\7\33\2"+
		"\2PO\3\2\2\2PQ\3\2\2\2QR\3\2\2\2RS\7\3\2\2ST\5\b\5\2T\5\3\2\2\2UW\7\33"+
		"\2\2VU\3\2\2\2VW\3\2\2\2WX\3\2\2\2XY\7\4\2\2YZ\5\b\5\2Z\7\3\2\2\2[\\\5"+
		"D#\2\\]\7\5\2\2]^\7\33\2\2^`\5\n\6\2_a\5.\30\2`_\3\2\2\2`a\3\2\2\2ac\3"+
		"\2\2\2bd\5\64\33\2cb\3\2\2\2cd\3\2\2\2de\3\2\2\2eg\7\6\2\2fh\7\33\2\2"+
		"gf\3\2\2\2gh\3\2\2\2h\t\3\2\2\2ik\5\f\7\2ji\3\2\2\2kn\3\2\2\2lj\3\2\2"+
		"\2lm\3\2\2\2m\13\3\2\2\2nl\3\2\2\2oz\5\16\b\2pz\5\32\16\2qz\5 \21\2rz"+
		"\5\"\22\2sz\5\36\20\2tz\5\20\t\2uz\5\22\n\2vz\5\24\13\2wz\5\26\f\2xz\5"+
		"\30\r\2yo\3\2\2\2yp\3\2\2\2yq\3\2\2\2yr\3\2\2\2ys\3\2\2\2yt\3\2\2\2yu"+
		"\3\2\2\2yv\3\2\2\2yw\3\2\2\2yx\3\2\2\2z\r\3\2\2\2{}\t\2\2\2|{\3\2\2\2"+
		"|}\3\2\2\2}~\3\2\2\2~\177\58\35\2\177\u0080\7\33\2\2\u0080\17\3\2\2\2"+
		"\u0081\u0083\t\2\2\2\u0082\u0081\3\2\2\2\u0082\u0083\3\2\2\2\u0083\u0084"+
		"\3\2\2\2\u0084\u0085\58\35\2\u0085\u0086\7\5\2\2\u0086\u0087\7\33\2\2"+
		"\u0087\u0088\5\32\16\2\u0088\u0089\7\6\2\2\u0089\u008a\7\33\2\2\u008a"+
		"\21\3\2\2\2\u008b\u008c\7\7\2\2\u008c\u0092\5&\24\2\u008d\u008e\7\b\2"+
		"\2\u008e\u008f\7\7\2\2\u008f\u0091\5&\24\2\u0090\u008d\3\2\2\2\u0091\u0094"+
		"\3\2\2\2\u0092\u0090\3\2\2\2\u0092\u0093\3\2\2\2\u0093\u0097\3\2\2\2\u0094"+
		"\u0092\3\2\2\2\u0095\u0096\7\b\2\2\u0096\u0098\5(\25\2\u0097\u0095\3\2"+
		"\2\2\u0097\u0098\3\2\2\2\u0098\23\3\2\2\2\u0099\u009b\t\2\2\2\u009a\u0099"+
		"\3\2\2\2\u009a\u009b\3\2\2\2\u009b\u009c\3\2\2\2\u009c\u009d\7\t\2\2\u009d"+
		"\u009e\5D#\2\u009e\u009f\7\33\2\2\u009f\25\3\2\2\2\u00a0\u00a1\7\n\2\2"+
		"\u00a1\u00a2\5*\26\2\u00a2\u00a3\7\5\2\2\u00a3\u00a4\7\33\2\2\u00a4\u00a5"+
		"\5\n\6\2\u00a5\u00a6\7\6\2\2\u00a6\u00a7\7\33\2\2\u00a7\27\3\2\2\2\u00a8"+
		"\u00a9\7\13\2\2\u00a9\u00aa\7\5\2\2\u00aa\u00ab\7\33\2\2\u00ab\u00ac\5"+
		"\n\6\2\u00ac\u00ad\7\6\2\2\u00ad\u00ae\7\n\2\2\u00ae\u00af\5*\26\2\u00af"+
		"\u00b0\7\33\2\2\u00b0\31\3\2\2\2\u00b1\u00b3\t\2\2\2\u00b2\u00b1\3\2\2"+
		"\2\u00b2\u00b3\3\2\2\2\u00b3\u00b4\3\2\2\2\u00b4\u00b6\7\f\2\2\u00b5\u00b7"+
		"\5\34\17\2\u00b6\u00b5\3\2\2\2\u00b7\u00b8\3\2\2\2\u00b8\u00b6\3\2\2\2"+
		"\u00b8\u00b9\3\2\2\2\u00b9\u00bb\3\2\2\2\u00ba\u00bc\5$\23\2\u00bb\u00ba"+
		"\3\2\2\2\u00bb\u00bc\3\2\2\2\u00bc\33\3\2\2\2\u00bd\u00be\5F$\2\u00be"+
		"\u00bf\5\66\34\2\u00bf\u00c0\7\33\2\2\u00c0\35\3\2\2\2\u00c1\u00c3\t\2"+
		"\2\2\u00c2\u00c1\3\2\2\2\u00c2\u00c3\3\2\2\2\u00c3\u00c5\3\2\2\2\u00c4"+
		"\u00c6\7\25\2\2\u00c5\u00c4\3\2\2\2\u00c5\u00c6\3\2\2\2\u00c6\u00c7\3"+
		"\2\2\2\u00c7\u00c8\7\f\2\2\u00c8\u00c9\5F$\2\u00c9\u00ca\5\66\34\2\u00ca"+
		"\u00cb\7\33\2\2\u00cb\37\3\2\2\2\u00cc\u00ce\t\2\2\2\u00cd\u00cc\3\2\2"+
		"\2\u00cd\u00ce\3\2\2\2\u00ce\u00d0\3\2\2\2\u00cf\u00d1\7\25\2\2\u00d0"+
		"\u00cf\3\2\2\2\u00d0\u00d1\3\2\2\2\u00d1\u00d2\3\2\2\2\u00d2\u00d3\7\r"+
		"\2\2\u00d3\u00d4\5F$\2\u00d4\u00d5\5:\36\2\u00d5\u00d6\7\33\2\2\u00d6"+
		"!\3\2\2\2\u00d7\u00d8\7\16\2\2\u00d8\u00d9\58\35\2\u00d9\u00da\7\33\2"+
		"\2\u00da#\3\2\2\2\u00db\u00dc\7\17\2\2\u00dc\u00dd\5B\"\2\u00dd\u00de"+
		"\5\66\34\2\u00de\u00df\7\33\2\2\u00df%\3\2\2\2\u00e0\u00e1\5*\26\2\u00e1"+
		"\u00e2\7\5\2\2\u00e2\u00e3\7\33\2\2\u00e3\u00e4\5\n\6\2\u00e4\u00e5\7"+
		"\6\2\2\u00e5\u00e6\7\33\2\2\u00e6\'\3\2\2\2\u00e7\u00e8\7\5\2\2\u00e8"+
		"\u00e9\7\33\2\2\u00e9\u00ea\5\n\6\2\u00ea\u00eb\7\6\2\2\u00eb\u00ec\7"+
		"\33\2\2\u00ec)\3\2\2\2\u00ed\u00f3\5,\27\2\u00ee\u00ef\7\20\2\2\u00ef"+
		"\u00f0\5,\27\2\u00f0\u00f1\7\21\2\2\u00f1\u00f3\3\2\2\2\u00f2\u00ed\3"+
		"\2\2\2\u00f2\u00ee\3\2\2\2\u00f3+\3\2\2\2\u00f4\u00f6\7\26\2\2\u00f5\u00f4"+
		"\3\2\2\2\u00f5\u00f6\3\2\2\2\u00f6\u00f7\3\2\2\2\u00f7\u00f8\5> \2\u00f8"+
		"-\3\2\2\2\u00f9\u00fb\5\60\31\2\u00fa\u00f9\3\2\2\2\u00fb\u00fc\3\2\2"+
		"\2\u00fc\u00fa\3\2\2\2\u00fc\u00fd\3\2\2\2\u00fd\u00ff\3\2\2\2\u00fe\u0100"+
		"\5\62\32\2\u00ff\u00fe\3\2\2\2\u00ff\u0100\3\2\2\2\u0100\u0103\3\2\2\2"+
		"\u0101\u0103\5\62\32\2\u0102\u00fa\3\2\2\2\u0102\u0101\3\2\2\2\u0103/"+
		"\3\2\2\2\u0104\u0105\7\22\2\2\u0105\u0106\7\20\2\2\u0106\u010b\5@!\2\u0107"+
		"\u0108\7\23\2\2\u0108\u010a\5@!\2\u0109\u0107\3\2\2\2\u010a\u010d\3\2"+
		"\2\2\u010b\u0109\3\2\2\2\u010b\u010c\3\2\2\2\u010c\u010e\3\2\2\2\u010d"+
		"\u010b\3\2\2\2\u010e\u010f\7\21\2\2\u010f\u0110\7\5\2\2\u0110\u0111\7"+
		"\33\2\2\u0111\u0112\5\n\6\2\u0112\u0113\7\6\2\2\u0113\u0114\7\33\2\2\u0114"+
		"\61\3\2\2\2\u0115\u0116\7\22\2\2\u0116\u0117\7\5\2\2\u0117\u0118\7\33"+
		"\2\2\u0118\u0119\5\n\6\2\u0119\u011a\7\6\2\2\u011a\u011b\7\33\2\2\u011b"+
		"\63\3\2\2\2\u011c\u011d\7\24\2\2\u011d\u011e\7\5\2\2\u011e\u011f\7\33"+
		"\2\2\u011f\u0120\5\n\6\2\u0120\u0121\7\6\2\2\u0121\u0122\7\33\2\2\u0122"+
		"\65\3\2\2\2\u0123\u0124\5<\37\2\u0124\67\3\2\2\2\u0125\u0126\5<\37\2\u0126"+
		"9\3\2\2\2\u0127\u0128\5<\37\2\u0128;\3\2\2\2\u0129\u012a\7\31\2\2\u012a"+
		"=\3\2\2\2\u012b\u012c\7\31\2\2\u012c?\3\2\2\2\u012d\u012e\7\31\2\2\u012e"+
		"A\3\2\2\2\u012f\u0130\7\31\2\2\u0130C\3\2\2\2\u0131\u0132\7\31\2\2\u0132"+
		"E\3\2\2\2\u0133\u0134\7\31\2\2\u0134G\3\2\2\2\35JLPV`cgly|\u0082\u0092"+
		"\u0097\u009a\u00b2\u00b8\u00bb\u00c2\u00c5\u00cd\u00d0\u00f2\u00f5\u00fc"+
		"\u00ff\u0102\u010b";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}