import ts from "typescript";

import { TemplateFactory } from "../../factories/TemplateFactory";
import { ValueFactory } from "../../factories/ValueFactory";

import { Metadata } from "../../schemas/metadata/Metadata";

import { IExpressionEntry } from "../helpers/IExpressionEntry";

/** @internal */
export const stringify_regular_properties = (props: {
  regular: IExpressionEntry<ts.Expression>[];
  dynamic: IExpressionEntry<ts.Expression>[];
}): ts.Expression[] => {
  const output: ts.Expression[] = [];

  props.regular.sort((x, y) => sequence(x.meta) - sequence(y.meta));
  props.regular.forEach((entry, index) => {
    // BASE ELEMENTS
    const key: string = entry.key.getSoleLiteral()!;
    const base: ts.Expression[] = [
      ts.factory.createStringLiteral(`${JSON.stringify(key)}:`),
      entry.expression,
    ];
    if (index !== props.regular.length - 1 || props.dynamic.length !== 0)
      base.push(ts.factory.createStringLiteral(`,`));

    const empty: boolean =
      (entry.meta.isRequired() === false &&
        entry.meta.nullable === false &&
        entry.meta.size() === 0) ||
      (!!entry.meta.functions.length &&
        entry.meta.nullable === false &&
        entry.meta.size() === 1);

    if (empty === true) return;
    else if (
      entry.meta.isRequired() === false ||
      entry.meta.functions.length ||
      entry.meta.any === true
    )
      output.push(
        ts.factory.createConditionalExpression(
          (() => {
            const conditions: ts.BinaryExpression[] = [];
            if (entry.meta.isRequired() === false || entry.meta.any)
              conditions.push(
                ts.factory.createStrictEquality(
                  ts.factory.createIdentifier("undefined"),
                  entry.input,
                ),
              );
            if (entry.meta.functions.length || entry.meta.any)
              conditions.push(
                ts.factory.createStrictEquality(
                  ts.factory.createStringLiteral("function"),
                  ValueFactory.TYPEOF(entry.input),
                ),
              );
            return conditions.length === 1
              ? conditions[0]!
              : conditions.reduce((x, y) => ts.factory.createLogicalOr(x, y));
          })(),
          undefined,
          ts.factory.createStringLiteral(""),
          undefined,
          TemplateFactory.generate(base),
        ),
      );
    else output.push(...base);
  });
  return output;
};

/** @internal */
const sequence = (meta: Metadata): number =>
  meta.any || !meta.isRequired() || meta.functions.length ? 0 : 1;
