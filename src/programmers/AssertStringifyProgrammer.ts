import ts from "typescript";

import { IdentifierFactory } from "../factories/IdentifierFactory";
import { StatementFactory } from "../factories/StatementFactory";
import { TypeFactory } from "../factories/TypeFactory";

import { IProject } from "../transformers/IProject";

import { AssertProgrammer } from "./AssertProgrammer";
import { StringifyProgrammer } from "./StringifyProgrammer";

export namespace AssertStringifyProgrammer {
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
                TypeFactory.keyword("string"),
                undefined,
                ts.factory.createBlock([
                    StatementFactory.constant(
                        "assert",
                        AssertProgrammer.generate(
                            {
                                ...project,
                                options: {
                                    ...project.options,
                                    functional: false,
                                    numeric: true,
                                },
                            },
                            modulo,
                        )(type, name),
                    ),
                    StatementFactory.constant(
                        "stringify",
                        StringifyProgrammer.generate(
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
                    ts.factory.createReturnStatement(
                        ts.factory.createCallExpression(
                            ts.factory.createIdentifier("stringify"),
                            undefined,
                            [
                                ts.factory.createCallExpression(
                                    ts.factory.createIdentifier("assert"),
                                    undefined,
                                    [ts.factory.createIdentifier("input")],
                                ),
                            ],
                        ),
                    ),
                ]),
            );
}
