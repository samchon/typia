import ts from "typescript";

import { IdentifierFactory } from "../factories/IdentifierFactory";
import { StatementFactory } from "../factories/StatementFactory";

import { IProject } from "../transformers/IProject";

import { AssertProgrammer } from "./AssertProgrammer";
import { StringifyProgrammer } from "./StringifyProgrammer";

export namespace AssertStringifyProgrammer {
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
                        "assert",
                        AssertProgrammer.generate(project, modulo)(type),
                    ),
                    StatementFactory.constant(
                        "stringify",
                        StringifyProgrammer.generate(project, modulo)(type),
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
