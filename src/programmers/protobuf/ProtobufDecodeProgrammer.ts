import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { MetadataCollection } from "../../factories/MetadataCollection";
import { ProtobufFactory } from "../../factories/ProtobufFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataObject } from "../../schemas/metadata/MetadataObject";

import { IProject } from "../../transformers/IProject";

import { FunctionImporter } from "../helpers/FunctionImporeter";

export namespace ProtobufDecodeProgrammer {
    export const write =
        (project: IProject) =>
        (modulo: ts.LeftHandSideExpression) =>
        (type: ts.Type, name?: string): ts.ArrowFunction => {
            const importer = new FunctionImporter();
            const collection = new MetadataCollection();
            const meta: Metadata = ProtobufFactory.metadata(modulo.getText())(
                project.checker,
            )(collection)(type);

            return null!;
        };

    const write_object_function =
        (project: IProject) =>
        (modulo: ts.LeftHandSideExpression) =>
        (obj: MetadataObject): ts.ArrowFunction => {
            const input = ts.factory.createIdentifier("input");
            const output = ts.factory.createIdentifier("output");

            let i: number = 1;
            const statements: ts.Statement[] = obj.properties.map((prop) => {});

            return ts.factory.createArrowFunction(
                undefined,
                undefined,
                [IdentifierFactory.parameter("input")],
                TypeFactory.keyword("any"),
                undefined,
                ts.factory.createBlock(
                    [
                        StatementFactory.constant(
                            "output",
                            ts.factory.createObjectLiteralExpression(),
                        ),
                        ts.factory.createWhileStatement(
                            ts.factory.createStrictInequality(
                                ts.factory.createFalse(),
                                ts.factory.createCallExpression(
                                    IdentifierFactory.access(input)("complete"),
                                    undefined,
                                    undefined,
                                ),
                            ),
                            ts.factory.createBlock(statements, true),
                        ),
                    ],
                    true,
                ),
            );
        };
}
