import ts from "typescript";

import { IdentifierFactory } from "../factories/IdentifierFactory";
import { StatementFactory } from "../factories/StatementFactory";

import { IProject } from "../transformers/IProject";

import { AssertProgrammer } from "./AssertProgrammer";
import { StringifyProgrammer } from "./StringifyProgrammer";

export namespace AssertStringifyProgrammer {
    export function generate(
        project: IProject,
        modulo: ts.LeftHandSideExpression,
    ) {
        return (type: ts.Type) =>
            ts.factory.createArrowFunction(
                undefined,
                undefined,
                [IdentifierFactory.parameter("input")],
                undefined,
                undefined,
                ts.factory.createBlock([
                    StatementFactory.constant(
                        "assertType",
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
                                    ts.factory.createIdentifier("assertType"),
                                    undefined,
                                    [ts.factory.createIdentifier("input")],
                                ),
                            ],
                        ),
                    ),
                ]),
            );
    }
}
