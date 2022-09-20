import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { TemplateFactory } from "../../factories/TemplateFactory";
import { ValueFactory } from "../../factories/ValueFactory";

import { Metadata } from "../../metadata/Metadata";

import { FunctionImporter } from "./FunctionImporeter";
import { IExpressionEntry } from "./IExpressionEntry";

export namespace StringifyJoiner {
    export const object =
        (importer: FunctionImporter) =>
        (entries: IExpressionEntry[]): ts.ConciseBody => {
            // CHECK AND SORT ENTRIES
            if (entries.length === 0)
                return ts.factory.createStringLiteral("{}");
            entries.sort((x, y) => sequence(x.meta) - sequence(y.meta));

            // GATHER PROPERTY EXNRESSIONS
            const expressions: ts.Expression[] = [];
            entries.forEach((entry, index) => {
                const key: string | null = entry.key.getSoleLiteral();
                if (key === null) return;

                // BASE ELEMENTS
                const base: ts.Expression[] = [
                    ts.factory.createStringLiteral(`${JSON.stringify(key)}:`),
                    entry.expression,
                ];
                if (index !== entries.length - 1 /* || recursive !== null*/)
                    base.push(
                        ts.factory.createStringLiteral(
                            `,${" ".repeat(SPACES)}`,
                        ),
                    );

                const empty: boolean =
                    (entry.meta.required === false &&
                        entry.meta.nullable === false &&
                        entry.meta.size() === 0) ||
                    (entry.meta.functional &&
                        entry.meta.nullable === false &&
                        entry.meta.size() === 1);

                if (empty === true)
                    expressions.push(ts.factory.createStringLiteral(""));
                else if (
                    entry.meta.required === false ||
                    entry.meta.functional === true ||
                    entry.meta.any === true
                )
                    expressions.push(
                        ts.factory.createConditionalExpression(
                            (() => {
                                const conditions: ts.BinaryExpression[] = [];
                                if (
                                    entry.meta.required === false ||
                                    entry.meta.any
                                )
                                    conditions.push(
                                        ts.factory.createStrictEquality(
                                            ts.factory.createIdentifier(
                                                "undefined",
                                            ),
                                            entry.input,
                                        ),
                                    );
                                if (entry.meta.functional || entry.meta.any)
                                    conditions.push(
                                        ts.factory.createStrictEquality(
                                            ts.factory.createStringLiteral(
                                                "function",
                                            ),
                                            ValueFactory.TYPEOF(entry.input),
                                        ),
                                    );
                                return conditions.length === 1
                                    ? conditions[0]!
                                    : conditions.reduce((x, y) =>
                                          ts.factory.createLogicalOr(x, y),
                                      );
                            })(),
                            undefined,
                            ts.factory.createStringLiteral(""),
                            undefined,
                            TemplateFactory.generate(base),
                        ),
                    );
                else expressions.push(...base);
            });

            const last: IExpressionEntry = entries[entries.length - 1]!;
            const filtered: ts.Expression[] = last.meta.required
                ? expressions
                : [
                      ts.factory.createCallExpression(
                          importer.use("tail"),
                          undefined,
                          [TemplateFactory.generate(expressions)],
                      ),
                  ];
            return TemplateFactory.generate([
                ts.factory.createStringLiteral(`{${" ".repeat(SPACES)}`),
                ...filtered,
                ts.factory.createStringLiteral(`${" ".repeat(SPACES)}}`),
            ]);
        };

    export function array(
        input: ts.Expression,
        arrow: ts.ArrowFunction,
    ): ts.Expression {
        return TemplateFactory.generate([
            ts.factory.createStringLiteral(`[${" ".repeat(SPACES)}`),
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
                [ts.factory.createStringLiteral(`,${" ".repeat(SPACES)}`)],
            ),
            ts.factory.createStringLiteral(`${" ".repeat(SPACES)}]`),
        ]);
    }

    export function tuple(children: ts.Expression[]): ts.Expression {
        if (children.length === 0) return ts.factory.createStringLiteral("[]");
        if (children.every((child) => ts.isStringLiteral(child)))
            return ts.factory.createStringLiteral(
                "[" +
                    children
                        .map((child) => (child as ts.StringLiteral).text)
                        .join(",") +
                    "]",
            );

        const elements: ts.Expression[] = [
            ts.factory.createStringLiteral(`[${" ".repeat(SPACES)}`),
        ];
        children.forEach((child, i) => {
            elements.push(child);
            if (i !== children.length - 1)
                elements.push(
                    ts.factory.createStringLiteral(`,${" ".repeat(SPACES)}`),
                );
        });
        elements.push(ts.factory.createStringLiteral(`${" ".repeat(SPACES)}]`));
        return TemplateFactory.generate(elements);
    }
}

function sequence(meta: Metadata): number {
    return meta.any || !meta.required || meta.functional ? 0 : 1;
}

const SPACES = 0;
