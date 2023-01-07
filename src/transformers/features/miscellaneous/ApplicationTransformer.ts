import ts from "typescript";

import { LiteralFactory } from "../../../factories/LiteralFactory";
import { MetadataCollection } from "../../../factories/MetadataCollection";
import { MetadataFactory } from "../../../factories/MetadataFactory";

import { Metadata } from "../../../metadata/Metadata";
import { IJsonApplication } from "../../../schemas/IJsonApplication";

import { ApplicationProgrammer } from "../../../programmers/ApplicationProgrammer";

import { IProject } from "../../IProject";

export namespace ApplicationTransformer {
    export function transform(
        { checker }: IProject,
        _modulo: ts.LeftHandSideExpression,
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
        if (types.some((t) => t.isTypeParameter()))
            throw new Error(ErrorMessages.GENERIC_ARGUMENT);

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
        const collection: MetadataCollection = new MetadataCollection({
            replace: MetadataCollection.replace,
        });
        const metadatas: Array<Metadata> = types.map((type) =>
            MetadataFactory.generate(checker, collection, type, {
                resolve: true,
                constant: true,
                validate: (meta) => {
                    if (meta.atomics.find((str) => str === "bigint"))
                        throw new Error(ErrorMessages.NO_BIGIT);
                },
            }),
        );

        // APPLICATION
        const app: IJsonApplication = ApplicationProgrammer.generate(
            metadatas,
            {
                purpose,
                prefix,
            },
        );

        // RETURNS WITH LITERAL EXPRESSION
        return LiteralFactory.generate(app);
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
                `Error on typia.application(): generic argument "${name}" must be constant.`,
            );

        // GET VALUE AND VALIDATE IT
        const value = type.value;
        if (typeof value !== "string" || predicator(value) === false)
            throw new Error(
                `Error on typia.application(): invalid value on generic argument "${name}".`,
            );
        return value as T;
    }
}

const enum ErrorMessages {
    NO_GENERIC_ARGUMENT = "Error on typia.application(): no generic argument.",
    GENERIC_ARGUMENT = "Error on typia.application(): non-specified generic argument(s).",
    NO_BIGIT = "Error on typia.application(): does not allow bigint type.",
    NO_ZERO_LENGTH_TUPLE = "Error on typia.application(): swagger does not support zero length tuple type.",
}
