import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";

import { MetadataTemplate } from "../../schemas/metadata/MetadataTemplate";

import { ITypiaContext } from "../../transformers/ITypiaContext";

import { ICheckEntry } from "../helpers/ICheckEntry";
import { template_to_pattern } from "./template_to_pattern";

/** @internal */
export const check_template = (props: {
  context: ITypiaContext;
  templates: MetadataTemplate[];
  input: ts.Expression;
}): ICheckEntry => {
  // TYPEOF STRING
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

  // VALIDATION TAGS - handle validation tags attached to template literals
  const validationConditions: ICheckEntry.ICondition[][] =
    check_template_type_tags({
      context: props.context,
      templates: props.templates,
      input: props.input,
    });

  // COMBINATION
  return {
    expression: conditions.reduce((x, y) => ts.factory.createLogicalAnd(x, y)),
    conditions: validationConditions,
    expected: props.templates.map((tpl) => tpl.getName()).join(" | "),
  };
};

/** @internal */
const check_template_type_tags = (props: {
  context: ITypiaContext;
  templates: MetadataTemplate[];
  input: ts.Expression;
}): ICheckEntry.ICondition[][] => {
  // Collect validation tags from all templates
  const allTags = props.templates.flatMap((tpl) => tpl.tags);

  return allTags
    .map((row) => row.filter((tag) => !!tag.validate))
    .filter((row) => !!row.length)
    .map((row) =>
      row.map((tag) => ({
        expected: `string & ${tag.name}`,
        expression: ExpressionFactory.transpile({
          transformer: props.context.transformer,
          importer: props.context.importer,
          script: tag.validate!,
        })(props.input),
      })),
    );
};
