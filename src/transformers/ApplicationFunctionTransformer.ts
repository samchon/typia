import ts from "typescript";

import { ExpressionFactory } from "../factories/ExpressionFactory";
import { MetadataCollection } from "../factories/MetadataCollection";
import { MetadataFactory } from "../factories/MetadataFactory";
import { SchemaFactory } from "../factories/SchemaFactory";

import { IJsonApplication } from "../module";
import { IMetadata } from "../structures/IMetadata";

export namespace ApplicationFunctionTransformer {
    export function transform(
        checker: ts.TypeChecker,
        expression: ts.CallExpression,
    ): ts.Expression {
        if (!expression.typeArguments?.length)
            throw new Error(ErrorMessages.NO_GENERIC_ARGUMENT);

        //----
        // GET ARGUMENTS
        //----
        // VALIDATE TUPLE ARGUMENTS
        const top: ts.Node = expression.typeArguments[0]!;
        if (!ts.isTupleTypeNode(top)) return expression;
        else if (top.elements.some((child) => !ts.isTypeNode(child)))
            return expression;

        // GET TYPES
        const types: ts.Type[] = top.elements.map((child) =>
            checker.getTypeFromTypeNode(child as ts.TypeNode),
        );

        // ADDITIONAL PARAMETERS
        const purpose: "swagger" | "ajv" = get_parameter(
            checker,
            "Purpose",
            expression.typeArguments[1],
            (str) => str === "swagger" || str === "ajv",
            () => "swagger",
        );
        const prefix: string = get_parameter(
            checker,
            "Prefix",
            expression.typeArguments[2],
            () => true,
            () =>
                purpose === "swagger"
                    ? "#/components/schemas"
                    : "components#/schemas",
        );

        //----
        // GENERATORS
        //----
        // METADATA
        const collection: MetadataCollection = new MetadataCollection();
        const metadatas: Array<IMetadata | null> = types.map((type) =>
            MetadataFactory.generate(checker, type, collection),
        );

        // APPLICATION
        const app: IJsonApplication = SchemaFactory.application(
            metadatas,
            collection.storage(),
            {
                purpose,
                prefix,
            },
        );

        // RETURNS WITH LITERAL EXPRESSION
        return ExpressionFactory.generate(app);
    }

    function get_parameter<T extends string>(
        checker: ts.TypeChecker,
        name: string,
        node: ts.TypeNode | undefined,
        predicator: (value: string) => boolean,
        defaulter: () => T,
    ): T {
        if (!node) return defaulter();

        // CHECK LITERAL TYPE
        const type: ts.Type = checker.getTypeFromTypeNode(node);
        if (!type.isLiteral())
            throw new Error(
                `Error on TSON.application(): generic argument "${name}" must be constant.`,
            );

        // GET VALUE AND VALIDATE IT
        const value = type.value;
        if (typeof value !== "string" || predicator(value))
            throw new Error(
                `Error on TSON.application(): invalid value on generic argument "${name}".`,
            );
        return value as T;
    }
}

const enum ErrorMessages {
    NO_GENERIC_ARGUMENT = "Error on TSON.application(): no generic argument.",
}
