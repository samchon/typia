import ts from "typescript";

import { MetadataTemplate } from "../../schemas/metadata/MetadataTemplate";

import { ICheckEntry } from "../helpers/ICheckEntry";
import { template_to_pattern } from "./template_to_pattern";

/** @internal */
export const check_template = (props: {
  templates: MetadataTemplate[];
  input: ts.Expression;
}): ICheckEntry => {
  // TYPEOF STRING & TAGS
  const conditions: ts.Expression[] = [
    ts.factory.createStrictEquality(
      ts.factory.createStringLiteral("string"),
      ts.factory.createTypeOfExpression(props.input),
    ),
  ];

  // TEMPLATES
  const internal: ts.Expression[] = props.templates.map((tpl) =>
    ts.factory.createCallExpression(
      ts.factory.createIdentifier(
        `RegExp(/${template_to_pattern({
          top: true,
          template: tpl.row,
        })}/).test`,
      ),
      undefined,
      [props.input],
    ),
  );
  conditions.push(
    internal.length === 1
      ? internal[0]!
      : internal.reduce((x, y) => ts.factory.createLogicalOr(x, y)),
  );

  // COMBINATION
  return {
    expression: conditions.reduce((x, y) => ts.factory.createLogicalAnd(x, y)),
    conditions: [],
    expected: props.templates.map((tpl) => tpl.getName()).join(" | "),
  };
};
