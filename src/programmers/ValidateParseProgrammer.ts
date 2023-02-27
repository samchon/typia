import ts from "typescript";

import { IdentifierFactory } from "../factories/IdentifierFactory";
import { StatementFactory } from "../factories/StatementFactory";
import { TypeFactory } from "../factories/TypeFactory";

import { IProject } from "../transformers/IProject";

import { ValidateProgrammer } from "./ValidateProgrammer";

export namespace ValidateParseProgrammer {
    export const generate =
        (project: IProject, modulo: ts.LeftHandSideExpression) =>
        (type: ts.Type, name?: string) =>
            ts.factory.createArrowFunction(
                undefined,
                undefined,
                [
                    IdentifierFactory.parameter(
                        "input",
                        TypeFactory.keyword("string"),
                    ),
                ],
                ts.factory.createTypeReferenceNode(
                    `typia.IValidation<typia.Primitive<${
                        name ?? TypeFactory.getFullName(project.checker, type)
                    }>>`,
                ),
                undefined,
                ts.factory.createBlock([
                    StatementFactory.constant(
                        "validate",
                        ValidateProgrammer.generate(
                            {
                                ...project,
                                options: {
                                    ...project.options,
                                    functional: false,
                                    numeric: false,
                                },
                            },
                            modulo,
                        )(type, name),
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
                    StatementFactory.constant(
                        "output",
                        ts.factory.createCallExpression(
                            ts.factory.createIdentifier("validate"),
                            undefined,
                            [ts.factory.createIdentifier("input")],
                        ),
                    ),
                    ts.factory.createReturnStatement(
                        ts.factory.createIdentifier("output"),
                    ),
                ]),
            );
}
