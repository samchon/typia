import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { MetadataCollection } from "../../factories/MetadataCollection";
import { MetadataFactory } from "../../factories/MetadataFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataArray } from "../../schemas/metadata/MetadataArray";
import { MetadataObject } from "../../schemas/metadata/MetadataObject";
import { MetadataProperty } from "../../schemas/metadata/MetadataProperty";

import { IProject } from "../../transformers/IProject";
import { TransformerError } from "../../transformers/TransformerError";

import { Atomic } from "../../typings/Atomic";

import { Escaper } from "../../utils/Escaper";

import { FunctionImporter } from "../helpers/FunctionImporeter";
import { HttpMetadataUtil } from "../helpers/HttpMetadataUtil";

export namespace HttpHeadersProgrammer {
    export const INPUT_TYPE = "Record<string, string | string[] | undefined>";

    export const write =
        (project: IProject) =>
        (modulo: ts.LeftHandSideExpression) =>
        (type: ts.Type, name?: string) => {
            // GET OBJECT TYPE
            const importer: FunctionImporter = new FunctionImporter(
                modulo.getText(),
            );
            const collection: MetadataCollection = new MetadataCollection();
            const result = MetadataFactory.analyze(project.checker)({
                escape: false,
                constant: true,
                absorb: true,
                validate,
            })(collection)(type);
            if (result.success === false)
                throw TransformerError.from(`typia.http.${importer.method}`)(
                    result.errors,
                );

            // DO TRANSFORM
            const object: MetadataObject = result.data.objects[0]!;
            const statements: ts.Statement[] = decode_object(importer)(object);
            return ts.factory.createArrowFunction(
                undefined,
                undefined,
                [
                    IdentifierFactory.parameter(
                        "input",
                        ts.factory.createTypeReferenceNode(INPUT_TYPE),
                    ),
                ],
                ts.factory.createTypeReferenceNode(
                    `typia.Resolved<${
                        name ?? TypeFactory.getFullName(project.checker)(type)
                    }>`,
                ),
                undefined,
                ts.factory.createBlock(
                    [...importer.declare(modulo), ...statements],
                    true,
                ),
            );
        };

    const validate = (
        meta: Metadata,
        explore: MetadataFactory.IExplore,
    ): string[] => {
        const errors: string[] = [];
        const insert = (msg: string) => errors.push(msg);

        if (explore.top === true) {
            // TOP MUST BE ONLY OBJECT
            if (meta.objects.length !== 1 || meta.bucket() !== 1)
                insert("only one object type is allowed.");
            if (meta.nullable === true) insert("headers cannot be null.");
            if (meta.isRequired() === false) insert("headers cannot be null.");
        } else if (
            explore.nested !== null &&
            explore.nested instanceof MetadataArray
        ) {
            const atomics = HttpMetadataUtil.atomics(meta);
            const expected: number =
                meta.atomics.length +
                meta.templates.length +
                meta.constants
                    .map((c) => c.values.length)
                    .reduce((a, b) => a + b, 0);
            if (atomics.size > 1) insert("union type is not allowed in array.");
            if (meta.nullable) insert("nullable type is not allowed in array.");
            if (meta.isRequired() === false)
                insert("optional type is not allowed.");
            if (meta.size() !== expected)
                insert("only atomic or constant types are allowed in array.");
        } else if (explore.object && explore.property !== null) {
            //----
            // COMMON
            //----
            // PROPERTY MUST BE SOLE
            if (typeof explore.property === "object")
                insert("dynamic property is not allowed.");
            // DO NOT ALLOW TUPLE TYPE
            if (meta.tuples.length) insert("tuple type is not allowed.");
            // DO NOT ALLOW UNION TYPE
            if (HttpMetadataUtil.isUnion(meta))
                insert("union type is not allowed.");
            // DO NOT ALLOW NESTED OBJECT
            if (
                meta.objects.length ||
                meta.sets.length ||
                meta.maps.length ||
                meta.natives.length
            )
                insert("nested object type is not allowed.");
            // DO NOT ALLOW NULLABLE
            if (meta.nullable) insert("nullable type is not allowed.");

            //----
            // ARRAY CASES
            //----
            const isArray: boolean = meta.arrays.length > 1;
            // ARRAY TYPE MUST BE REQUIRED
            if (isArray && meta.isRequired() === false)
                insert("optional type is not allowed when array.");
            // SET-COOKIE MUST BE ARRAY
            if (explore.property === "set-cookie" && !isArray)
                insert("set-cookie property must be array.");
            // MUST BE SINGULAR CASE
            if (
                typeof explore.property === "string" &&
                SINGULAR.has(explore.property) &&
                isArray
            )
                insert("property cannot be array.");
        }
        return errors;
    };

    const decode_object =
        (importer: FunctionImporter) =>
        (object: MetadataObject): ts.Statement[] => {
            const output: ts.Identifier = ts.factory.createIdentifier("output");
            const optionals: string[] = [];
            return [
                StatementFactory.constant(
                    "output",
                    ts.factory.createObjectLiteralExpression(
                        object.properties.map((prop) => {
                            if (
                                !prop.value.isRequired() &&
                                prop.value.arrays.length +
                                    prop.value.tuples.length >
                                    0
                            )
                                optionals.push(
                                    prop.key.constants[0]!.values[0] as string,
                                );
                            return decode_regular_property(importer)(object)(
                                prop,
                            );
                        }),
                        true,
                    ),
                ),
                ...optionals.map((key) => {
                    const access = IdentifierFactory.access(output)(key);
                    return ts.factory.createIfStatement(
                        ts.factory.createStrictEquality(
                            ts.factory.createNumericLiteral(0),
                            IdentifierFactory.access(access)("length"),
                        ),
                        ts.factory.createExpressionStatement(
                            ts.factory.createDeleteExpression(access),
                        ),
                    );
                }),
                ts.factory.createReturnStatement(output),
            ];
        };

    const decode_regular_property =
        (importer: FunctionImporter) =>
        (object: MetadataObject) =>
        (property: MetadataProperty): ts.PropertyAssignment => {
            const key: string = property.key.constants[0]!.values[0] as string;
            const value: Metadata = property.value;

            const [type, isArray]: [Atomic.Literal, boolean] = value.atomics
                .length
                ? [value.atomics[0]!.type, false]
                : value.constants.length
                ? [value.constants[0]!.type, false]
                : (() => {
                      const meta =
                          value.arrays[0]?.type.value ??
                          value.tuples[0]!.type.elements[0]!;
                      return meta.atomics.length
                          ? [meta.atomics[0]!.type, true]
                          : [meta.constants[0]!.type, true];
                  })();
            if (isArray && SINGULAR.has(key))
                throw new Error(
                    ErrorMessages.property(importer)(object)(key)(
                        `property "${key}" cannot be array.`,
                    ),
                );
            else if (!isArray && key === "set-cookie")
                throw new Error(
                    ErrorMessages.property(importer)(object)(key)(
                        `property "${key}" must be array.`,
                    ),
                );

            const accessor = IdentifierFactory.access(
                ts.factory.createIdentifier("input"),
            )(key.toLowerCase());

            return ts.factory.createPropertyAssignment(
                Escaper.variable(key)
                    ? key
                    : ts.factory.createStringLiteral(key),
                isArray
                    ? key === "set-cookie"
                        ? accessor
                        : decode_array(importer)(type)(key)(value)(accessor)
                    : decode_value(importer)(type)(accessor),
            );
        };

    const decode_value =
        (importer: FunctionImporter) =>
        (type: Atomic.Literal) =>
        (value: ts.Expression) =>
            type === "string"
                ? value
                : ts.factory.createCallExpression(
                      importer.use(type),
                      undefined,
                      [value],
                  );

    const decode_array =
        (importer: FunctionImporter) =>
        (type: Atomic.Literal) =>
        (key: string) =>
        (value: Metadata) =>
        (accessor: ts.Expression) => {
            const expression = ts.factory.createCallChain(
                ts.factory.createPropertyAccessChain(
                    ts.factory.createCallChain(
                        ts.factory.createPropertyAccessChain(
                            accessor,
                            ts.factory.createToken(
                                ts.SyntaxKind.QuestionDotToken,
                            ),
                            ts.factory.createIdentifier("split"),
                        ),
                        undefined,
                        undefined,
                        [
                            ts.factory.createStringLiteral(
                                key === "cookie" ? "; " : ", ",
                            ),
                        ],
                    ),
                    ts.factory.createToken(ts.SyntaxKind.QuestionDotToken),
                    ts.factory.createIdentifier("map"),
                ),
                undefined,
                undefined,
                [importer.use(type)],
            );
            if (value.isRequired() === false) return expression;
            return ts.factory.createBinaryExpression(
                expression,
                ts.factory.createToken(ts.SyntaxKind.QuestionQuestionToken),
                ts.factory.createArrayLiteralExpression([], false),
            );
        };
}

namespace ErrorMessages {
    export const object =
        (importer: FunctionImporter) => (type: Metadata) => (message: string) =>
            `Error on ${importer.method}<${type.getName()}>(): ${message}`;

    export const property =
        (importer: FunctionImporter) =>
        (obj: MetadataObject) =>
        (key: string) =>
        (message: string) =>
            `Error on ${importer.method}<${obj.name}>(): property "${key}" - ${message}`;
}

const SINGULAR: Set<string> = new Set([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "server",
    "user-agent",
]);
