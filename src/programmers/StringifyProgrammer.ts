import ts from "typescript";
import { StringifyPredicator } from "./helpers/StringifyPredicator";
import { MetadataCollection } from "../factories/MetadataCollection";
import { MetadataFactory } from "../factories/MetadataFactory";
import { IdentifierFactory } from "../factories/IdentifierFactory";
import { FeatureProgrammer } from "./FeatureProgrammer";
import { IsProgrammer } from "./IsProgrammer";
import { StringifyJoiner } from "./helpers/StringifyJoinder";
import { StatementFactory } from "../factories/StatementFactory";
import { Metadata } from "../metadata/Metadata";
import { ArrayUtil } from "../utils/ArrayUtil";
import { ExpressionFactory } from "../factories/ExpressionFactory";
import { UnionExplorer } from "./helpers/UnionExplorer";
import { IProject } from "../transformers/IProject";
import { ValueFactory } from "../factories/ValueFactory";
import { OptionPreditor } from "./helpers/OptionPredicator";
import { AssertProgrammer } from "./AssertProgrammer";

export namespace StringifyProgrammer {
    /* -----------------------------------------------------------
        GENERATORS
    ----------------------------------------------------------- */
    export const generate = (
        project: IProject,
        modulo: ts.LeftHandSideExpression,
    ) =>
        FeatureProgrammer.generate(
            project,
            CONFIG(project, modulo),
            (collection) => {
                const utils = [
                    ...(OptionPreditor.numeric(project.options, "stringify")
                        ? ["number"]
                        : []),
                    "string",
                    "tail",
                ].map((name) =>
                    StatementFactory.variable(
                        ts.NodeFlags.Const,
                        "$" + name,
                        IdentifierFactory.join(modulo, name),
                    ),
                );

                const isFunctors =
                    IsProgrammer.generate_functors(project)(collection);
                const isUnioners =
                    IsProgrammer.generate_unioners(project)(collection);

                return [
                    ...utils,
                    ...(isFunctors
                        ? [
                              ts.factory.createVariableStatement(
                                  undefined,
                                  ts.factory.createVariableDeclarationList(
                                      [isFunctors],
                                      ts.NodeFlags.Const,
                                  ),
                              ),
                          ]
                        : []),
                    ...(isUnioners
                        ? [
                              ts.factory.createVariableStatement(
                                  undefined,
                                  ts.factory.createVariableDeclarationList(
                                      [isUnioners],
                                      ts.NodeFlags.Const,
                                  ),
                              ),
                          ]
                        : []),
                ];
            },
        );

    /* -----------------------------------------------------------
        DECODERS
    ----------------------------------------------------------- */
    const decode =
        (project: IProject, modulo: ts.LeftHandSideExpression) =>
        (
            input: ts.Expression,
            meta: Metadata,
            explore: FeatureProgrammer.IExplore,
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
                    return decode_to_json(project, modulo)(
                        input,
                        meta.resolved,
                        explore,
                    );
                else
                    unions.push({
                        type: "resolved",
                        is: () => IsProgrammer.decode_to_json(input),
                        value: () =>
                            decode_to_json(project, modulo)(
                                input,
                                meta.resolved!,
                                explore,
                            ),
                    });
            else if (meta.functional === true)
                unions.push({
                    type: "functional",
                    is: () => IsProgrammer.decode_functional(input),
                    value: () => decode_functional(explore),
                });

            // ATOMICS AND CONSTANTS
            for (const constant of meta.constants)
                if (
                    ArrayUtil.has(
                        meta.atomics,
                        (type) => type === constant.type,
                    )
                )
                    continue;
                else if (constant.type !== "string")
                    unions.push({
                        type: "atomic",
                        is: () =>
                            IsProgrammer.decode(project)(
                                input,
                                (() => {
                                    const partial = Metadata.initialize();
                                    partial.atomics.push(constant.type);
                                    return partial;
                                })(),
                                explore,
                            ),
                        value: () =>
                            decode_atomic(project)(
                                input,
                                constant.type,
                                explore,
                            ),
                    });
                else
                    unions.push({
                        type: "const string",
                        is: () =>
                            IsProgrammer.decode(project)(
                                input,
                                (() => {
                                    const partial = Metadata.initialize();
                                    partial.atomics.push("string");
                                    return partial;
                                })(),
                                explore,
                            ),
                        value: () =>
                            decode_constant_string(
                                project,
                                input,
                                [...constant.values] as string[],
                                explore,
                            ),
                    });
            for (const type of meta.atomics)
                unions.push({
                    type: "atomic",
                    is: () =>
                        IsProgrammer.decode(project)(
                            input,
                            (() => {
                                const partial = Metadata.initialize();
                                partial.atomics.push(type);
                                return partial;
                            })(),
                            explore,
                        ),
                    value: () => decode_atomic(project)(input, type, explore),
                });

            // TUPLES
            for (const tuple of meta.tuples) {
                for (const child of tuple)
                    if (StringifyPredicator.undefindable(meta))
                        throw new Error(
                            `Error on TSON.stringify(): tuple cannot contain undefined value - (${child.getName()}).`,
                        );
                unions.push({
                    type: "tuple",
                    is: () =>
                        IsProgrammer.decode(project)(
                            input,
                            (() => {
                                const partial = Metadata.initialize();
                                partial.tuples.push(tuple);
                                return partial;
                            })(),
                            explore,
                        ),
                    value: () =>
                        decode_tuple(project, modulo)(input, tuple, explore),
                });
            }

            // ARRAYS
            if (meta.arrays.length) {
                for (const child of meta.arrays)
                    if (StringifyPredicator.undefindable(child))
                        throw new Error(
                            `Error on TSON.stringify(): array cannot contain undefined value (${child.getName()}).`,
                        );
                unions.push({
                    type: "array",
                    is: () => ExpressionFactory.isArray(input),
                    value: () =>
                        explore_arrays(project, modulo)(input, meta.arrays, {
                            ...explore,
                            from: "array",
                        }),
                });
            }

            // OBJECTS
            if (meta.objects.length)
                unions.push({
                    type: "object",
                    is: () => ExpressionFactory.isObject(input, true),
                    value: () =>
                        explore_objects(input, meta, {
                            ...explore,
                            from: "object",
                        }),
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
                        iterate(modulo)(input, unions, meta.getName()),
                    ),
                    undefined,
                    undefined,
                ),
            );
        };

    const decode_array = (
        project: IProject,
        modulo: ts.LeftHandSideExpression,
    ) =>
        FeatureProgrammer.decode_array(
            CONFIG(project, modulo),
            StringifyJoiner.array,
        );

    const decode_object = () =>
        FeatureProgrammer.decode_object({
            trace: false,
            functors: FUNCTORS,
        });

    const decode_tuple =
        (project: IProject, modulo: ts.LeftHandSideExpression) =>
        (
            input: ts.Expression,
            tuple: Metadata[],
            explore: FeatureProgrammer.IExplore,
        ): ts.Expression => {
            const children: ts.Expression[] = tuple.map((elem, index) =>
                decode(project, modulo)(
                    ts.factory.createElementAccessExpression(input, index),
                    elem,
                    {
                        ...explore,
                        from: "array",
                    },
                ),
            );
            return StringifyJoiner.tuple(children);
        };

    const decode_atomic =
        (project: IProject) =>
        (
            input: ts.Expression,
            type: string,
            explore: FeatureProgrammer.IExplore,
        ) => {
            if (type === "string")
                return ts.factory.createCallExpression(
                    ts.factory.createIdentifier(`$string`),
                    undefined,
                    [input],
                );
            else if (
                type === "number" &&
                OptionPreditor.numeric(project.options, "stringify")
            )
                input = ts.factory.createCallExpression(
                    ts.factory.createIdentifier("$number"),
                    undefined,
                    [input],
                );

            return explore.from !== "top"
                ? input
                : ts.factory.createCallExpression(
                      IdentifierFactory.join(input, "toString"),
                      undefined,
                      undefined,
                  );
        };

    function decode_constant_string(
        project: IProject,
        input: ts.Expression,
        values: string[],
        explore: FeatureProgrammer.IExplore,
    ): ts.Expression {
        if (values.every((v) => !StringifyPredicator.require_escape(v)))
            return [
                ts.factory.createStringLiteral('"'),
                input,
                ts.factory.createStringLiteral('"'),
            ].reduce((x, y) => ts.factory.createAdd(x, y));
        else return decode_atomic(project)(input, "string", explore);
    }

    const decode_to_json =
        (project: IProject, modulo: ts.LeftHandSideExpression) =>
        (
            input: ts.Expression,
            resolved: Metadata,
            explore: FeatureProgrammer.IExplore,
        ): ts.Expression => {
            return decode(project, modulo)(
                ts.factory.createCallExpression(
                    IdentifierFactory.join(input, "toJSON"),
                    undefined,
                    [],
                ),
                resolved,
                explore,
            );
        };

    function decode_functional(explore: FeatureProgrammer.IExplore) {
        return explore.from === "array"
            ? ts.factory.createStringLiteral("null")
            : ts.factory.createIdentifier("undefined");
    }

    /* -----------------------------------------------------------
        EXPLORERS
    ----------------------------------------------------------- */
    const explore_arrays = (
        project: IProject,
        modulo: ts.LeftHandSideExpression,
    ) =>
        UnionExplorer.array(
            IsProgrammer.decode(project),
            decode_array(project, modulo),
            () => ts.factory.createStringLiteral("[]"),
            (input, targets) =>
                AssertProgrammer.throw_type_guard_error(modulo)({
                    method: "stringify",
                    expected: `(${targets
                        .map((t) => t.getName())
                        .join(" | ")})`,
                    value: input,
                }),
        );

    const explore_objects = (
        input: ts.Expression,
        meta: Metadata,
        explore: FeatureProgrammer.IExplore,
    ) => {
        if (meta.objects.length === 1)
            return decode_object()(input, meta.objects[0]!, explore);

        return ts.factory.createCallExpression(
            ts.factory.createIdentifier(`${UNIONERS}[${meta.union_index!}]`),
            undefined,
            [input],
        );
    };

    /* -----------------------------------------------------------
        RETURN SCRIPTS
    ----------------------------------------------------------- */
    function wrap_required(
        input: ts.Expression,
        meta: Metadata,
        explore: FeatureProgrammer.IExplore,
    ): (expression: ts.Expression) => ts.Expression {
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
    }

    function wrap_nullable(
        input: ts.Expression,
        meta: Metadata,
    ): (expression: ts.Expression) => ts.Expression {
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
    }

    function wrap_functional(
        input: ts.Expression,
        meta: Metadata,
        explore: FeatureProgrammer.IExplore,
    ): (expression: ts.Expression) => ts.Expression {
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
    }

    const iterate =
        (modulo: ts.LeftHandSideExpression) =>
        (input: ts.Expression, unions: IUnion[], expected: string) =>
            ts.factory.createBlock(
                [
                    ...unions.map((u) =>
                        ts.factory.createIfStatement(
                            u.is(),
                            ts.factory.createReturnStatement(u.value()),
                        ),
                    ),
                    AssertProgrammer.throw_type_guard_error(modulo)({
                        method: "stringify",
                        expected,
                        value: input,
                    }),
                ],
                true,
            );

    /* -----------------------------------------------------------
        CONFIGURATIONS
    ----------------------------------------------------------- */
    const FUNCTORS = "$so";
    const UNIONERS = "$su";

    const CONFIG = (
        project: IProject,
        modulo: ts.LeftHandSideExpression,
    ): FeatureProgrammer.IConfig => ({
        functors: FUNCTORS,
        unioners: UNIONERS,
        trace: false,
        initializer,
        decoder: decode(project, modulo),
        objector: OBJECTOR(project, modulo),
    });

    const initializer: FeatureProgrammer.Initializer = ({ checker }, type) => {
        const collection: MetadataCollection = new MetadataCollection();
        const meta: Metadata = MetadataFactory.generate(
            checker,
            collection,
            type,
            {
                resolve: true,
                constant: true,
            },
        );
        return [collection, meta];
    };

    const OBJECTOR = (
        project: IProject,
        modulo: ts.LeftHandSideExpression,
    ): FeatureProgrammer.IConfig.IObjector => ({
        checker: IsProgrammer.decode(project),
        decoder: decode_object(),
        joiner: StringifyJoiner.object,
        unionizer: (input, targets, explore) =>
            ts.factory.createCallExpression(
                ts.factory.createArrowFunction(
                    undefined,
                    undefined,
                    [],
                    undefined,
                    undefined,
                    iterate(modulo)(
                        input,
                        targets.map((obj) => ({
                            type: "object",
                            is: () =>
                                IsProgrammer.decode_object()(
                                    input,
                                    obj,
                                    explore,
                                ),
                            value: () => decode_object()(input, obj, explore),
                        })),
                        `(${targets.map((t) => t.name).join(" | ")})`,
                    ),
                ),
                undefined,
                undefined,
            ),
        failure: (input, targets) =>
            AssertProgrammer.throw_type_guard_error(modulo)({
                method: "stringify",
                expected: `(${targets.map((t) => t.name).join(" | ")})`,
                value: input,
            }),
    });
}

interface IUnion {
    type: string;
    is: () => ts.Expression;
    value: () => ts.Expression;
}
