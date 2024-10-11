import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";

import { MetadataObjectType } from "../../schemas/metadata/MetadataObjectType";

import { metadata_to_pattern } from "../internal/metadata_to_pattern";
import { prune_object_properties } from "../internal/prune_object_properties";
import { IExpressionEntry } from "./IExpressionEntry";

export namespace PruneJoiner {
  export const object = (props: {
    input: ts.Expression;
    entries: IExpressionEntry[];
    object: MetadataObjectType;
  }): ts.ConciseBody => {
    // PREPARE ASSETS
    const regular = props.entries.filter((entry) => entry.key.isSoleLiteral());
    const dynamic = props.entries.filter((entry) => !entry.key.isSoleLiteral());

    const statements: ts.Statement[] = regular
      .map((entry) =>
        ts.isBlock(entry.expression)
          ? [...entry.expression.statements]
          : [ts.factory.createExpressionStatement(entry.expression)],
      )
      .flat();
    if (dynamic.length)
      statements.push(
        ts.factory.createExpressionStatement(
          iterate_dynamic_properties({
            regular,
            dynamic,
            input: props.input,
          }),
        ),
      );

    statements.push(prune_object_properties(props.object));
    return ts.factory.createBlock(statements, true);
  };

  export const array = (props: {
    input: ts.Expression;
    arrow: ts.ArrowFunction;
  }) =>
    ts.factory.createCallExpression(
      IdentifierFactory.access(props.input, "forEach"),
      undefined,
      [props.arrow],
    );

  export const tuple = (props: {
    elements: ts.ConciseBody[];
    rest: ts.ConciseBody | null;
  }): ts.Block => {
    const entire: ts.ConciseBody[] = [...props.elements];
    if (props.rest !== null) entire.push(props.rest);

    const statements: ts.Statement[] = entire
      .map((elem) =>
        ts.isBlock(elem)
          ? [...elem.statements]
          : [ts.factory.createExpressionStatement(elem)],
      )
      .flat();
    return ts.factory.createBlock(statements, true);
  };
}

const iterate_dynamic_properties = (props: {
  regular: IExpressionEntry[];
  dynamic: IExpressionEntry[];
  input: ts.Expression;
}) =>
  ts.factory.createCallExpression(
    IdentifierFactory.access(
      ts.factory.createCallExpression(
        ts.factory.createIdentifier("Object.entries"),
        undefined,
        [props.input],
      ),
      "forEach",
    ),
    undefined,
    [
      ts.factory.createArrowFunction(
        undefined,
        undefined,
        [
          IdentifierFactory.parameter(
            ts.factory.createArrayBindingPattern(
              ["key", "value"].map((l) =>
                ts.factory.createBindingElement(
                  undefined,
                  undefined,
                  ts.factory.createIdentifier(l),
                  undefined,
                ),
              ),
            ),
          ),
        ],
        undefined,
        undefined,
        ts.factory.createBlock(
          [
            ts.factory.createIfStatement(
              ts.factory.createStrictEquality(
                ts.factory.createIdentifier("undefined"),
                ts.factory.createIdentifier("value"),
              ),
              ts.factory.createReturnStatement(),
            ),
            ...props.regular.map(({ key }) =>
              ts.factory.createIfStatement(
                ts.factory.createStrictEquality(
                  ts.factory.createStringLiteral(key.getSoleLiteral()!),
                  ts.factory.createIdentifier("key"),
                ),
                ts.factory.createReturnStatement(),
              ),
            ),
            ...props.dynamic.map((dynamic) =>
              ts.factory.createIfStatement(
                ts.factory.createCallExpression(
                  ts.factory.createIdentifier(
                    `RegExp(/${metadata_to_pattern({
                      top: true,
                      metadata: dynamic.key,
                    })}/).test`,
                  ),
                  undefined,
                  [ts.factory.createIdentifier("key")],
                ),
                ts.isBlock(dynamic.expression)
                  ? dynamic.expression
                  : ts.factory.createBlock([
                      ts.factory.createExpressionStatement(dynamic.expression),
                    ]),
              ),
            ),
          ],
          true,
        ),
      ),
    ],
  );
