import ts from "typescript";

import { JsonMetadataFactory } from "../../../factories/JsonMetadataFactory";
import { LiteralFactory } from "../../../factories/LiteralFactory";
import { MetadataCollection } from "../../../factories/MetadataCollection";
import { MetadataFactory } from "../../../factories/MetadataFactory";

import { IJsonApplication } from "../../../schemas/json/IJsonApplication";
import { Metadata } from "../../../schemas/metadata/Metadata";

import { JsonApplicationProgrammer } from "../../../programmers/json/JsonApplicationProgrammer";

import { ValidationPipe } from "../../../typings/ValidationPipe";

import { IProject } from "../../IProject";
import { TransformerError } from "../../TransformerError";

export namespace JsonApplicationTransformer {
    export const transform =
        ({ checker }: IProject) =>
        (expression: ts.CallExpression): ts.Expression => {
            if (!expression.typeArguments?.length)
                throw new TransformerError({
                    code: "typia.json.application",
                    message: "no generic argument.",
                });

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
                throw new TransformerError({
                    code: "typia.json.application",
                    message: "non-specified generic argument(s).",
                });

            // ADDITIONAL PARAMETERS
            const purpose: "swagger" | "ajv" = get_parameter(
                checker,
                "Purpose",
                expression.typeArguments[1],
                (str) => str === "swagger" || str === "ajv",
                () => "swagger",
            );

            //----
            // GENERATORS
            //----
            // METADATA
            const collection: MetadataCollection = new MetadataCollection({
                replace: MetadataCollection.replace,
            });
            const results: ValidationPipe<Metadata, MetadataFactory.IError>[] =
                types.map((type) =>
                    MetadataFactory.analyze(checker)({
                        escape: true,
                        constant: true,
                        absorb: false,
                        validate: JsonMetadataFactory.validate,
                    })(collection)(type),
                );

            // REPORT BUG IF REQUIRED
            const metadatas: Metadata[] = [];
            const errors: MetadataFactory.IError[] = [];
            for (const r of results) {
                if (r.success === false) errors.push(...r.errors);
                else metadatas.push(r.data);
            }
            if (errors.length)
                throw TransformerError.from("typia.json.application")(errors);

            // APPLICATION
            const app: IJsonApplication = JsonApplicationProgrammer.write({
                purpose,
            })(metadatas);

            // RETURNS WITH LITERAL EXPRESSION
            return LiteralFactory.generate(app);
        };

    const get_parameter = <T extends string>(
        checker: ts.TypeChecker,
        name: string,
        node: ts.TypeNode | undefined,
        predicator: (value: string) => boolean,
        defaulter: () => T,
    ): T => {
        if (!node) return defaulter();

        // CHECK LITERAL TYPE
        const type: ts.Type = checker.getTypeFromTypeNode(node);
        if (!type.isLiteral())
            throw new TransformerError({
                code: "typia.json.application",
                message: `generic argument "${name}" must be constant.`,
            });

        // GET VALUE AND VALIDATE IT
        const value = type.value;
        if (typeof value !== "string" || predicator(value) === false)
            throw new TransformerError({
                code: "typia.json.application",
                message: `invalid value on generic argument "${name}".`,
            });
        return value as T;
    };
}
