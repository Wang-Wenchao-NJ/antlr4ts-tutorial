
import { TransactionFileContext } from "../parser/TransactionDslParser";
import { TransactionDslListener } from "../parser/TransactionDslListener"
import { TransactionContext } from "../parser/TransactionDslParser";
import { ProcedureContext } from "../parser/TransactionDslParser";
import { IdentifierContext } from "../parser/TransactionDslParser";
import { ParseTree, TerminalNode } from "antlr4ts/tree";


import {
    ANTLRErrorListener, CharStreams, CommonToken, CommonTokenStream, RecognitionException, Recognizer, Token,
} from "antlr4ts";
import { Override } from "antlr4ts/Decorators";


export class DetailListener implements TransactionDslListener {

    public enterTransctionFile?: (ctx: TransactionFileContext) => void;

    public exitTransctionFile?: (ctx: TransactionFileContext) => void;

    public enterTransaction(ctx: TransactionContext): void {
        console.log("transaction:");
        console.log(ctx.procedureBody().identifier().text);
    }

    exitTransaction?: (ctx: TransactionContext) => void;

    public enterProcedure(ctx: ProcedureContext): void {
        console.log("procedure:");
        console.log(ctx.procedureBody().identifier().text);
    }

    exitProcedure?: (ctx: ProcedureContext) => void;

    public enterIdentifier(ctx: IdentifierContext): void {
    }

    exitIdentifier?: (ctx: IdentifierContext) => void;

    visitTerminal?: (node: TerminalNode) => void;
}