import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";

import { IExpressionEntry } from "../helpers/IExpressionEntry";
import { check_everything } from "./check_everything";

/**
 * @internal
 */
export const check_properties =
    (assert: boolean) =>
    (halter: (exp: ts.CallExpression) => ts.Expression) =>
    (wrapper?: (exp: ts.Expression) => ts.Expression) =>
    (entries: IExpressionEntry[]): ts.Expression => {
        const criteria = ts.factory.createCallExpression(
            IdentifierFactory.join(
                ts.factory.createCallExpression(
                    ts.factory.createIdentifier("Object.entries"),
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
    (wrapper?: (exp: ts.Expression) => ts.Expression) =>
    (entries: IExpressionEntry[]) =>
        ts.factory.createArrowFunction(
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
            (wrapper || ((elem) => elem))(
                ts.factory.createLogicalOr(
                    ts.factory.createStrictEquality(
                        ts.factory.createIdentifier("undefined"),
                        ts.factory.createIdentifier("value"),
                    ),
                    ts.factory.createCallExpression(
                        IdentifierFactory.join(
                            ts.factory.createArrayLiteralExpression(
                                entries
                                    .filter(
                                        (entry) =>
                                            entry.key.getSoleLiteral() !== null,
                                    )
                                    .map((entry) =>
                                        ts.factory.createStringLiteral(
                                            entry.key.getSoleLiteral()!,
                                        ),
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
            ),
        );
