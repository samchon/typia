import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProject } from "../../transformers/IProject";

import { IsProgrammer } from "../IsProgrammer";
import { ProtobufEncodeProgrammer } from "./ProtobufEncodeProgrammer";

export namespace ProtobufIsEncodeProgrammer {
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
                        ts.factory.createTypeReferenceNode(
                            name ??
                                TypeFactory.getFullName(project.checker)(type),
                        ),
                    ),
                ],
                ts.factory.createUnionTypeNode([
                    ts.factory.createTypeReferenceNode("Uint8Array"),
                    ts.factory.createLiteralTypeNode(ts.factory.createNull()),
                ]),
                undefined,
                ts.factory.createBlock([
                    StatementFactory.constant(
                        "is",
                        IsProgrammer.write({
                            ...project,
                            options: {
                                ...project.options,
                                functional: false,
                                numeric: true,
                            },
                        })(modulo)(false)(type, name),
                    ),
                    StatementFactory.constant(
                        "encode",
                        ProtobufEncodeProgrammer.write({
                            ...project,
                            options: {
                                ...project.options,
                                functional: false,
                                numeric: false,
                            },
                        })(modulo)(type, name),
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
                                ts.factory.createIdentifier("encode"),
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
