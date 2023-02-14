import ts from "typescript";

import { IdentifierFactory } from "../factories/IdentifierFactory";
import { StatementFactory } from "../factories/StatementFactory";

import { IProject } from "../transformers/IProject";

import { IsProgrammer } from "./IsProgrammer";
import { PruneProgrammer } from "./PruneProgrammer";

export namespace IsPruneProgrammer {
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
                    StatementFactory.constant(
                        "prune",
                        PruneProgrammer.generate(
                            {
                                ...project,
                                options: {
                                    ...project.options,
                                    functional: false,
                                    numeric: false,
                                },
                            },
                            modulo,
                        )(type),
                    ),
                    ts.factory.createIfStatement(
                        ts.factory.createPrefixUnaryExpression(
                            ts.SyntaxKind.ExclamationToken,
                            ts.factory.createCallExpression(
                                ts.factory.createIdentifier("is"),
                                undefined,
                                [ts.factory.createIdentifier("input")],
                            ),
                        ),
                        ts.factory.createReturnStatement(
                            ts.factory.createFalse(),
                        ),
                    ),
                    ts.factory.createExpressionStatement(
                        ts.factory.createCallExpression(
                            ts.factory.createIdentifier("prune"),
                            undefined,
                            [ts.factory.createIdentifier("input")],
                        ),
                    ),
                    ts.factory.createReturnStatement(ts.factory.createTrue()),
                ]),
            );
}
