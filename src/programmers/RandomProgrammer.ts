import ts from "typescript";

import { ExpressionFactory } from "../factories/ExpressionFactory";
import { IdentifierFactory } from "../factories/IdentifierFactory";
import { MetadataCollection } from "../factories/MetadataCollection";
import { MetadataFactory } from "../factories/MetadataFactory";
import { StatementFactory } from "../factories/StatementFactory";
import { TemplateFactory } from "../factories/TemplateFactory";
import { TypeFactory } from "../factories/TypeFactory";

import { IMetadataTag } from "../metadata/IMetadataTag";
import { Metadata } from "../metadata/Metadata";

import { IProject } from "../transformers/IProject";

import { FunctionImporter } from "./helpers/FunctionImporeter";
import { RandomJoiner } from "./helpers/RandomJoiner";
import { RandomRanger } from "./helpers/RandomRanger";

export namespace RandomProgrammer {
    export function generate(
        project: IProject,
        modulo: ts.LeftHandSideExpression,
    ) {
        const importer: FunctionImporter = new FunctionImporter();
        return (type: ts.Type, name?: string) => {
            // INITIALIZE METADATA
            const collection: MetadataCollection = new MetadataCollection();
            const meta: Metadata = MetadataFactory.generate(
                project.checker,
                collection,
                type,
                {
                    resolve: true,
                    constant: true,
                },
            );

            // GENERATE FUNCTION
            const functors: ts.VariableStatement[] =
                generate_functors(importer)(collection);
            const output: ts.Expression = decode(importer)({
                object: false,
                recursive: false,
            })(meta, []);

            return ts.factory.createArrowFunction(
                undefined,
                undefined,
                [
                    IdentifierFactory.parameter(
                        "generator",
                        ts.factory.createTypeReferenceNode(
                            "Partial<typia.IRandomGenerator>",
                        ),
                        IdentifierFactory.join(
                            ts.factory.createParenthesizedExpression(
                                ts.factory.createAsExpression(
                                    modulo,
                                    TypeFactory.keyword("any"),
                                ),
                            ),
                            "generator",
                        ),
                    ),
                ],
                ts.factory.createTypeReferenceNode(
                    `typia.Primitive<${
                        name ?? TypeFactory.getFullName(project.checker, type)
                    }>`,
                ),
                undefined,
                ts.factory.createBlock(
                    [
                        ...importer.declare(modulo),
                        ...functors,
                        ts.factory.createReturnStatement(output),
                    ],
                    true,
                ),
            );
        };
    }

    const generate_functors =
        (importer: FunctionImporter) => (collection: MetadataCollection) =>
            collection.objects().map((obj, i) =>
                StatementFactory.constant(
                    FUNCTOR(i),
                    ts.factory.createArrowFunction(
                        undefined,
                        undefined,
                        [
                            IdentifierFactory.parameter(
                                "_recursive",
                                TypeFactory.keyword("boolean"),
                                ts.factory.createIdentifier(
                                    String(obj.recursive),
                                ),
                            ),
                            IdentifierFactory.parameter(
                                "_depth",
                                TypeFactory.keyword("number"),
                                ts.factory.createNumericLiteral(0),
                            ),
                        ],
                        TypeFactory.keyword("any"),
                        undefined,
                        RandomJoiner.object(COALESCE(importer))(
                            decode(importer)({
                                recursive: obj.recursive,
                                object: true,
                            }),
                        )(obj),
                    ),
                ),
            );

    /* -----------------------------------------------------------
        DECODERS
    ----------------------------------------------------------- */
    const decode =
        (importer: FunctionImporter) =>
        (explore: IExplore) =>
        (meta: Metadata, tags: IMetadataTag[]): ts.Expression => {
            const expressions: ts.Expression[] = [];
            if (meta.any)
                expressions.push(
                    ts.factory.createStringLiteral(
                        "fucking any type exists...",
                    ),
                );

            // NULL COALESCING
            if (meta.required === false)
                expressions.push(ts.factory.createIdentifier("undefined"));
            if (meta.nullable === true)
                expressions.push(ts.factory.createNull());

            // ATOMIC TYPES
            for (const constant of meta.constants)
                for (const value of constant.values)
                    expressions.push(decode_atomic(value));
            for (const template of meta.templates)
                expressions.push(decode_template(importer)(explore)(template));
            for (const atomic of meta.atomics)
                if (atomic === "boolean")
                    expressions.push(decode_boolean(importer));
                else if (atomic === "number")
                    expressions.push(decode_number(importer)(tags));
                else if (atomic === "string")
                    expressions.push(decode_string(importer)(tags));
                else if (atomic === "bigint")
                    expressions.push(decode_bigint(importer)(tags));

            // INSTANCE TYPES
            if (meta.resolved)
                expressions.push(
                    decode(importer)(explore)(meta.resolved, tags),
                );
            for (const t of meta.tuples)
                expressions.push(
                    RandomJoiner.tuple(decode(importer)(explore))(t, tags),
                );
            for (const a of meta.arrays) {
                const array = RandomJoiner.array(COALESCE(importer))(
                    decode(importer)(explore),
                )(a, tags);
                expressions.push(
                    explore.recursive && a.objects.length
                        ? ts.factory.createConditionalExpression(
                              ts.factory.createLogicalAnd(
                                  ts.factory.createIdentifier("_recursive"),
                                  ts.factory.createLessThan(
                                      ts.factory.createNumericLiteral(5),
                                      ts.factory.createIdentifier("_depth"),
                                  ),
                              ),
                              undefined,
                              ts.factory.createIdentifier("[]"),
                              undefined,
                              array,
                          )
                        : array,
                );
            }
            for (const o of meta.objects)
                expressions.push(
                    ts.factory.createCallExpression(
                        ts.factory.createIdentifier(FUNCTOR(o.index)),
                        undefined,
                        explore.object
                            ? [
                                  explore.recursive
                                      ? ts.factory.createTrue()
                                      : ts.factory.createIdentifier(
                                            "_recursive",
                                        ),
                                  ts.factory.createConditionalExpression(
                                      ts.factory.createIdentifier("_recursive"),
                                      undefined,
                                      ts.factory.createAdd(
                                          ts.factory.createNumericLiteral(1),
                                          ts.factory.createIdentifier("_depth"),
                                      ),
                                      undefined,
                                      ts.factory.createIdentifier("_depth"),
                                  ),
                              ]
                            : undefined,
                    ),
                );
            for (const native of meta.natives)
                if (native === "Boolean")
                    expressions.push(decode_boolean(importer));
                else if (native === "Number")
                    expressions.push(decode_number(importer)(tags));
                else if (native === "String")
                    expressions.push(decode_string(importer)(tags));
                else expressions.push(ts.factory.createIdentifier("{}"));
            if (meta.sets.length || meta.maps.length)
                expressions.push(ts.factory.createIdentifier("{}"));

            // PRIMITIVE TYPES
            if (expressions.length === 1) return expressions[0]!;
            return ts.factory.createCallExpression(
                ts.factory.createCallExpression(
                    importer.use("pick"),
                    undefined,
                    [
                        ts.factory.createArrayLiteralExpression(
                            expressions.map((expr) =>
                                ts.factory.createArrowFunction(
                                    undefined,
                                    undefined,
                                    [],
                                    undefined,
                                    undefined,
                                    expr,
                                ),
                            ),
                            true,
                        ),
                    ],
                ),
                undefined,
                undefined,
            );
        };

    const decode_boolean = (importer: FunctionImporter) =>
        ts.factory.createCallExpression(
            COALESCE(importer)("boolean"),
            undefined,
            undefined,
        );

    const decode_atomic = (value: Atomic) =>
        typeof value === "boolean"
            ? ts.factory.createIdentifier(value.toString())
            : typeof value === "number"
            ? ts.factory.createNumericLiteral(value)
            : typeof value === "string"
            ? ts.factory.createStringLiteral(value)
            : ts.factory.createBigIntLiteral(value.toString());

    const decode_template =
        (importer: FunctionImporter) =>
        (explore: IExplore) =>
        (template: Metadata[]) =>
            TemplateFactory.generate(
                template.map((meta) => decode(importer)(explore)(meta, [])),
            );

    const decode_number =
        (importer: FunctionImporter) =>
        (tags: IMetadataTag[]): ts.Expression => {
            const type = tags.find(
                (t) => t.kind === "type" && t.value === "uint",
            )
                ? "int"
                : tags.find((t) => t.kind === "type" && t.value === "int")
                ? "uint"
                : "double";
            return RandomRanger.number({
                type,
                transform: (value) => ts.factory.createNumericLiteral(value),
                setter: (args) =>
                    ts.factory.createCallExpression(
                        type === "double" &&
                            tags.every(
                                (t) =>
                                    t.kind !== "multipleOf" &&
                                    t.kind !== "step",
                            )
                            ? COALESCE(importer)("number")
                            : COALESCE(importer)("integer"),
                        undefined,
                        args.map((val) => ts.factory.createNumericLiteral(val)),
                    ),
            })({
                minimum: 0,
                maximum: 100,
                gap: 10,
            })(tags);
        };

    const decode_bigint =
        (importer: FunctionImporter) =>
        (tags: IMetadataTag[]): ts.Expression =>
            RandomRanger.number({
                type: tags.find((t) => t.kind === "type" && t.value === "uint")
                    ? "uint"
                    : "int",
                transform: (value) =>
                    ts.factory.createCallExpression(
                        ts.factory.createIdentifier("BigInt"),
                        undefined,
                        [ts.factory.createStringLiteral(value.toString())],
                    ),
                setter: (args) =>
                    ts.factory.createCallExpression(
                        COALESCE(importer)("bigint"),
                        undefined,
                        args.map((value) =>
                            ts.factory.createCallExpression(
                                ts.factory.createIdentifier("BigInt"),
                                undefined,
                                [
                                    ts.factory.createStringLiteral(
                                        value.toString(),
                                    ),
                                ],
                            ),
                        ),
                    ),
            })({
                minimum: 0,
                maximum: 100,
                gap: 10,
            })(tags);

    const decode_string =
        (importer: FunctionImporter) =>
        (tags: IMetadataTag[]): ts.Expression => {
            for (const t of tags)
                if (
                    t.kind === "format" &&
                    ["uuid", "email", "url", "ipv4", "ipv6"].includes(t.value)
                )
                    return ts.factory.createCallExpression(
                        COALESCE(importer)(t.value),
                        undefined,
                        undefined,
                    );
                else if (t.kind === "pattern")
                    return ts.factory.createCallExpression(
                        COALESCE(importer)("pattern"),
                        undefined,
                        [ts.factory.createIdentifier(`/${t.value}/`)],
                    );

            const tail = RandomRanger.length(COALESCE(importer))({
                minimum: 5,
                maximum: 25,
                gap: 5,
            })({
                fixed: "length",
                minimum: "minLength",
                maximum: "maxLength",
            })(tags);
            return ts.factory.createCallExpression(
                COALESCE(importer)("string"),
                undefined,
                tail ? [tail] : undefined,
            );
        };
}

type Atomic = boolean | number | string | bigint;
interface IExplore {
    object: boolean;
    recursive: boolean;
}

const FUNCTOR = (i: number) => `$ro${i}`;
const COALESCE = (importer: FunctionImporter) => (name: string) =>
    ExpressionFactory.coalesce(
        ts.factory.createIdentifier(`generator.${name}`),
        IdentifierFactory.join(importer.use("generator"), name),
    );
