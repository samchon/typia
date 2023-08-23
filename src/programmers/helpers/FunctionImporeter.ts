import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

export class FunctionImporter {
    private readonly used_: Set<string> = new Set();
    private readonly local_: Set<string> = new Set();
    private readonly unions_: Map<string, [string, ts.ArrowFunction]> =
        new Map();
    private sequence_: number = 0;

    public constructor(public readonly method: string) {}

    public empty(): boolean {
        return this.used_.size === 0;
    }

    public use(name: string): ts.Identifier {
        this.used_.add(name);
        return ts.factory.createIdentifier("$" + name);
    }

    public useLocal(name: string): string {
        this.local_.add(name);
        return name;
    }

    public hasLocal(name: string): boolean {
        return this.local_.has(name);
    }

    public declare(
        modulo: ts.LeftHandSideExpression,
        includeUnions: boolean = true,
    ): ts.Statement[] {
        return [
            ...[...this.used_].map((name) =>
                StatementFactory.constant(
                    "$" + name,
                    IdentifierFactory.access(
                        ts.factory.createParenthesizedExpression(
                            ts.factory.createAsExpression(
                                modulo,
                                TypeFactory.keyword("any"),
                            ),
                        ),
                    )(name),
                ),
            ),
            ...(includeUnions === true
                ? [...this.unions_.values()].map(([key, arrow]) =>
                      StatementFactory.constant(key, arrow),
                  )
                : []),
        ];
    }

    public declareUnions(): ts.Statement[] {
        return [...this.unions_.values()].map(([key, arrow]) =>
            StatementFactory.constant(key, arrow),
        );
    }

    public increment(): number {
        return ++this.sequence_;
    }

    public emplaceUnion(
        prefix: string,
        name: string,
        factory: () => ts.ArrowFunction,
    ): string {
        const oldbie = this.unions_.get(name);
        if (oldbie) return oldbie[0];

        const index: number = this.unions_.size;
        const accessor: string = `${prefix}p${index}`;

        const tuple: [string, ReturnType<typeof factory>] = [accessor, null!];
        this.unions_.set(name, tuple);
        tuple[1] = factory();
        return accessor;
    }

    public trace(): void {
        console.log(...this.used_);
        console.log(...this.local_);
    }
}
