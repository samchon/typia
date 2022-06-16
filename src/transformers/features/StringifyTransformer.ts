import ts from "typescript";
import { StringifyFactory } from "../../factories/features/StringifyFactory";
import { MetadataCollection } from "../../factories/MetadataCollection";
import { MetadataFactory } from "../../factories/MetadataFactory";
import { IMetadata } from "../../structures/IMetadata";
import { IModule } from "../../structures/IModule";

export namespace StringifyTransformer {
    export function transform(
        checker: ts.TypeChecker,
        expression: ts.CallExpression,
        modulo: IModule,
    ): ts.Expression {
        if (expression.arguments.length !== 1)
            throw new Error(ErrorMessages.NO_INPUT_VALUE);

        modulo.error.used ||= true;
        modulo.functional.used ||= true;

        const type: ts.Type =
            expression.typeArguments && expression.typeArguments[0]
                ? checker.getTypeFromTypeNode(expression.typeArguments[0])
                : checker.getTypeAtLocation(expression.arguments[0]!);
        const collection: MetadataCollection = new MetadataCollection();
        const meta: IMetadata | null = MetadataFactory.generate(
            collection,
            checker,
            type,
            {
                resolve: true,
                constant: false,
            },
        );

        return ts.factory.createCallExpression(
            StringifyFactory.generate(modulo)(collection, meta),
            undefined,
            [expression.arguments[0]!],
        );
    }
}

const enum ErrorMessages {
    NO_INPUT_VALUE = "Error on TSON.strigify(): no input value.",
}
