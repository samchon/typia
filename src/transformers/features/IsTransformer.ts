import ts from "typescript";

import { IsFactory } from "../../factories/features/IsFactory";
import { MetadataCollection } from "../../factories/MetadataCollection";
import { MetadataFactory } from "../../factories/MetadataFactory";

import { IMetadata } from "../../structures/IMetadata";

export namespace IsTransformer {
    export function transform(
        checker: ts.TypeChecker,
        expression: ts.CallExpression,
    ): ts.Expression {
        if (expression.arguments.length !== 1)
            throw new Error(ErrorMessages.NO_INPUT_VALUE);

        const type: ts.Type =
            expression.typeArguments && expression.typeArguments[0]
                ? checker.getTypeFromTypeNode(expression.typeArguments[0])
                : checker.getTypeAtLocation(expression.arguments[0]!);
        const collection: MetadataCollection = new MetadataCollection();
        const meta: IMetadata = MetadataFactory.generate(
            collection,
            checker,
            type,
            {
                resolve: false,
                constant: true,
            },
        );

        return ts.factory.createCallExpression(
            IsFactory.generate(collection, meta),
            undefined,
            [expression.arguments[0]!],
        );
    }
}

const enum ErrorMessages {
    NO_INPUT_VALUE = "Error on TSON.is(): no input value.",
}
