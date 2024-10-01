import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { TemplateFactory } from "../../factories/TemplateFactory";

import { IExpressionEntry } from "../helpers/IExpressionEntry";
import { metadata_to_pattern } from "./metadata_to_pattern";

/**
 * @internal
 */
export const stringify_dynamic_properties = (
  dynamic: IExpressionEntry<ts.Expression>[],
  regular: string[],
): ts.Expression => {
  // BASIC STATMEMENT, CHECK UNDEFINED
  const statements: ts.Statement[] = [
    ts.factory.createIfStatement(
      ts.factory.createStrictEquality(
        ts.factory.createIdentifier("undefined"),
        ts.factory.createIdentifier("value"),
      ),
      ts.factory.createReturnStatement(ts.factory.createStringLiteral("")),
    ),
  ];

  // PREPARE RETURN FUNCTION
  const output = () => {
    const mapped = ts.factory.createCallExpression(
      IdentifierFactory.access(
        ts.factory.createCallExpression(
          ts.factory.createIdentifier("Object.entries"),
          undefined,
          [ts.factory.createIdentifier("input")],
        ),
        "map",
      ),
      undefined,
      [
        ts.factory.createArrowFunction(
          undefined,
          undefined,
          [
            IdentifierFactory.parameter(
              ts.factory.createArrayBindingPattern([
                ts.factory.createBindingElement(undefined, undefined, "key"),
                ts.factory.createBindingElement(undefined, undefined, "value"),
              ]),
              ts.factory.createTypeReferenceNode("[string, any]"),
            ),
          ],
          undefined,
          undefined,
          ts.factory.createBlock(statements),
        ),
      ],
    );
    const filtered = ts.factory.createCallExpression(
      IdentifierFactory.access(mapped, "filter"),
      undefined,
      [
        ts.factory.createArrowFunction(
          undefined,
          undefined,
          [IdentifierFactory.parameter("str")],
          undefined,
          undefined,
          ts.factory.createStrictInequality(
            ts.factory.createStringLiteral(""),
            ts.factory.createIdentifier("str"),
          ),
        ),
      ],
    );
    return ts.factory.createCallExpression(
      IdentifierFactory.access(filtered, "join"),
      undefined,
      [ts.factory.createStringLiteral(",")],
    );
  };

  // WHEN REGULAR PROPERTY EXISTS
  if (regular.length)
    statements.push(
      ts.factory.createIfStatement(
        ts.factory.createCallExpression(
          IdentifierFactory.access(
            ts.factory.createArrayLiteralExpression(
              regular.map((key) => ts.factory.createStringLiteral(key)),
            ),
            "some",
          ),
          undefined,
          [
            ts.factory.createArrowFunction(
              undefined,
              undefined,
              [IdentifierFactory.parameter("regular")],
              undefined,
              undefined,
              ts.factory.createStrictEquality(
                ts.factory.createIdentifier("regular"),
                ts.factory.createIdentifier("key"),
              ),
            ),
          ],
        ),
        ts.factory.createReturnStatement(ts.factory.createStringLiteral("")),
      ),
    );

  // ONLY STRING TYPED KEY EXISTS
  const simple: boolean =
    dynamic.length === 1 &&
    dynamic[0]!.key.size() === 1 &&
    dynamic[0]!.key.atomics[0]?.type === "string";
  if (simple === true) {
    statements.push(stringify(dynamic[0]!));
    return output();
  }

  // COMPOSITE TEMPLATE LITERAL TYPES
  for (const entry of dynamic) {
    const condition: ts.IfStatement = ts.factory.createIfStatement(
      ts.factory.createCallExpression(
        ts.factory.createIdentifier(
          `RegExp(/${metadata_to_pattern({
            top: true,
            metadata: entry.key,
          })}/).test`,
        ),
        undefined,
        [ts.factory.createIdentifier("key")],
      ),
      stringify(entry),
    );
    statements.push(condition);
  }
  statements.push(
    ts.factory.createReturnStatement(ts.factory.createStringLiteral("")),
  );

  return output();
};

/**
 * @internal
 */
const stringify = (
  entry: IExpressionEntry<ts.Expression>,
): ts.ReturnStatement =>
  ts.factory.createReturnStatement(
    TemplateFactory.generate([
      ts.factory.createCallExpression(
        ts.factory.createIdentifier("JSON.stringify"),
        [],
        [ts.factory.createIdentifier("key")],
      ),
      ts.factory.createStringLiteral(":"),
      entry.expression,
    ]),
  );
