import ts from "typescript";
import { AssertFactory } from "../../factories/features/AssertFactory";
import { MetadataCollection } from "../../factories/MetadataCollection";
import { MetadataFactory } from "../../factories/MetadataFactory";
import { IModule } from "../../structures/IModule";
import { IMetadata } from "../../structures/IMetadata";

export namespace AssertTransformer {
    export function transform(
        checker: ts.TypeChecker,
        expression: ts.CallExpression,
        imp: IModule,
    ): ts.Expression {
        if (expression.arguments.length !== 1)
            throw new Error(ErrorMessages.NO_INPUT_VALUE);

        // FOR THE IMPORT STATEMENT CONSTRUCTION
        imp.error.used ||= true;

        // GET TYPE INFO
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

        // DO TRANSFORM
        return ts.factory.createCallExpression(
            AssertFactory.generate(collection, meta, imp),
            undefined,
            [expression.arguments[0]!],
        );
    }
}

const enum ErrorMessages {
    NO_INPUT_VALUE = "Error on TSON.assert(): no input value.",
}
