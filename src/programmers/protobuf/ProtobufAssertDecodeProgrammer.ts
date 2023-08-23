import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProject } from "../../transformers/IProject";

import { AssertProgrammer } from "../AssertProgrammer";
import { ProtobufDecodeProgrammer } from "./ProtobufDecodeProgrammer";

export namespace ProtobufAssertDecodeProgrammer {
    export const write =
        (project: IProject) =>
        (modulo: ts.LeftHandSideExpression) =>
        (type: ts.Type, name?: string) =>
            ts.factory.createArrowFunction(
                undefined,
                undefined,
                [
                    IdentifierFactory.parameter(
                        "input",
                        ts.factory.createTypeReferenceNode("Uint8Array"),
                    ),
                ],
                ts.factory.createTypeReferenceNode(
                    `typia.Resolved<${
                        name ?? TypeFactory.getFullName(project.checker)(type)
                    }>`,
                ),
                undefined,
                ts.factory.createBlock([
                    StatementFactory.constant(
                        "decode",
                        ProtobufDecodeProgrammer.write({
                            ...project,
                            options: {
                                ...project.options,
                                functional: false,
                                numeric: false,
                            },
                        })(modulo)(type, name),
                    ),
                    StatementFactory.constant(
                        "assert",
                        AssertProgrammer.write({
                            ...project,
                            options: {
                                ...project.options,
                                functional: false,
                                numeric: false,
                            },
                        })(modulo)(false)(type, name),
                    ),
                    StatementFactory.constant(
                        "output",
                        ts.factory.createCallExpression(
                            ts.factory.createIdentifier("decode"),
                            undefined,
                            [ts.factory.createIdentifier("input")],
                        ),
                    ),
                    ts.factory.createReturnStatement(
                        ts.factory.createAsExpression(
                            ts.factory.createCallExpression(
                                ts.factory.createIdentifier("assert"),
                                undefined,
                                [ts.factory.createIdentifier("output")],
                            ),
                            TypeFactory.keyword("any"),
                        ),
                    ),
                ]),
            );
}
