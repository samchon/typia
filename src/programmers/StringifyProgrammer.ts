import ts from "typescript";

import { ExpressionFactory } from "../factories/ExpressionFactory";
import { IdentifierFactory } from "../factories/IdentifierFactory";
import { MetadataCollection } from "../factories/MetadataCollection";
import { MetadataFactory } from "../factories/MetadataFactory";
import { TypeFactory } from "../factories/TypeFactory";
import { ValueFactory } from "../factories/ValueFactory";

import { IMetadataTag } from "../metadata/IMetadataTag";
import { Metadata } from "../metadata/Metadata";
import { MetadataObject } from "../metadata/MetadataObject";

import { IProject } from "../transformers/IProject";

import { Atomic } from "../typings/Atomic";

import { ArrayUtil } from "../utils/ArrayUtil";

import { FeatureProgrammer } from "./FeatureProgrammer";
import { IsProgrammer } from "./IsProgrammer";
import { AtomicPredicator } from "./helpers/AtomicPredicator";
import { FunctionImporter } from "./helpers/FunctionImporeter";
import { IExpressionEntry } from "./helpers/IExpressionEntry";
import { OptionPredicator } from "./helpers/OptionPredicator";
import { StringifyJoiner } from "./helpers/StringifyJoinder";
import { StringifyPredicator } from "./helpers/StringifyPredicator";
import { UnionExplorer } from "./helpers/UnionExplorer";
import { check_native } from "./internal/check_native";
import { decode_union_object } from "./internal/decode_union_object";
import { feature_object_entries } from "./internal/feature_object_entries";

export namespace StringifyProgrammer {
    /* -----------------------------------------------------------
        WRITER
    ----------------------------------------------------------- */
    /**
     * @deprecated Use `write()` function instead
     */
    export const generate =
        (project: IProject, modulo: ts.LeftHandSideExpression) =>
        (type: ts.Type, name?: string) =>
            write(project)(modulo)(type, name);

    export const write =
        (project: IProject) => (modulo: ts.LeftHandSideExpression) => {
            const importer: FunctionImporter = new FunctionImporter();
            return FeatureProgrammer.analyze(project)({
                ...configure(project)(importer),
                addition: (collection) => {
                    const isObjects =
                        IsProgrammer.write_object_functions(project)(importer)(
                            collection,
                        );
                    const isUnions =
                        IsProgrammer.write_union_functions(project)(importer)(
                            collection,
                        );
                    const isDefinitions =
                        IsProgrammer.write_definition_functions(project)(
                            importer,
                        )(collection);

                    return [
                        ...importer.declare(modulo),
                        ...isObjects.filter((_, i) =>
                            importer.hasLocal(`$io${i}`),
                        ),
                        ...isUnions.filter((_, i) =>
                            importer.hasLocal(`$iu${i}`),
                        ),
                        ...isDefinitions.filter((_, i) =>
                            importer.hasLocal(`$id${i}`),
                        ),
                    ];
                },
            })(importer);
        };

    /* -----------------------------------------------------------
        DECODERS
    ----------------------------------------------------------- */
    const decode =
        (project: IProject, importer: FunctionImporter) =>
        (
            input: ts.Expression,
            meta: Metadata,
            explore: FeatureProgrammer.IExplore,
            tags: IMetadataTag[],
        ): ts.Expression => {
            // ANY TYPE
            if (meta.any === true)
                return wrap_required(
                    input,
                    meta,
                    explore,
                )(
                    wrap_functional(
                        input,
                        meta,
                        explore,
                    )(
                        ts.factory.createCallExpression(
                            ts.factory.createIdentifier("JSON.stringify"),
                            undefined,
                            [input],
                        ),
                    ),
                );

            // ONLY NULL OR UNDEFINED
            const size: number = meta.size();
            if (
                size === 0 &&
                (meta.required === false || meta.nullable === true)
            ) {
                if (meta.required === false && meta.nullable === true)
                    return explore.from === "array"
                        ? ts.factory.createStringLiteral("null")
                        : ts.factory.createConditionalExpression(
                              ts.factory.createStrictEquality(
                                  ts.factory.createNull(),
                                  input,
                              ),
                              undefined,
                              ts.factory.createStringLiteral("null"),
                              undefined,
                              ts.factory.createIdentifier("undefined"),
                          );
                else if (meta.required === false)
                    return explore.from === "array"
                        ? ts.factory.createStringLiteral("null")
                        : ts.factory.createIdentifier("undefined");
                else return ts.factory.createStringLiteral("null");
            }

            //----
            // LIST UP UNION TYPES
            //----
            const unions: IUnion[] = [];

            // toJSON() METHOD
            if (meta.resolved !== null)
                if (size === 1)
                    return decode_to_json(project, importer)(
                        input,
                        meta.resolved,
                        explore,
                        tags,
                    );
                else
                    unions.push({
                        type: "resolved",
                        is: () => IsProgrammer.decode_to_json(false)(input),
                        value: () =>
                            decode_to_json(project, importer)(
                                input,
                                meta.resolved!,
                                explore,
                                tags,
                            ),
                    });
            else if (meta.functional === true)
                unions.push({
                    type: "functional",
                    is: () => IsProgrammer.decode_functional(input),
                    value: () => decode_functional(explore),
                });

            // TEMPLATES
            if (
                meta.templates.length ||
                ArrayUtil.has(meta.constants, (c) => c.type === "string")
            )
                if (AtomicPredicator.template(meta)) {
                    const partial = Metadata.initialize();
                    partial.atomics.push("string"),
                        unions.push({
                            type: "template literal",
                            is: () =>
                                IsProgrammer.decode(project, importer)(
                                    input,
                                    partial,
                                    explore,
                                    [],
                                    [],
                                ),
                            value: () =>
                                decode_atomic(project)(importer)(
                                    input,
                                    "string",
                                    explore,
                                    tags,
                                ),
                        });
                }

            // CONSTANTS
            for (const constant of meta.constants)
                if (AtomicPredicator.constant(meta)(constant.type) === false)
                    continue;
                else if (constant.type !== "string")
                    unions.push({
                        type: "atomic",
                        is: () =>
                            IsProgrammer.decode(project, importer)(
                                input,
                                (() => {
                                    const partial = Metadata.initialize();
                                    partial.atomics.push(constant.type);
                                    return partial;
                                })(),
                                explore,
                                [],
                                [],
                            ),
                        value: () =>
                            decode_atomic(project)(importer)(
                                input,
                                constant.type,
                                explore,
                                tags,
                            ),
                    });
                else if (meta.templates.length === 0)
                    unions.push({
                        type: "const string",
                        is: () =>
                            IsProgrammer.decode(project, importer)(
                                input,
                                (() => {
                                    const partial = Metadata.initialize();
                                    partial.atomics.push("string");
                                    return partial;
                                })(),
                                explore,
                                [],
                                [],
                            ),
                        value: () =>
                            decode_constant_string(project)(importer)(
                                input,
                                [...constant.values] as string[],
                                explore,
                            ),
                    });

            /// ATOMICS
            for (const type of meta.atomics)
                if (AtomicPredicator.atomic(meta)(type))
                    unions.push({
                        type: "atomic",
                        is: () =>
                            IsProgrammer.decode(project, importer)(
                                input,
                                (() => {
                                    const partial = Metadata.initialize();
                                    partial.atomics.push(type);
                                    return partial;
                                })(),
                                explore,
                                [],
                                [],
                            ),
                        value: () =>
                            decode_atomic(project)(importer)(
                                input,
                                type,
                                explore,
                                tags,
                            ),
                    });

            // TUPLES
            for (const tuple of meta.tuples) {
                for (const child of tuple)
                    if (StringifyPredicator.undefindable(meta))
                        throw new Error(
                            `Error on typia.stringify(): tuple cannot contain undefined value - (${child.getName()}).`,
                        );
                unions.push({
                    type: "tuple",
                    is: () =>
                        IsProgrammer.decode(project, importer)(
                            input,
                            (() => {
                                const partial = Metadata.initialize();
                                partial.tuples.push(tuple);
                                return partial;
                            })(),
                            explore,
                            [],
                            [],
                        ),
                    value: () =>
                        decode_tuple(project)(importer)(
                            input,
                            tuple,
                            explore,
                            tags,
                        ),
                });
            }

            // ARRAYS
            if (meta.arrays.length) {
                for (const child of meta.arrays)
                    if (StringifyPredicator.undefindable(child))
                        throw new Error(
                            `Error on typia.stringify(): array cannot contain undefined value (${child.getName()}).`,
                        );
                const value: () => ts.Expression = meta.arrays.some(
                    (elem) => elem.any,
                )
                    ? () =>
                          ts.factory.createCallExpression(
                              ts.factory.createIdentifier("JSON.stringify"),
                              undefined,
                              [input],
                          )
                    : () =>
                          explore_arrays(project)(importer)(
                              input,
                              meta.arrays,
                              {
                                  ...explore,
                                  from: "array",
                              },
                              [],
                              [],
                          );

                unions.push({
                    type: "array",
                    is: () => ExpressionFactory.isArray(input),
                    value,
                });
            }

            // BUILT-IN CLASSES
            if (meta.natives.length)
                for (const native of meta.natives)
                    unions.push({
                        type: "object",
                        is: () => check_native(native)(input),
                        value: () =>
                            AtomicPredicator.native(native)
                                ? decode_atomic(project)(importer)(
                                      input,
                                      native.toLowerCase() as Atomic.Literal,
                                      explore,
                                      tags,
                                  )
                                : ts.factory.createStringLiteral("{}"),
                    });

            // SETS
            if (meta.sets.length)
                unions.push({
                    type: "object",
                    is: () => ExpressionFactory.isInstanceOf("Set")(input),
                    value: () => ts.factory.createStringLiteral("{}"),
                });

            // MAPS
            if (meta.maps.length)
                unions.push({
                    type: "object",
                    is: () => ExpressionFactory.isInstanceOf("Map")(input),
                    value: () => ts.factory.createStringLiteral("{}"),
                });

            // OBJECTS
            if (meta.objects.length)
                unions.push({
                    type: "object",
                    is: () =>
                        ExpressionFactory.isObject({
                            checkNull: true,
                            checkArray: meta.objects.some((obj) =>
                                obj.properties.every(
                                    (prop) =>
                                        !prop.key.isSoleLiteral() ||
                                        !prop.value.required,
                                ),
                            ),
                        })(input),
                    value: () =>
                        meta.isParentResolved() === false &&
                        meta.objects.length === 1 &&
                        meta.objects[0]!._Is_simple()
                            ? (() => {
                                  const obj: MetadataObject = meta.objects[0]!;
                                  const entries: IExpressionEntry<ts.Expression>[] =
                                      feature_object_entries<ts.Expression>({
                                          decoder: decode(project, importer),
                                          trace: false,
                                          path: false,
                                      })(importer)(obj)(input);
                                  return StringifyJoiner.object(importer)(
                                      input,
                                      entries,
                                  );
                              })()
                            : explore_objects(importer)(input, meta, {
                                  ...explore,
                                  from: "object",
                              }),
                });

            // DEFINITIONS
            for (const def of meta.definitions)
                unions.push({
                    type: "array",
                    is: () => ts.factory.createTrue(),
                    value: () =>
                        decode_definition(importer)(input, def, explore),
                });

            //----
            // RETURNS
            //----
            // CHECK NULL AND UNDEFINED
            const wrapper = (output: ts.Expression) =>
                wrap_required(
                    input,
                    meta,
                    explore,
                )(wrap_nullable(input, meta)(output));

            // DIRECT RETURN
            if (unions.length === 0)
                return ts.factory.createCallExpression(
                    ts.factory.createIdentifier("JSON.stringify"),
                    undefined,
                    [input],
                );
            else if (unions.length === 1) return wrapper(unions[0]!.value());

            // RETURN WITH TYPE CHECKING
            return wrapper(
                ts.factory.createCallExpression(
                    ts.factory.createArrowFunction(
                        undefined,
                        undefined,
                        [],
                        undefined,
                        undefined,
                        iterate(importer, input, unions, meta.getName()),
                    ),
                    undefined,
                    undefined,
                ),
            );
        };

    const decode_array = (project: IProject) => (importer: FunctionImporter) =>
        FeatureProgrammer.decode_array(configure(project)(importer))(importer)(
            StringifyJoiner.array,
        );

    const decode_object = (importer: FunctionImporter) =>
        FeatureProgrammer.decode_object({
            trace: false,
            path: false,
            prefix: PREFIX,
        })(importer);

    export const decode_definition = (importer: FunctionImporter) =>
        FeatureProgrammer.decode_definition({
            trace: false,
            path: false,
            prefix: PREFIX,
        })(importer);

    const decode_tuple =
        (project: IProject) =>
        (importer: FunctionImporter) =>
        (
            input: ts.Expression,
            tuple: Metadata[],
            explore: FeatureProgrammer.IExplore,
            tags: IMetadataTag[],
        ): ts.Expression => {
            const children: ts.Expression[] = tuple
                .filter((elem) => elem.rest === null)
                .map((elem, index) =>
                    decode(project, importer)(
                        ts.factory.createElementAccessExpression(input, index),
                        elem,
                        {
                            ...explore,
                            from: "array",
                        },
                        tags,
                    ),
                );
            const rest = (() => {
                if (tuple.length === 0) return null;
                const last = tuple[tuple.length - 1]!;
                if (last.rest === null) return null;

                const code = decode(project, importer)(
                    ts.factory.createCallExpression(
                        IdentifierFactory.access(input)("slice"),
                        undefined,
                        [ts.factory.createNumericLiteral(tuple.length - 1)],
                    ),
                    (() => {
                        const wrapper: Metadata = Metadata.initialize();
                        wrapper.arrays.push(tuple[tuple.length - 1]!.rest!);
                        return wrapper;
                    })(),
                    {
                        ...explore,
                        start: tuple.length - 1,
                    },
                    tags,
                );
                return ts.factory.createCallExpression(
                    importer.use("rest"),
                    undefined,
                    [code],
                );
            })();
            return StringifyJoiner.tuple(children, rest);
        };

    const decode_atomic =
        (project: IProject) =>
        (importer: FunctionImporter) =>
        (
            input: ts.Expression,
            type: string,
            explore: FeatureProgrammer.IExplore,
            tagList: IMetadataTag[],
        ) => {
            if (type === "string")
                if (tagList.find((tag) => tag.kind === "format") !== undefined)
                    return [
                        ts.factory.createStringLiteral('"'),
                        input,
                        ts.factory.createStringLiteral('"'),
                    ].reduce((x, y) => ts.factory.createAdd(x, y));
                else
                    return ts.factory.createCallExpression(
                        importer.use("string"),
                        undefined,
                        [input],
                    );
            else if (
                type === "number" &&
                OptionPredicator.numeric(project.options)
            )
                input = ts.factory.createCallExpression(
                    importer.use("number"),
                    undefined,
                    [input],
                );

            return explore.from !== "top"
                ? input
                : ts.factory.createCallExpression(
                      IdentifierFactory.access(input)("toString"),
                      undefined,
                      undefined,
                  );
        };

    const decode_constant_string =
        (project: IProject) =>
        (importer: FunctionImporter) =>
        (
            input: ts.Expression,
            values: string[],
            explore: FeatureProgrammer.IExplore,
        ): ts.Expression => {
            if (values.every((v) => !StringifyPredicator.require_escape(v)))
                return [
                    ts.factory.createStringLiteral('"'),
                    input,
                    ts.factory.createStringLiteral('"'),
                ].reduce((x, y) => ts.factory.createAdd(x, y));
            else
                return decode_atomic(project)(importer)(
                    input,
                    "string",
                    explore,
                    [],
                );
        };

    const decode_to_json =
        (project: IProject, importer: FunctionImporter) =>
        (
            input: ts.Expression,
            resolved: Metadata,
            explore: FeatureProgrammer.IExplore,
            tags: IMetadataTag[],
        ): ts.Expression => {
            return decode(project, importer)(
                ts.factory.createCallExpression(
                    IdentifierFactory.access(input)("toJSON"),
                    undefined,
                    [],
                ),
                resolved,
                explore,
                tags,
            );
        };

    const decode_functional = (explore: FeatureProgrammer.IExplore) =>
        explore.from === "array"
            ? ts.factory.createStringLiteral("null")
            : ts.factory.createIdentifier("undefined");

    /* -----------------------------------------------------------
        EXPLORERS
    ----------------------------------------------------------- */
    const explore_arrays =
        (project: IProject) => (importer: FunctionImporter) =>
            UnionExplorer.array({
                checker: IsProgrammer.decode(project, importer),
                decoder: decode_array(project)(importer),
                empty: ts.factory.createStringLiteral("[]"),
                success: ts.factory.createTrue(),
                failure: (input, expected) =>
                    create_throw_error(importer, input, expected),
            });

    const explore_objects =
        (importer: FunctionImporter) =>
        (
            input: ts.Expression,
            meta: Metadata,
            explore: FeatureProgrammer.IExplore,
        ) => {
            if (meta.objects.length === 1)
                return decode_object(importer)(
                    input,
                    meta.objects[0]!,
                    explore,
                );

            return ts.factory.createCallExpression(
                ts.factory.createIdentifier(
                    importer.useLocal(`${PREFIX.union}${meta.union_index_!}`),
                ),
                undefined,
                [input],
            );
        };

    /* -----------------------------------------------------------
        RETURN SCRIPTS
    ----------------------------------------------------------- */
    const wrap_required = (
        input: ts.Expression,
        meta: Metadata,
        explore: FeatureProgrammer.IExplore,
    ): ((expression: ts.Expression) => ts.Expression) => {
        if (meta.required === true && meta.any === false)
            return (expression) => expression;
        return (expression) =>
            ts.factory.createConditionalExpression(
                ts.factory.createStrictInequality(
                    ts.factory.createIdentifier("undefined"),
                    input,
                ),
                undefined,
                expression,
                undefined,
                explore.from === "array"
                    ? ts.factory.createStringLiteral("null")
                    : ts.factory.createIdentifier("undefined"),
            );
    };

    const wrap_nullable = (
        input: ts.Expression,
        meta: Metadata,
    ): ((expression: ts.Expression) => ts.Expression) => {
        if (meta.nullable === false) return (expression) => expression;
        return (expression) =>
            ts.factory.createConditionalExpression(
                ts.factory.createStrictInequality(
                    ts.factory.createNull(),
                    input,
                ),
                undefined,
                expression,
                undefined,
                ts.factory.createStringLiteral("null"),
            );
    };

    const wrap_functional = (
        input: ts.Expression,
        meta: Metadata,
        explore: FeatureProgrammer.IExplore,
    ): ((expression: ts.Expression) => ts.Expression) => {
        if (meta.functional === false) return (expression) => expression;
        return (expression) =>
            ts.factory.createConditionalExpression(
                ts.factory.createStrictInequality(
                    ts.factory.createStringLiteral("function"),
                    ValueFactory.TYPEOF(input),
                ),
                undefined,
                expression,
                undefined,
                decode_functional(explore),
            );
    };

    const iterate = (
        importer: FunctionImporter,
        input: ts.Expression,
        unions: IUnion[],
        expected: string,
    ) =>
        ts.factory.createBlock(
            [
                ...unions.map((u) =>
                    ts.factory.createIfStatement(
                        u.is(),
                        ts.factory.createReturnStatement(u.value()),
                    ),
                ),
                create_throw_error(importer, input, expected),
            ],
            true,
        );

    /* -----------------------------------------------------------
        CONFIGURATIONS
    ----------------------------------------------------------- */
    const PREFIX = {
        object: "$so",
        union: "$su",
        definition: "$sd",
    };

    const configure =
        (project: IProject) =>
        (importer: FunctionImporter): FeatureProgrammer.IConfig => ({
            types: {
                input: (type, name) =>
                    ts.factory.createTypeReferenceNode(
                        name ?? TypeFactory.getFullName(project.checker)(type),
                    ),
                output: () => TypeFactory.keyword("string"),
            },
            prefix: PREFIX,
            trace: false,
            path: false,
            initializer,
            decoder: decode(project, importer),
            objector: OBJECTOR(project, importer),
        });

    const initializer: FeatureProgrammer.IConfig["initializer"] =
        ({ checker }) =>
        (type) => {
            const collection: MetadataCollection = new MetadataCollection();
            const meta: Metadata = MetadataFactory.analyze(checker)({
                resolve: true,
                constant: true,
                validate: (meta) => {
                    if (meta.atomics.find((str) => str === "bigint"))
                        throw new Error(NO_BIGINT);
                },
            })(collection)(type);
            return [collection, meta];
        };

    const OBJECTOR = (
        project: IProject,
        importer: FunctionImporter,
    ): FeatureProgrammer.IConfig.IObjector => ({
        checker: IsProgrammer.decode(project, importer),
        decoder: decode_object(importer),
        joiner: StringifyJoiner.object(importer),
        unionizer: decode_union_object(IsProgrammer.decode_object(importer))(
            decode_object(importer),
        )((exp) => exp)((value, expected) =>
            create_throw_error(importer, value, expected),
        ),
        failure: (input, expected) =>
            create_throw_error(importer, input, expected),
    });

    const create_throw_error = (
        importer: FunctionImporter,
        value: ts.Expression,
        expected: string,
    ) =>
        ts.factory.createExpressionStatement(
            ts.factory.createCallExpression(
                importer.use("throws"),
                [],
                [
                    ts.factory.createObjectLiteralExpression(
                        [
                            ts.factory.createPropertyAssignment(
                                "expected",
                                ts.factory.createStringLiteral(expected),
                            ),
                            ts.factory.createPropertyAssignment("value", value),
                        ],
                        true,
                    ),
                ],
            ),
        );
}

interface IUnion {
    type: string;
    is: () => ts.Expression;
    value: () => ts.Expression;
}

const NO_BIGINT = "Error on typia.stringify(): does not allow bigint type.";
