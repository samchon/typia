import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";

import { ITypiaContext } from "../../transformers/ITypiaContext";

import { IExpressionEntry } from "../helpers/IExpressionEntry";
import { check_dynamic_key } from "./check_dynamic_key";
import { check_everything } from "./check_everything";
import { check_object } from "./check_object";

/**
 * @internal
 */
export const check_dynamic_properties = (props: {
  config: check_object.IConfig;
  context: ITypiaContext;
  regular: IExpressionEntry<ts.Expression>[];
  dynamic: IExpressionEntry<ts.Expression>[];
  input: ts.Expression;
}): ts.Expression => {
  const length = IdentifierFactory.access(
    ts.factory.createCallExpression(
      ts.factory.createIdentifier("Object.keys"),
      undefined,
      [props.input],
    ),
    "length",
  );
  const left: ts.Expression | null =
    props.config.equals === true && props.dynamic.length === 0
      ? props.config.undefined === true ||
        props.regular.every((r) => r.meta.isRequired())
        ? ts.factory.createStrictEquality(
            ExpressionFactory.number(
              props.regular.filter((r) => r.meta.isRequired()).length,
            ),
            length,
          )
        : ts.factory.createCallExpression(
            props.context.importer.internal("isBetween"),
            [],
            [
              length,
              ExpressionFactory.number(
                props.regular.filter((r) => r.meta.isRequired()).length,
              ),
              ExpressionFactory.number(props.regular.length),
            ],
          )
      : null;
  if (
    left !== null &&
    props.config.undefined === false &&
    props.regular.every((r) => r.meta.isRequired())
  )
    return left;

  const criteria: ts.CallExpression = props.config.entries
    ? ts.factory.createCallExpression(props.config.entries, undefined, [
        ts.factory.createCallExpression(
          ts.factory.createIdentifier("Object.keys"),
          undefined,
          [props.input],
        ),
        check_dynamic_property(props),
      ])
    : ts.factory.createCallExpression(
        IdentifierFactory.access(
          ts.factory.createCallExpression(
            ts.factory.createIdentifier("Object.keys"),
            undefined,
            [props.input],
          ),
          props.config.assert ? "every" : "map",
        ),
        undefined,
        [check_dynamic_property(props)],
      );
  const right: ts.Expression = (props.config.halt || ((elem) => elem))(
    props.config.assert ? criteria : check_everything(criteria),
  );
  return left
    ? (props.config.undefined
        ? ts.factory.createLogicalOr
        : ts.factory.createLogicalAnd)(left, right)
    : right;
};

/**
 * @internal
 */
const check_dynamic_property = (props: {
  config: check_object.IConfig;
  context: ITypiaContext;
  regular: IExpressionEntry<ts.Expression>[];
  dynamic: IExpressionEntry<ts.Expression>[];
  input: ts.Expression;
}) => {
  //----
  // IF CONDITIONS
  //----
  // PREPARE ASSETS
  const key = ts.factory.createIdentifier("key");
  const value = ts.factory.createIdentifier("value");

  const statements: ts.Statement[] = [];
  const add = (expression: ts.Expression, output: ts.Expression) =>
    statements.push(
      ts.factory.createIfStatement(
        expression,
        ts.factory.createReturnStatement(output),
      ),
    );
  const broken = { value: false };

  // GATHER CONDITIONS
  if (props.regular.length)
    add(is_regular_property(props.regular), props.config.positive);
  statements.push(
    StatementFactory.constant({
      name: "value",
      value: ts.factory.createElementAccessExpression(props.input, key),
    }),
  );
  if (props.config.undefined === true)
    add(
      ts.factory.createStrictEquality(
        ts.factory.createIdentifier("undefined"),
        value,
      ),
      props.config.positive,
    );

  for (const entry of props.dynamic) {
    const condition: ts.Expression = check_dynamic_key({
      context: props.context,
      metadata: entry.key,
      input: key,
    });
    if (condition.kind === ts.SyntaxKind.TrueKeyword) {
      statements.push(ts.factory.createReturnStatement(entry.expression));
      broken.value = true;
      break;
    } else add(condition, entry.expression);
  }

  //----
  // FUNCTION BODY
  //----
  // CLOSURE BLOCK
  const block: ts.Block = ts.factory.createBlock(
    [
      ...statements,
      ...(broken.value
        ? []
        : [
            ts.factory.createReturnStatement(
              props.config.equals === true
                ? props.config.superfluous(
                    value,
                    ts.factory.createCallExpression(
                      ts.factory.createPropertyAccessExpression(
                        ts.factory.createArrayLiteralExpression(
                          [
                            ts.factory.createTemplateExpression(
                              ts.factory.createTemplateHead("The property `"),
                              [
                                ts.factory.createTemplateSpan(
                                  ts.factory.createIdentifier("key"),
                                  ts.factory.createTemplateTail(
                                    "` is not defined in the object type.",
                                  ),
                                ),
                              ],
                            ),
                            ts.factory.createStringLiteral(""),
                            ts.factory.createStringLiteral(
                              "Please remove the property next time.",
                            ),
                          ],
                          true,
                        ),
                        "join",
                      ),
                      undefined,
                      [ts.factory.createStringLiteral("\n")],
                    ),
                  )
                : props.config.positive,
            ),
          ]),
    ],
    true,
  );

  // RETURNS
  return ts.factory.createArrowFunction(
    undefined,
    undefined,
    [IdentifierFactory.parameter("key")],
    undefined,
    undefined,
    block,
  );
};

/**
 * @internal
 */
const is_regular_property = (regular: IExpressionEntry[]) =>
  ts.factory.createCallExpression(
    IdentifierFactory.access(
      ts.factory.createArrayLiteralExpression(
        regular.map((entry) =>
          ts.factory.createStringLiteral(entry.key.getSoleLiteral()!),
        ),
      ),
      "some",
    ),
    undefined,
    [
      ts.factory.createArrowFunction(
        undefined,
        undefined,
        [IdentifierFactory.parameter("prop")],
        undefined,
        undefined,
        ts.factory.createStrictEquality(
          ts.factory.createIdentifier("key"),
          ts.factory.createIdentifier("prop"),
        ),
      ),
    ],
  );
