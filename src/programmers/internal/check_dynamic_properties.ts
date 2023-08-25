import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";

import { FunctionImporter } from "../helpers/FunctionImporeter";
import { IExpressionEntry } from "../helpers/IExpressionEntry";
import { check_everything } from "./check_everything";
import { check_object } from "./check_object";
import { metadata_to_pattern } from "./metadata_to_pattern";

/**
 * @internal
 */
export const check_dynamic_properties =
    (props: check_object.IProps) =>
    (importer: FunctionImporter) =>
    (
        input: ts.Expression,
        regular: IExpressionEntry<ts.Expression>[],
        dynamic: IExpressionEntry<ts.Expression>[],
    ): ts.Expression => {
        const length = IdentifierFactory.access(
            ts.factory.createCallExpression(
                ts.factory.createIdentifier("Object.keys"),
                undefined,
                [input],
            ),
        )("length");
        const left: ts.Expression | null =
            props.equals === true && dynamic.length === 0
                ? props.undefined === true ||
                  regular.every((r) => r.meta.isRequired())
                    ? ts.factory.createStrictEquality(
                          ts.factory.createNumericLiteral(
                              regular.filter((r) => r.meta.isRequired()).length,
                          ),
                          length,
                      )
                    : ts.factory.createCallExpression(
                          importer.use("is_between"),
                          [],
                          [
                              length,
                              ts.factory.createNumericLiteral(
                                  regular.filter((r) => r.meta.isRequired())
                                      .length,
                              ),
                              ts.factory.createNumericLiteral(regular.length),
                          ],
                      )
                : null;
        if (
            props.undefined === false &&
            left !== null &&
            regular.every((r) => r.meta.isRequired())
        )
            return left;

        const criteria = props.entries
            ? ts.factory.createCallExpression(props.entries, undefined, [
                  ts.factory.createCallExpression(
                      ts.factory.createIdentifier("Object.keys"),
                      undefined,
                      [input],
                  ),
                  check_dynamic_property(props)(input, regular, dynamic),
              ])
            : ts.factory.createCallExpression(
                  IdentifierFactory.access(
                      ts.factory.createCallExpression(
                          ts.factory.createIdentifier("Object.keys"),
                          undefined,
                          [input],
                      ),
                  )(props.assert ? "every" : "map"),
                  undefined,
                  [check_dynamic_property(props)(input, regular, dynamic)],
              );
        const right: ts.Expression = (props.halt || ((elem) => elem))(
            props.assert ? criteria : check_everything(criteria),
        );
        return left
            ? (props.undefined
                  ? ts.factory.createLogicalOr
                  : ts.factory.createLogicalAnd)(left, right)
            : right;
    };

const check_dynamic_property =
    (props: check_object.IProps) =>
    (
        input: ts.Expression,
        regular: IExpressionEntry<ts.Expression>[],
        dynamic: IExpressionEntry<ts.Expression>[],
    ) => {
        //----
        // IF CONDITIONS
        //----
        // PREPARE ASSETS
        const key = ts.factory.createIdentifier("key");
        const value = ts.factory.createIdentifier("value");

        const statements: ts.Statement[] = [];
        const add = (exp: ts.Expression, output: ts.Expression) =>
            statements.push(
                ts.factory.createIfStatement(
                    exp,
                    ts.factory.createReturnStatement(output),
                ),
            );

        // GATHER CONDITIONS
        if (regular.length) add(is_regular_property(regular), props.positive);
        statements.push(
            StatementFactory.constant(
                "value",
                ts.factory.createElementAccessExpression(input, key),
            ),
        );
        if (props.undefined === true)
            add(
                ts.factory.createStrictEquality(
                    ts.factory.createIdentifier("undefined"),
                    value,
                ),
                props.positive,
            );

        for (const entry of dynamic)
            add(
                ts.factory.createCallExpression(
                    ts.factory.createIdentifier(
                        `RegExp(/${metadata_to_pattern(true)(
                            entry.key,
                        )}/).test`,
                    ),
                    undefined,
                    [key],
                ),
                entry.expression,
            );

        //----
        // FUNCTION BODY
        //----
        // CLOSURE BLOCK
        const block: ts.Block = ts.factory.createBlock(
            [
                ...statements,
                ts.factory.createReturnStatement(
                    props.equals === true
                        ? props.superfluous(value)
                        : props.positive,
                ),
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

const is_regular_property = (regular: IExpressionEntry[]) =>
    ts.factory.createCallExpression(
        IdentifierFactory.access(
            ts.factory.createArrayLiteralExpression(
                regular.map((entry) =>
                    ts.factory.createStringLiteral(entry.key.getSoleLiteral()!),
                ),
            ),
        )("some"),
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
