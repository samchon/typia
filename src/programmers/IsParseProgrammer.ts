import ts from "typescript";

import { IdentifierFactory } from "../factories/IdentifierFactory";
import { StatementFactory } from "../factories/StatementFactory";

import { IProject } from "../transformers/IProject";

import { IsProgrammer } from "./IsProgrammer";

export namespace IsParseProgrammer {
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
                        "is",
                        IsProgrammer.generate(project, modulo)(type),
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
                            ts.factory.createIdentifier("input"),
                            undefined,
                            ts.factory.createNull(),
                        ),
                    ),
                ]),
            );
}
