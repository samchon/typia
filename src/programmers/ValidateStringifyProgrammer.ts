import ts from "typescript";

import { IdentifierFactory } from "../factories/IdentifierFactory";
import { StatementFactory } from "../factories/StatementFactory";

import { IProject } from "../transformers/IProject";

import { StringifyProgrammer } from "./StringifyProgrammer";
import { ValidateProgrammer } from "./ValidateProgrammer";

export namespace ValidateStringifyProgrammer {
    export const generate =
        (project: IProject, modulo: ts.LeftHandSideExpression) =>
        (type: ts.Type) =>
            ts.factory.createArrowFunction(
                undefined,
                undefined,
                [IdentifierFactory.parameter("input")],
                undefined,
                undefined,
                ts.factory.createBlock([
                    StatementFactory.constant(
                        "validate",
                        ValidateProgrammer.generate(project, modulo)(type),
                    ),
                    StatementFactory.constant(
                        "stringify",
                        StringifyProgrammer.generate(project, modulo)(type),
                    ),
                    StatementFactory.constant(
                        "output",
                        ts.factory.createCallExpression(
                            ts.factory.createIdentifier("validate"),
                            undefined,
                            [ts.factory.createIdentifier("input")],
                        ),
                    ),
                    ts.factory.createIfStatement(
                        ts.factory.createStrictEquality(
                            ts.factory.createTrue(),
                            ts.factory.createIdentifier("output.success"),
                        ),
                        ts.factory.createExpressionStatement(
                            ts.factory.createBinaryExpression(
                                ts.factory.createIdentifier("output.data"),
                                ts.SyntaxKind.EqualsToken,
                                ts.factory.createCallExpression(
                                    ts.factory.createIdentifier("stringify"),
                                    undefined,
                                    [ts.factory.createIdentifier("input")],
                                ),
                            ),
                        ),
                    ),
                    ts.factory.createReturnStatement(
                        ts.factory.createIdentifier("output"),
                    ),
                ]),
            );
}
