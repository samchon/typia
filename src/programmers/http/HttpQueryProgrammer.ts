import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { MetadataCollection } from "../../factories/MetadataCollection";
import { MetadataFactory } from "../../factories/MetadataFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataArrayType } from "../../schemas/metadata/MetadataArrayType";
import { MetadataObject } from "../../schemas/metadata/MetadataObject";
import { MetadataProperty } from "../../schemas/metadata/MetadataProperty";

import { IProject } from "../../transformers/IProject";
import { TransformerError } from "../../transformers/TransformerError";

import { Atomic } from "../../typings/Atomic";

import { Escaper } from "../../utils/Escaper";

import { FunctionImporter } from "../helpers/FunctionImporeter";
import { HttpMetadataUtil } from "../helpers/HttpMetadataUtil";

export namespace HttpQueryProgrammer {
    export const INPUT_TYPE = "string | URLSearchParams";

    export const write =
        (project: IProject) =>
        (modulo: ts.LeftHandSideExpression) =>
        (type: ts.Type, name?: string): ts.ArrowFunction => {
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
            if (meta.nullable === true)
                insert("query parameters cannot be null.");
            if (meta.isRequired() === false)
                insert("query parameters cannot be undefined.");
        } else if (
            explore.nested !== null &&
            explore.nested instanceof MetadataArrayType
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
                insert("optional type is not allowed in array.");
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

            //----
            // ARRAY CASES
            //----
            const isArray: boolean =
                meta.arrays.length >= 1 || meta.tuples.length >= 1;
            // ARRAY TYPE MUST BE REQUIRED
            if (isArray && meta.isRequired() === false)
                insert("optional type is not allowed when array.");
            // SET-COOKIE MUST BE ARRAY
            if (explore.property === "set-cookie" && !isArray)
                insert("set-cookie property must be array.");
        }
        return errors;
    };

    const decode_object =
        (importer: FunctionImporter) =>
        (object: MetadataObject): ts.Statement[] => {
            const input: ts.Identifier = ts.factory.createIdentifier("input");
            const output: ts.Identifier = ts.factory.createIdentifier("output");
            const optionals: string[] = [];

            return [
                ts.factory.createExpressionStatement(
                    ts.factory.createBinaryExpression(
                        input,
                        ts.factory.createToken(ts.SyntaxKind.EqualsToken),
                        ts.factory.createAsExpression(
                            ts.factory.createCallExpression(
                                importer.use("params"),
                                undefined,
                                [input],
                            ),
                            ts.factory.createTypeReferenceNode(
                                "URLSearchParams",
                            ),
                        ),
                    ),
                ),
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
                            return decode_regular_property(importer)(prop);
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
                ts.factory.createReturnStatement(
                    ts.factory.createAsExpression(
                        output,
                        TypeFactory.keyword("any"),
                    ),
                ),
            ];
        };

    const decode_regular_property =
        (importer: FunctionImporter) =>
        (property: MetadataProperty): ts.PropertyAssignment => {
            const key: string = property.key.constants[0]!.values[0] as string;
            const value: Metadata = property.value;

            const [type, isArray]: [Atomic.Literal, boolean] = value.atomics
                .length
                ? [value.atomics[0]!.type, false]
                : value.constants.length
                ? [value.constants[0]!.type, false]
                : value.templates.length
                ? ["string", false]
                : (() => {
                      const meta =
                          value.arrays[0]?.type.value ??
                          value.tuples[0]!.type.elements[0]!;
                      return meta.atomics.length
                          ? [meta.atomics[0]!.type, true]
                          : meta.templates.length
                          ? ["string", true]
                          : [meta.constants[0]!.type, true];
                  })();
            return ts.factory.createPropertyAssignment(
                Escaper.variable(key)
                    ? key
                    : ts.factory.createStringLiteral(key),
                isArray
                    ? ts.factory.createCallExpression(
                          IdentifierFactory.access(
                              ts.factory.createCallExpression(
                                  ts.factory.createIdentifier("input.getAll"),
                                  undefined,
                                  [ts.factory.createStringLiteral(key)],
                              ),
                          )("map"),
                          undefined,
                          [
                              ts.factory.createArrowFunction(
                                  undefined,
                                  undefined,
                                  [IdentifierFactory.parameter("elem")],
                                  undefined,
                                  undefined,
                                  decode_value(importer)(type)(false)(
                                      ts.factory.createIdentifier("elem"),
                                  ),
                              ),
                          ],
                      )
                    : decode_value(importer)(type)(
                          value.nullable === false &&
                              value.isRequired() === false,
                      )(
                          ts.factory.createCallExpression(
                              ts.factory.createIdentifier("input.get"),
                              undefined,
                              [ts.factory.createStringLiteral(key)],
                          ),
                      ),
            );
        };

    const decode_value =
        (importer: FunctionImporter) =>
        (type: Atomic.Literal) =>
        (onlyUndefindable: boolean) =>
        (value: ts.Expression) => {
            const call = ts.factory.createCallExpression(
                importer.use(type),
                undefined,
                [value],
            );
            return onlyUndefindable
                ? ts.factory.createBinaryExpression(
                      call,
                      ts.factory.createToken(
                          ts.SyntaxKind.QuestionQuestionToken,
                      ),
                      ts.factory.createIdentifier("undefined"),
                  )
                : call;
        };
}
