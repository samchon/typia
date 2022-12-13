import ts from "typescript";

import { LiteralFactory } from "../../../factories/LiteralFactory";
import { MetadataCollection } from "../../../factories/MetadataCollection";
import { MetadataFactory } from "../../../factories/MetadataFactory";

import { IMetadataApplication } from "../../../metadata/IMetadataApplication";
import { Metadata } from "../../../metadata/Metadata";

import { IProject } from "../../IProject";

export namespace MetadataTransformer {
    export function transform(
        { checker }: IProject,
        _modulo: ts.LeftHandSideExpression,
        expression: ts.CallExpression,
    ): ts.Expression {
        if (!expression.typeArguments?.length)
            throw new Error(ErrorMessages.NO_GENERIC_ARGUMENT);

        // VALIDATE TUPLE ARGUMENTS
        const top: ts.Node = expression.typeArguments[0]!;
        if (!ts.isTupleTypeNode(top)) return expression;
        else if (top.elements.some((child) => !ts.isTypeNode(child)))
            return expression;

        // GET TYPES
        const types: ts.Type[] = top.elements.map((child) =>
            checker.getTypeFromTypeNode(child as ts.TypeNode),
        );
        if (types.some((t) => t.isTypeParameter()))
            throw new Error(ErrorMessages.GENERIC_ARGUMENT);

        // METADATA
        const collection: MetadataCollection = new MetadataCollection();
        const metadatas: Array<Metadata> = types.map((type) =>
            MetadataFactory.generate(checker, collection, type, {
                resolve: false,
                constant: true,
            }),
        );

        // CONVERT TO PRIMITIVE TYPE
        const app: IMetadataApplication = {
            metadatas: metadatas.map((metadata) => metadata.toJSON()),
            collection: collection.objects().map((obj) => obj.toJSON()),
        };
        return LiteralFactory.generate(app);
    }
}

const enum ErrorMessages {
    NO_GENERIC_ARGUMENT = "Error on typia.metadata(): no generic argument.",
    GENERIC_ARGUMENT = "Error on typia.metadata(): non-specified generic argument(s).",
}
