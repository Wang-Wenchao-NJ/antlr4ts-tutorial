// Generated from d:\Code\antlr4ts-tutorial\transdsl\grammar\TransactionDsl.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class TransactionDslLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, ID=5, WS=6, NEWLINE=7, COMMENT=8, LINE_COMMENT=9, 
		NATURAL_NUM=10;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "ID", "WS", "NEWLINE", "COMMENT", "LINE_COMMENT", 
			"ID_LETTER", "DIGIT", "NATURAL_NUM"
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


	public TransactionDslLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "TransactionDsl.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\fy\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3"+
		"\3\3\3\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\7\6"+
		"9\n\6\f\6\16\6<\13\6\3\7\6\7?\n\7\r\7\16\7@\3\7\3\7\3\b\3\b\3\b\7\bH\n"+
		"\b\f\b\16\bK\13\b\3\b\3\b\3\b\5\bP\n\b\6\bR\n\b\r\b\16\bS\3\t\3\t\3\t"+
		"\3\t\7\tZ\n\t\f\t\16\t]\13\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\7\nh"+
		"\n\n\f\n\16\nk\13\n\3\n\3\n\3\13\3\13\3\f\3\f\3\r\3\r\7\ru\n\r\f\r\16"+
		"\rx\13\r\3[\2\16\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\2\27\2\31"+
		"\f\3\2\5\4\2\13\13\"\"\4\2\f\f\17\17\5\2C\\aac|\2\u0081\2\3\3\2\2\2\2"+
		"\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2"+
		"\2\2\21\3\2\2\2\2\23\3\2\2\2\2\31\3\2\2\2\3\33\3\2\2\2\5\'\3\2\2\2\7)"+
		"\3\2\2\2\t+\3\2\2\2\13\65\3\2\2\2\r>\3\2\2\2\17Q\3\2\2\2\21U\3\2\2\2\23"+
		"c\3\2\2\2\25n\3\2\2\2\27p\3\2\2\2\31r\3\2\2\2\33\34\7v\2\2\34\35\7t\2"+
		"\2\35\36\7c\2\2\36\37\7p\2\2\37 \7u\2\2 !\7c\2\2!\"\7e\2\2\"#\7v\2\2#"+
		"$\7k\2\2$%\7q\2\2%&\7p\2\2&\4\3\2\2\2\'(\7}\2\2(\6\3\2\2\2)*\7\177\2\2"+
		"*\b\3\2\2\2+,\7r\2\2,-\7t\2\2-.\7q\2\2./\7e\2\2/\60\7g\2\2\60\61\7f\2"+
		"\2\61\62\7w\2\2\62\63\7t\2\2\63\64\7g\2\2\64\n\3\2\2\2\65:\5\25\13\2\66"+
		"9\5\25\13\2\679\5\27\f\28\66\3\2\2\28\67\3\2\2\29<\3\2\2\2:8\3\2\2\2:"+
		";\3\2\2\2;\f\3\2\2\2<:\3\2\2\2=?\t\2\2\2>=\3\2\2\2?@\3\2\2\2@>\3\2\2\2"+
		"@A\3\2\2\2AB\3\2\2\2BC\b\7\2\2C\16\3\2\2\2DH\5\r\7\2EH\5\21\t\2FH\5\23"+
		"\n\2GD\3\2\2\2GE\3\2\2\2GF\3\2\2\2HK\3\2\2\2IG\3\2\2\2IJ\3\2\2\2JO\3\2"+
		"\2\2KI\3\2\2\2LM\7\17\2\2MP\7\f\2\2NP\7\f\2\2OL\3\2\2\2ON\3\2\2\2PR\3"+
		"\2\2\2QI\3\2\2\2RS\3\2\2\2SQ\3\2\2\2ST\3\2\2\2T\20\3\2\2\2UV\7\61\2\2"+
		"VW\7,\2\2W[\3\2\2\2XZ\13\2\2\2YX\3\2\2\2Z]\3\2\2\2[\\\3\2\2\2[Y\3\2\2"+
		"\2\\^\3\2\2\2][\3\2\2\2^_\7,\2\2_`\7\61\2\2`a\3\2\2\2ab\b\t\2\2b\22\3"+
		"\2\2\2cd\7\61\2\2de\7\61\2\2ei\3\2\2\2fh\n\3\2\2gf\3\2\2\2hk\3\2\2\2i"+
		"g\3\2\2\2ij\3\2\2\2jl\3\2\2\2ki\3\2\2\2lm\b\n\2\2m\24\3\2\2\2no\t\4\2"+
		"\2o\26\3\2\2\2pq\4\62;\2q\30\3\2\2\2rv\4\63;\2su\5\27\f\2ts\3\2\2\2ux"+
		"\3\2\2\2vt\3\2\2\2vw\3\2\2\2w\32\3\2\2\2xv\3\2\2\2\r\28:@GIOS[iv\3\b\2"+
		"\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}