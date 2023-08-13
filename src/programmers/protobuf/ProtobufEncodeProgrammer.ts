import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { MetadataCollection } from "../../factories/MetadataCollection";
import { ProtobufFactory } from "../../factories/ProtobufFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { Metadata } from "../../schemas/metadata/Metadata";

import { IProject } from "../../transformers/IProject";

import { FunctionImporter } from "../helpers/FunctionImporeter";
import { ProtobufLengthProgrammer } from "./ProtobufLengthProgrammer";

export namespace ProtobufEncodeProgrammer {
    export const write =
        (project: IProject) =>
        (modulo: ts.LeftHandSideExpression) =>
        (type: ts.Type, name?: string): ts.ArrowFunction => {
            const importer = new FunctionImporter();
            const collection = new MetadataCollection();
            const metadata: Metadata = ProtobufFactory.metadata(
                modulo.getText(),
            )(project.checker)(collection)(type);

            const block: ts.Statement[] = [
                StatementFactory.constant(
                    "writer",
                    ts.factory.createNewExpression(
                        importer.use("BufferWriter"),
                        undefined,
                        [
                            ts.factory.createCallExpression(
                                ProtobufLengthProgrammer.write(modulo)(
                                    collection,
                                )(metadata),
                                undefined,
                                undefined,
                            ),
                        ],
                    ),
                ),
                ts.factory.createReturnStatement(
                    ts.factory.createIdentifier("writer.buffer"),
                ),
            ];

            // @todo
            return ts.factory.createArrowFunction(
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
                ts.factory.createTypeReferenceNode("Uint8Array"),
                undefined,
                ts.factory.createBlock(
                    [...importer.declare(modulo), ...block],
                    true,
                ),
            );
        };
}
