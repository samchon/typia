import ts from "typescript";

import { IdentifierFactory } from "../factories/IdentifierFactory";
import { StatementFactory } from "../factories/StatementFactory";

import { IProject } from "../transformers/IProject";

import { IsProgrammer } from "./IsProgrammer";
import { StringifyProgrammer } from "./StringifyProgrammer";

export namespace IsStringifyProgrammer {
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
                        "stringify",
                        StringifyProgrammer.generate(project, modulo)(type),
                    ),
                    ts.factory.createReturnStatement(
                        ts.factory.createConditionalExpression(
                            ts.factory.createCallExpression(
                                ts.factory.createIdentifier("is"),
                                undefined,
                                [ts.factory.createIdentifier("input")],
                            ),
                            undefined,
                            ts.factory.createCallExpression(
                                ts.factory.createIdentifier("stringify"),
                                undefined,
                                [ts.factory.createIdentifier("input")],
                            ),
                            undefined,
                            ts.factory.createNull(),
                        ),
                    ),
                ]),
            );
}
