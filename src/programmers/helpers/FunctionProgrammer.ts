import ts from "typescript";

import { StatementFactory } from "../../factories/StatementFactory";

export class FunctionProgrammer {
  private readonly local_: Set<string> = new Set();
  private readonly unions_: Map<string, [string, ts.ArrowFunction]> = new Map();
  private readonly variables_: Map<string, ts.Expression> = new Map();
  private sequence_: number = 0;

  public constructor(public readonly method: string) {}

  public useLocal(name: string): string {
    this.local_.add(name);
    return name;
  }

  public hasLocal(name: string): boolean {
    return this.local_.has(name);
  }

  public declare(includeUnions: boolean = true): ts.Statement[] {
    return [
      ...[...this.variables_.entries()].map(([name, value]) =>
        StatementFactory.constant({ name, value }),
      ),
      ...(includeUnions === true
        ? [...this.unions_.values()].map(([name, value]) =>
            StatementFactory.constant({ name, value }),
          )
        : []),
    ];
  }

  public declareUnions(): ts.Statement[] {
    return [...this.unions_.values()].map(([name, value]) =>
      StatementFactory.constant({ name, value }),
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
    const key: string = `${prefix}::${name}`;
    const oldbie = this.unions_.get(key);
    if (oldbie) return oldbie[0];

    const index: number = this.unions_.size;
    const accessor: string = `${prefix}p${index}`;

    const tuple: [string, ReturnType<typeof factory>] = [accessor, null!];
    this.unions_.set(key, tuple);
    tuple[1] = factory();
    return accessor;
  }

  public emplaceVariable(name: string, value: ts.Expression): ts.Expression {
    this.variables_.set(name, value);
    return ts.factory.createIdentifier(name);
  }
}
