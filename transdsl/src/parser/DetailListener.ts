
import { TransctionFileContext } from "./TransactionDslParser";
import { TransactionDslListener } from "./TransactionDslListener"
import { TransactionContext } from "./TransactionDslParser";
import { ProcedureContext } from "./TransactionDslParser";
import { IdentifierContext } from "./TransactionDslParser";
import { ParseTree, TerminalNode } from "antlr4ts/tree";

export class DetailListener implements TransactionDslListener {

    public enterTransctionFile?: (ctx: TransctionFileContext) => void;

    public exitTransctionFile?: (ctx: TransctionFileContext) => void;

    public enterTransaction(ctx: TransactionContext): void {
        console.log("transaction:");
        console.log(ctx.identifier().text);
    }

    exitTransaction?: (ctx: TransactionContext) => void;

    public enterProcedure(ctx: ProcedureContext): void {
        console.log("procedure:");
        console.log(ctx.identifier().text);
    }

    exitProcedure?: (ctx: ProcedureContext) => void;

    public enterIdentifier(ctx: IdentifierContext): void {
        console.log("identifier:");
        console.log(ctx.text);
    }

    exitIdentifier?: (ctx: IdentifierContext) => void;

    visitTerminal?: (node: TerminalNode) => void;
}