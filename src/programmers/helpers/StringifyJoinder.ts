import ts from "typescript";
import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { TemplateFactory } from "../../factories/TemplateFactory";
import { IExpressionEntry } from "../../structures/IExpressionEntry";
// import { IMetadata } from "../../structures/IMetadata";
// import { StringifyTreeJoiner } from "./StringifyTreeJoiner";

export namespace StringifyJoiner {
    export function object(
        entries: IExpressionEntry[],
        // _parent: IMetadata.IObject,
        // recursive: IExpressionEntry | null = null,
    ): ts.ConciseBody {
        // CHECK AND SORT ENTRIES
        if (entries.length === 0) return ts.factory.createStringLiteral("{}");
        entries.sort(
            (x, y) => Number(x.meta.required) - Number(y.meta.required),
        );

        // // CHECK WHETHER RECURSIVE STRUCTURED ARRAY OR NOT
        // if (recursive === null) {
        //     const tree = entries.find((elem) =>
        //         StringifyTreeJoiner.predicate(parent, elem),
        //     );
        //     if (tree !== undefined && entries.length > 1)
        //         return StringifyTreeJoiner.join(
        //             parent,
        //             tree,
        //             entries.filter((elem) => elem !== tree),
        //         );
        // }

        const expressions: ts.Expression[] = [];
        entries.forEach((entry, index) => {
            // BASE ELEMENTS
            const base: ts.Expression[] = [
                ts.factory.createStringLiteral(" ".repeat(SPACES)),
                ts.factory.createStringLiteral(`${JSON.stringify(entry.key)}:`),
                entry.expression,
            ];
            if (index !== entries.length - 1 /* || recursive !== null*/)
                base.push(ts.factory.createStringLiteral(","));

            if (entry.meta.required /* || recursive !== null*/)
                expressions.push(...base);
            else
                expressions.push(
                    ts.factory.createConditionalExpression(
                        ts.factory.createStrictInequality(
                            entry.input,
                            ts.factory.createIdentifier("undefined"),
                        ),
                        undefined,
                        TemplateFactory.generate(base),
                        undefined,
                        ts.factory.createStringLiteral(""),
                    ),
                );
        });
        // if (recursive !== null)
        //     return TemplateFactory.generate([
        //         ts.factory.createStringLiteral("{"),
        //         ...expressions,
        //         ts.factory.createStringLiteral(
        //             `${JSON.stringify(recursive.key)}:[`,
        //         ),
        //     ]);

        const last: IExpressionEntry = entries[entries.length - 1]!;
        const filtered: ts.Expression[] = last.meta.required
            ? expressions
            : [
                  ts.factory.createCallExpression(
                      ts.factory.createIdentifier("$tail"),
                      undefined,
                      [TemplateFactory.generate(expressions)],
                  ),
              ];
        return TemplateFactory.generate([
            // ts.factory.createStringLiteral(" ".repeat(SPACES * 4)),
            ts.factory.createStringLiteral("{"),
            ...filtered,
            ts.factory.createStringLiteral("}"),
        ]);
    }

    export function array(
        input: ts.Expression,
        arrow: ts.ArrowFunction,
    ): ts.TemplateExpression {
        return TemplateFactory.generate([
            ts.factory.createStringLiteral("["),
            ts.factory.createCallExpression(
                ts.factory.createPropertyAccessExpression(
                    ts.factory.createCallExpression(
                        IdentifierFactory.join(input, "map"),
                        undefined,
                        [arrow],
                    ),
                    ts.factory.createIdentifier("join"),
                ),
                undefined,
                [ts.factory.createStringLiteral(",")],
            ),
            ts.factory.createStringLiteral("]"),
        ]);
    }

    export function tuple(children: ts.Expression[]): ts.Expression {
        if (children.length === 0) return ts.factory.createStringLiteral("[]");

        const elements: ts.Expression[] = [ts.factory.createStringLiteral("[")];
        children.forEach((child, i) => {
            elements.push(child);
            if (i !== children.length - 1)
                elements.push(ts.factory.createStringLiteral(","));
        });
        elements.push(ts.factory.createStringLiteral("]"));
        return TemplateFactory.generate(elements);
    }
}

const SPACES = 0;
