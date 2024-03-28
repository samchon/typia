import ts from "typescript";

import { IProject } from "../../transformers/IProject";

import { FunctionImporter } from "../helpers/FunctionImporter";
import { IExpressionEntry } from "../helpers/IExpressionEntry";
import { check_dynamic_properties } from "./check_dynamic_properties";
import { check_everything } from "./check_everything";

/**
 * @internal
 */
export const check_object =
  (props: check_object.IProps) =>
  (project: IProject) =>
  (importer: FunctionImporter) =>
  (input: ts.Expression, entries: IExpressionEntry<ts.Expression>[]) => {
    // PREPARE ASSETS
    const regular = entries.filter((entry) => entry.key.isSoleLiteral());
    const dynamic = entries.filter((entry) => !entry.key.isSoleLiteral());
    const flags: ts.Expression[] = regular.map((entry) => entry.expression);

    // REGULAR WITHOUT DYNAMIC PROPERTIES
    if (props.equals === false && dynamic.length === 0)
      return regular.length === 0 ? props.positive : reduce(props)(flags);

    // CHECK DYNAMIC PROPERTIES
    flags.push(
      check_dynamic_properties(props)(project)(importer)(
        input,
        regular,
        dynamic,
      ),
    );
    return reduce(props)(flags);
  };

/**
 * @internal
 */
export namespace check_object {
  export interface IProps {
    equals: boolean;
    assert: boolean;
    undefined: boolean;
    halt?: undefined | ((exp: ts.Expression) => ts.Expression);
    reduce: (a: ts.Expression, b: ts.Expression) => ts.Expression;
    positive: ts.Expression;
    superfluous: (value: ts.Expression) => ts.Expression;
    entries?: undefined | ts.Identifier;
  }
}

/**
 * @internal
 */
const reduce =
  (props: check_object.IProps) => (expressions: ts.Expression[]) =>
    props.assert
      ? expressions.reduce(props.reduce)
      : check_everything(ts.factory.createArrayLiteralExpression(expressions));
