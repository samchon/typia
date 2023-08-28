import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { JsonMetadataFactory } from "../../factories/JsonMetadataFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProject } from "../../transformers/IProject";

import { IsProgrammer } from "../IsProgrammer";

export namespace JsonIsParseProgrammer {
    export const write =
        (project: IProject) =>
        (modulo: ts.LeftHandSideExpression) =>
        (type: ts.Type, name?: string): ts.ArrowFunction => {
            JsonMetadataFactory.analyze(`typia.json.${modulo.getText()}`)(
                project.checker,
            )(type);
            return ts.factory.createArrowFunction(
                undefined,
                undefined,
                [
                    IdentifierFactory.parameter(
                        "input",
                        TypeFactory.keyword("any"),
                    ),
                ],
                ts.factory.createTypeReferenceNode(
                    `typia.Primitive<${
                        name ?? TypeFactory.getFullName(project.checker)(type)
                    }>`,
                ),
                undefined,
                ts.factory.createBlock([
                    StatementFactory.constant(
                        "is",
                        IsProgrammer.write({
                            ...project,
                            options: {
                                ...project.options,
                                functional: false,
                                numeric: false,
                            },
                        })(modulo)(false)(type, name),
                    ),
                    ts.factory.createExpressionStatement(
                        ts.factory.createBinaryExpression(
                            ts.factory.createIdentifier("input"),
                            ts.SyntaxKind.EqualsToken,
                            ts.factory.createCallExpression(
                                ts.factory.createIdentifier("JSON.parse"),
                                undefined,
                                [ts.factory.createIdentifier("input")],
                            ),
                        ),
                    ),
                    ts.factory.createReturnStatement(
                        ts.factory.createConditionalExpression(
                            ts.factory.createCallExpression(
                                ts.factory.createIdentifier("is"),
                                undefined,
                                [ts.factory.createIdentifier("input")],
                            ),
                            undefined,
                            ts.factory.createAsExpression(
                                ts.factory.createIdentifier("input"),
                                TypeFactory.keyword("any"),
                            ),
                            undefined,
                            ts.factory.createNull(),
                        ),
                    ),
                ]),
            );
        };
}
