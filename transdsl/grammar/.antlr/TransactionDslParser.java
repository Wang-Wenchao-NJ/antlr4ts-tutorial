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
		T__0=1, T__1=2, T__2=3, T__3=4, ID=5, WS=6, NEWLINE=7, COMMENT=8, LINE_COMMENT=9, 
		NATURAL_NUM=10;
	public static final int
		RULE_transctionFile = 0, RULE_transaction = 1, RULE_procedure = 2, RULE_identifier = 3;
	private static String[] makeRuleNames() {
		return new String[] {
			"transctionFile", "transaction", "procedure", "identifier"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'transaction'", "'{'", "'}'", "'procedure'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, "ID", "WS", "NEWLINE", "COMMENT", "LINE_COMMENT", 
			"NATURAL_NUM"
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

	public static class TransctionFileContext extends ParserRuleContext {
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
		public TransctionFileContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_transctionFile; }
	}

	public final TransctionFileContext transctionFile() throws RecognitionException {
		TransctionFileContext _localctx = new TransctionFileContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_transctionFile);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(12);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__3) | (1L << NEWLINE))) != 0)) {
				{
				setState(10);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
				case 1:
					{
					setState(8);
					transaction();
					}
					break;
				case 2:
					{
					setState(9);
					procedure();
					}
					break;
				}
				}
				setState(14);
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
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(TransactionDslParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(TransactionDslParser.NEWLINE, i);
		}
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
			setState(16);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==NEWLINE) {
				{
				setState(15);
				match(NEWLINE);
				}
			}

			setState(18);
			match(T__0);
			setState(19);
			identifier();
			setState(20);
			match(T__1);
			setState(21);
			match(NEWLINE);
			setState(22);
			match(T__2);
			setState(24);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				{
				setState(23);
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

	public static class ProcedureContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(TransactionDslParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(TransactionDslParser.NEWLINE, i);
		}
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
			setState(27);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==NEWLINE) {
				{
				setState(26);
				match(NEWLINE);
				}
			}

			setState(29);
			match(T__3);
			setState(30);
			identifier();
			setState(31);
			match(T__1);
			setState(32);
			match(NEWLINE);
			setState(33);
			match(T__2);
			setState(35);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				{
				setState(34);
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

	public static class IdentifierContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(TransactionDslParser.ID, 0); }
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_identifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(37);
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\f*\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\3\2\3\2\7\2\r\n\2\f\2\16\2\20\13\2\3\3\5\3\23\n\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\5\3\33\n\3\3\4\5\4\36\n\4\3\4\3\4\3\4\3\4\3\4\3"+
		"\4\5\4&\n\4\3\5\3\5\3\5\2\2\6\2\4\6\b\2\2\2+\2\16\3\2\2\2\4\22\3\2\2\2"+
		"\6\35\3\2\2\2\b\'\3\2\2\2\n\r\5\4\3\2\13\r\5\6\4\2\f\n\3\2\2\2\f\13\3"+
		"\2\2\2\r\20\3\2\2\2\16\f\3\2\2\2\16\17\3\2\2\2\17\3\3\2\2\2\20\16\3\2"+
		"\2\2\21\23\7\t\2\2\22\21\3\2\2\2\22\23\3\2\2\2\23\24\3\2\2\2\24\25\7\3"+
		"\2\2\25\26\5\b\5\2\26\27\7\4\2\2\27\30\7\t\2\2\30\32\7\5\2\2\31\33\7\t"+
		"\2\2\32\31\3\2\2\2\32\33\3\2\2\2\33\5\3\2\2\2\34\36\7\t\2\2\35\34\3\2"+
		"\2\2\35\36\3\2\2\2\36\37\3\2\2\2\37 \7\6\2\2 !\5\b\5\2!\"\7\4\2\2\"#\7"+
		"\t\2\2#%\7\5\2\2$&\7\t\2\2%$\3\2\2\2%&\3\2\2\2&\7\3\2\2\2\'(\7\7\2\2("+
		"\t\3\2\2\2\b\f\16\22\32\35%";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}