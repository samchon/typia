import ts from "typescript";

import { IdentifierFactory } from "../factories/IdentifierFactory";
import { StatementFactory } from "../factories/StatementFactory";
import { TypeFactory } from "../factories/TypeFactory";

import { IProject } from "../transformers/IProject";

import { CloneProgrammer } from "./CloneProgrammer";
import { IsProgrammer } from "./IsProgrammer";

export namespace IsCloneProgrammer {
    export const generate =
        (project: IProject, modulo: ts.LeftHandSideExpression) =>
        (type: ts.Type, name?: string) =>
            ts.factory.createArrowFunction(
                undefined,
                undefined,
                [
                    IdentifierFactory.parameter(
                        "input",
                        TypeFactory.keyword("any"),
                    ),
                ],
                ts.factory.createUnionTypeNode([
                    ts.factory.createTypeReferenceNode(
                        `typia.Primitive<${
                            name ??
                            TypeFactory.getFullName(project.checker, type)
                        }>`,
                    ),
                    ts.factory.createLiteralTypeNode(ts.factory.createNull()),
                ]),
                undefined,
                ts.factory.createBlock([
                    StatementFactory.constant(
                        "is",
                        IsProgrammer.generate(project, modulo)(type, name),
                    ),
                    StatementFactory.constant(
                        "clone",
                        CloneProgrammer.generate(
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
                            ts.factory.createNull(),
                        ),
                    ),
                    StatementFactory.constant(
                        "output",
                        ts.factory.createCallExpression(
                            ts.factory.createIdentifier("clone"),
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
