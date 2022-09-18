import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";

import { IExpressionEntry } from "../helpers/IExpressionEntry";
import { check_everything } from "./check_everything";

export const check_properties =
    (assert: boolean) =>
    (halter: (exp: ts.CallExpression) => ts.Expression) =>
    (wrapper?: (exp: ts.CallExpression) => ts.Expression) =>
    (entries: IExpressionEntry[]): ts.Expression => {
        const func = wrapper ? "entries" : "keys";
        const criteria = ts.factory.createCallExpression(
            IdentifierFactory.join(
                ts.factory.createCallExpression(
                    ts.factory.createIdentifier(`Object.${func}`),
                    undefined,
                    [ts.factory.createIdentifier("input")],
                ),
                assert ? "every" : "map",
            ),
            undefined,
            [check_property(wrapper)(entries)],
        );
        return (halter || ((elem) => elem))(
            assert ? criteria : check_everything(criteria),
        );
    };

const check_property =
    (wrapper?: (exp: ts.CallExpression) => ts.Expression) =>
    (entries: IExpressionEntry[]) =>
        ts.factory.createArrowFunction(
            undefined,
            undefined,
            [
                wrapper === undefined
                    ? IdentifierFactory.parameter("key")
                    : IdentifierFactory.parameter(
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
            (wrapper || ((elem) => elem))(
                ts.factory.createCallExpression(
                    IdentifierFactory.join(
                        ts.factory.createArrayLiteralExpression(
                            entries.map((entry) =>
                                ts.factory.createStringLiteral(entry.key),
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
                ),
            ),
        );
