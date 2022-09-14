import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";

export class FunctionImporter {
    private readonly used_: Set<string> = new Set();
    private sequence_: number = 0;

    public empty(): boolean {
        return this.used_.size === 0;
    }

    public use(name: string): ts.Identifier {
        this.used_.add(name);
        return ts.factory.createIdentifier("$" + name);
    }

    public declare(modulo: ts.LeftHandSideExpression): ts.Statement[] {
        return [...this.used_].map((name) =>
            StatementFactory.variable(
                ts.NodeFlags.Const,
                "$" + name,
                IdentifierFactory.join(modulo, name),
            ),
        );
    }

    public increment(): number {
        return ++this.sequence_;
    }
}
