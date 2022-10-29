import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";

import { IExpressionEntry } from "../helpers/IExpressionEntry";
import { check_everything } from "./check_everything";
import { check_object } from "./check_object";
import { metadata_to_pattern } from "./metadata_to_pattern";

/**
 * @internal
 */
export const check_dynamic_properties =
    (props: check_object.IProps) =>
    (
        regular: IExpressionEntry[],
        dynamic: IExpressionEntry[],
    ): ts.Expression => {
        const criteria = props.entries
            ? ts.factory.createCallExpression(props.entries, undefined, [
                  ts.factory.createCallExpression(
                      ts.factory.createIdentifier("Object.entries"),
                      undefined,
                      [ts.factory.createIdentifier("input")],
                  ),
                  check_dynamic_property(props)(regular, dynamic),
              ])
            : ts.factory.createCallExpression(
                  IdentifierFactory.join(
                      ts.factory.createCallExpression(
                          ts.factory.createIdentifier("Object.entries"),
                          undefined,
                          [ts.factory.createIdentifier("input")],
                      ),
                      props.assert ? "every" : "map",
                  ),
                  undefined,
                  [check_dynamic_property(props)(regular, dynamic)],
              );
        return (props.halt || ((elem) => elem))(
            props.assert ? criteria : check_everything(criteria),
        );
    };

const check_dynamic_property =
    (props: check_object.IProps) =>
    (regular: IExpressionEntry[], dynamic: IExpressionEntry[]) => {
        //----
        // IF CONDITIONS
        //----
        // PREPARE ASSETS
        const key = ts.factory.createIdentifier("key");
        const value = ts.factory.createIdentifier("value");

        const statements: ts.IfStatement[] = [
            ts.factory.createIfStatement(
                ts.factory.createStrictEquality(
                    ts.factory.createIdentifier("undefined"),
                    value,
                ),
                ts.factory.createReturnStatement(props.positive),
            ),
        ];
        const add = (exp: ts.Expression, output: ts.Expression) =>
            statements.push(
                ts.factory.createIfStatement(
                    exp,
                    ts.factory.createReturnStatement(output),
                ),
            );

        // GATHER CONDITIONS
        if (props.equals === true && regular.length)
            add(is_regular_property(regular), props.positive);
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
                        ? props.superfluous(
                              ts.factory.createIdentifier("value"),
                          )
                        : props.positive,
                ),
            ],
            true,
        );

        // RETURNS
        return ts.factory.createArrowFunction(
            undefined,
            undefined,
            [
                IdentifierFactory.parameter(
                    ts.factory.createArrayBindingPattern([
                        ts.factory.createBindingElement(
                            undefined,
                            undefined,
                            "key",
                        ),
                        ts.factory.createBindingElement(
                            undefined,
                            undefined,
                            "value",
                        ),
                    ]),
                ),
            ],
            undefined,
            undefined,
            block,
        );
    };

const is_regular_property = (regular: IExpressionEntry[]) =>
    ts.factory.createCallExpression(
        IdentifierFactory.join(
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
