import ts from "typescript";

import { ITypiaContext } from "../../transformers/ITypiaContext";

import { IExpressionEntry } from "../helpers/IExpressionEntry";
import { check_dynamic_properties } from "./check_dynamic_properties";
import { check_everything } from "./check_everything";

/**
 * @internal
 */
export const check_object = (props: {
  config: check_object.IConfig;
  context: ITypiaContext;
  input: ts.Expression;
  entries: IExpressionEntry<ts.Expression>[];
}) => {
  // PREPARE ASSETS
  const regular = props.entries.filter((entry) => entry.key.isSoleLiteral());
  const dynamic = props.entries.filter((entry) => !entry.key.isSoleLiteral());
  const flags: ts.Expression[] = regular.map((entry) => entry.expression);

  // REGULAR WITHOUT DYNAMIC PROPERTIES
  if (props.config.equals === false && dynamic.length === 0)
    return regular.length === 0
      ? props.config.positive
      : reduce({
          config: props.config,
          expressions: flags,
        });

  // CHECK DYNAMIC PROPERTIES
  flags.push(
    check_dynamic_properties({
      config: props.config,
      context: props.context,
      input: props.input,
      regular,
      dynamic,
    }),
  );
  return reduce({
    config: props.config,
    expressions: flags,
  });
};

/**
 * @internal
 */
export namespace check_object {
  export interface IConfig {
    equals: boolean;
    assert: boolean;
    undefined: boolean;
    halt?: undefined | ((exp: ts.Expression) => ts.Expression);
    reduce: (a: ts.Expression, b: ts.Expression) => ts.Expression;
    positive: ts.Expression;
    superfluous: (
      value: ts.Expression,
      description?: ts.Expression,
    ) => ts.Expression;
    entries?: undefined | ts.Identifier;
  }
}

/**
 * @internal
 */
const reduce = (props: {
  config: check_object.IConfig;
  expressions: ts.Expression[];
}) =>
  props.config.assert
    ? props.expressions.reduce(props.config.reduce)
    : check_everything(
        ts.factory.createArrayLiteralExpression(props.expressions),
      );
