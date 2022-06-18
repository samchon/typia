import ts from "typescript";
import { TemplateFactory } from "../../factories/TemplateFactory";
import { IExpressionEntry } from "../../structures/IExpressionEntry";

export namespace StringifyJoiner {
    export function object(entries: IExpressionEntry[]): ts.Expression {
        if (entries.length === 0) return ts.factory.createStringLiteral("{}");
        entries.sort(
            (x, y) => Number(x.meta.required) - Number(y.meta.required),
        );

        const expressions: ts.Expression[] = [];
        entries.forEach((entry, index) => {
            // BASE ELEMENTS
            const base: ts.Expression[] = [
                ts.factory.createStringLiteral(`${JSON.stringify(entry.key)}:`),
                entry.expression,
            ];
            if (index !== entries.length - 1)
                base.push(ts.factory.createStringLiteral(","));

            if (entry.meta.required) expressions.push(...base);
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
                        ts.factory.createIdentifier("undefined"),
                    ),
                );
        });

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
            ts.factory.createStringLiteral("{"),
            ...filtered,
            ts.factory.createStringLiteral("}"),
        ]);
    }

    // export function object(entries: IExpressionEntry[]): ts.Expression {
    //     if (entries.length === 0) return ts.factory.createStringLiteral("{}");
    //     entries.sort(
    //         (x, y) => Number(x.meta.required) - Number(y.meta.required),
    //     );

    //     const properties: ts.Expression[] = [];
    //     entries.map((entry, index) => {
    //         const elements: ts.Expression[] = [
    //             ts.factory.createStringLiteral(`${JSON.stringify(entry.key)}:`),
    //             entry.expression,
    //         ];
    //         if (index !== entries.length - 1)
    //             elements.push(ts.factory.createStringLiteral(","));

    //         if (entry.meta.required === true) properties.push(...elements);
    //         else
    //             properties.push(
    //                 ts.factory.createConditionalExpression(
    //                     ts.factory.createStrictInequality(
    //                         entry.input,
    //                         ts.factory.createIdentifier("undefined"),
    //                     ),
    //                     undefined,
    //                     join(elements),
    //                     undefined,
    //                     ts.factory.createIdentifier("undefined"),
    //                 ),
    //             );
    //     });

    //     const last = entries[entries.length - 1]!;
    //     return join([
    //         ts.factory.createStringLiteral("{"),
    //         ...(last.meta.required === true
    //             ? properties
    //             : [
    //                   ts.factory.createCallExpression(
    //                       ts.factory.createIdentifier("$tail"),
    //                       undefined,
    //                       [join(properties)],
    //                   ),
    //               ]),
    //         ts.factory.createStringLiteral("}"),
    //     ]);
    // }

    // // export function array(obj: IMetadata) {}

    // // export function tuple() {}

    // function join(elements: ts.Expression[]): ts.Expression {
    //     return elements.reduce((x, y) => ts.factory.createAdd(x, y));
    // }
}
