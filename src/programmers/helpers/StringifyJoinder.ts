import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { TemplateFactory } from "../../factories/TemplateFactory";

import { ITypiaContext } from "../../transformers/ITypiaContext";

import { stringify_dynamic_properties } from "../internal/stringify_dynamic_properties";
import { stringify_regular_properties } from "../internal/stringify_regular_properties";
import { IExpressionEntry } from "./IExpressionEntry";

export namespace StringifyJoiner {
  export const object = (props: {
    context: ITypiaContext;
    entries: IExpressionEntry<ts.Expression>[];
  }): ts.Expression => {
    // CHECK AND SORT ENTRIES
    if (props.entries.length === 0) return ts.factory.createStringLiteral("{}");

    // PROPERTIES
    const regular: IExpressionEntry<ts.Expression>[] = props.entries.filter(
      (entry) => entry.key.isSoleLiteral(),
    );
    const dynamic: IExpressionEntry<ts.Expression>[] = props.entries.filter(
      (entry) => !entry.key.isSoleLiteral(),
    );
    const expressions: ts.Expression[] = [
      ...stringify_regular_properties({
        regular,
        dynamic,
      }),
      ...(dynamic.length
        ? [
            stringify_dynamic_properties(
              dynamic,
              regular.map((r) => r.key.getSoleLiteral()!),
            ),
          ]
        : []),
    ];

    // POP LAST COMMA, IF REQUIRED
    const filtered: ts.Expression[] =
      (regular.length &&
        regular[regular.length - 1]!.meta.isRequired() &&
        dynamic.length === 0) ||
      (regular.length === 0 && dynamic.length)
        ? expressions
        : [
            ts.factory.createCallExpression(
              props.context.importer.internal("jsonStringifyTail"),
              undefined,
              [TemplateFactory.generate(expressions)],
            ),
          ];

    // RETURNS WITH OBJECT BRACKET
    return TemplateFactory.generate([
      ts.factory.createStringLiteral(`{`),
      ...filtered,
      ts.factory.createStringLiteral(`}`),
    ]);
  };

  export const array = (props: {
    input: ts.Expression;
    arrow: ts.ArrowFunction;
  }): ts.Expression =>
    TemplateFactory.generate([
      ts.factory.createStringLiteral(`[`),
      ts.factory.createCallExpression(
        ts.factory.createPropertyAccessExpression(
          ts.factory.createCallExpression(
            IdentifierFactory.access(props.input, "map"),
            undefined,
            [props.arrow],
          ),
          ts.factory.createIdentifier("join"),
        ),
        undefined,
        [ts.factory.createStringLiteral(`,`)],
      ),
      ts.factory.createStringLiteral(`]`),
    ]);

  export const tuple = (props: {
    elements: ts.Expression[];
    rest: ts.Expression | null;
  }): ts.Expression => {
    if (props.elements.length === 0)
      return ts.factory.createStringLiteral("[]");
    if (
      props.rest === null &&
      props.elements.every((child) => ts.isStringLiteral(child))
    )
      return ts.factory.createStringLiteral(
        "[" +
          props.elements
            .map((child) => (child as ts.StringLiteral).text)
            .join(",") +
          "]",
      );

    const expressions: ts.Expression[] = [ts.factory.createStringLiteral(`[`)];
    props.elements.forEach((child, i) => {
      expressions.push(child);
      if (i !== props.elements.length - 1)
        expressions.push(ts.factory.createStringLiteral(`,`));
    });
    if (props.rest !== null) expressions.push(props.rest);

    expressions.push(ts.factory.createStringLiteral(`]`));
    return TemplateFactory.generate(expressions);
  };
}
