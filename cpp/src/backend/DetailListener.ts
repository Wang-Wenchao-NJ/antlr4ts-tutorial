
import { ParseTree, TerminalNode } from "antlr4ts/tree";


import {
    ANTLRErrorListener, CharStreams, CommonToken, CommonTokenStream, RecognitionException, Recognizer, Token,
} from "antlr4ts";
import { Override } from "antlr4ts/Decorators";
import { CPP14Listener } from "../parser/CPP14Listener";
import { FunctionDefinitionContext, TranslationUnitContext } from "../parser/CPP14Parser";


export class DetailListener implements CPP14Listener {

	public enterTranslationUnit(ctx: TranslationUnitContext): void {
        console.log("enterTranslationUnit");
    }

    public enterFunctionDefinition(ctx: FunctionDefinitionContext): void {
        console.log("enterFunctionDefinition-------------------");
        //Action/MsgHandle
        console.log("Action/MsgHandle/Condition: " + ctx.declarator().ptrdeclarator()?.noptrdeclarator()?.noptrdeclarator()?.declaratorid()?.idexpression().unqualifiedid()?.Identifier()?.text);
        //GetTransCtx
        console.log("GetTransCtx: " + ctx.declarator().ptrdeclarator()?.ptrdeclarator()?.noptrdeclarator()?.noptrdeclarator()?.declaratorid()?.idexpression().text);

        //console.log("" + ctx.declarator().ptrdeclarator()?.toStringTree());
        //console.log("" + ctx.declarator().ptrdeclarator()?.ptrdeclarator()?.toStringTree());
        //console.log("" + ctx.declarator().ptrdeclarator()?.ptrdeclarator()?.noptrdeclarator()?.noptrdeclarator()?.toStringTree());
        //console.log("" + ctx.declarator().ptrdeclarator()?.ptrdeclarator()?.noptrdeclarator()?.noptrdeclarator()?.declaratorid()?.toStringTree());
    }

    visitTerminal?: (node: TerminalNode) => void;
}