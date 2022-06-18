import ts from "typescript";
import { IExpressionEntry } from "../../structures/IExpressionEntry";
import { IMetadata } from "../../structures/IMetadata";
import { StringPredicator } from "../predicators/StringPredicator";
import { MetadataCollection } from "../MetadataCollection";
import { MetadataFactory } from "../MetadataFactory";
import { IdentifierFactory } from "../programmatics/IdentifierFactory";
import { FeatureFactory } from "./FeatureFactory";
import { IsFactory } from "./IsFactory";

export namespace StringifyFactory {
    const CONFIG = (
        modulo: ts.LeftHandSideExpression,
    ): FeatureFactory.IConfig => ({
        initializer: ({ checker }, type) => {
            const collection: MetadataCollection = new MetadataCollection();
            const meta: IMetadata = MetadataFactory.generate(
                checker,
                collection,
                type,
                {
                    resolve: true,
                    constant: true,
                },
            );
            return [collection, meta];
        },
        trace: false,
        functors: {
            name: "stringify",
        },
        joiner: join_object,
        decoder: decode(modulo),
    });

    /* -----------------------------------------------------------
        GENERATORS
    ----------------------------------------------------------- */
    export const generate = (modulo: ts.LeftHandSideExpression) =>
        FeatureFactory.generate(CONFIG(modulo), (collection) => {
            const validators = IsFactory.generate_functors(collection);
            return [
                ts.factory.createVariableStatement(
                    undefined,
                    ts.factory.createVariableDeclarationList(
                        [
                            ts.factory.createVariableDeclaration(
                                "$string",
                                undefined,
                                undefined,
                                IdentifierFactory.join(modulo, "string"),
                            ),
                        ],
                        ts.NodeFlags.Const,
                    ),
                ),
                ...(validators
                    ? [
                          ts.factory.createVariableStatement(
                              undefined,
                              ts.factory.createVariableDeclarationList(
                                  [validators],
                                  ts.NodeFlags.Const,
                              ),
                          ),
                      ]
                    : []),
            ];
        });

    function join_object(entries: IExpressionEntry[]): ts.Expression {
        //----
        // JOIN PROPERTIES
        //----
        // ELEMENTS AS ARRAY
        const array: ts.ArrayLiteralExpression =
            ts.factory.createArrayLiteralExpression(
                entries.map((entry) => {
                    const key = ts.factory.createStringLiteral(
                        JSON.stringify(entry.key) + ":",
                    );
                    const output = ts.factory.createAdd(key, entry.expression);
                    if (entry.meta.required === false)
                        return ts.factory.createConditionalExpression(
                            ts.factory.createStrictInequality(
                                ts.factory.createIdentifier("undefined"),
                                entry.input,
                            ),
                            undefined,
                            output,
                            undefined,
                            ts.factory.createIdentifier("undefined"),
                        );
                    return ts.factory.createAdd(key, entry.expression);
                }),
                true,
            );

        // FILTER ELEMENTS (NOT UNDEFINED)
        const required: boolean = entries.every((entry) => entry.meta.required);
        const filtered = required
            ? array
            : ts.factory.createCallExpression(
                  ts.factory.createPropertyAccessExpression(
                      array,
                      ts.factory.createIdentifier("filter"),
                  ),
                  [],
                  [
                      ts.factory.createArrowFunction(
                          undefined,
                          undefined,
                          [
                              ts.factory.createParameterDeclaration(
                                  undefined,
                                  undefined,
                                  undefined,
                                  ts.factory.createIdentifier("elem"),
                              ),
                          ],
                          undefined,
                          undefined,
                          ts.factory.createStrictInequality(
                              ts.factory.createIdentifier("undefined"),
                              ts.factory.createIdentifier("elem"),
                          ),
                      ),
                  ],
              );

        // CONCAT ITEMS
        return [
            ts.factory.createStringLiteral("{"),
            ts.factory.createCallExpression(
                ts.factory.createPropertyAccessExpression(
                    filtered,
                    ts.factory.createIdentifier("join"),
                ),
                [],
                [ts.factory.createStringLiteral(",")],
            ) as ts.Expression,
            ts.factory.createStringLiteral("}"),
        ].reduce((x, y) => ts.factory.createAdd(x, y));
    }

    /* -----------------------------------------------------------
        VISITORS
    ----------------------------------------------------------- */
    const decode =
        (modulo: ts.LeftHandSideExpression) =>
        (
            input: ts.Expression,
            meta: IMetadata,
            explore: FeatureFactory.IExplore,
        ): ts.Expression => {
            // ANY TYPE
            if (meta.any === true)
                return ts.factory.createCallExpression(
                    ts.factory.createIdentifier("JSON.stringify"),
                    undefined,
                    [input],
                );

            // ONLY NULL OR UNDEFINED
            const size: number = IMetadata.size(meta);
            if (
                size === 0 &&
                (meta.required === false || meta.nullable === true)
            ) {
                if (meta.required === false && meta.nullable === true)
                    return explore.from === "array"
                        ? ts.factory.createNull()
                        : ts.factory.createConditionalExpression(
                              ts.factory.createStrictEquality(
                                  ts.factory.createNull(),
                                  input,
                              ),
                              undefined,
                              ts.factory.createNull(),
                              undefined,
                              ts.factory.createIdentifier("undefined"),
                          );
                else if (meta.required === false)
                    return ts.factory.createIdentifier("undefined");
                else return ts.factory.createNull();
            }

            //----
            // LIST UP UNION TYPES
            //----
            const unions: IUnion[] = [];

            // toJSON() METHOD
            if (meta.resolved !== null)
                if (size === 1)
                    return visit_to_json(modulo)(input, meta.resolved, explore);
                else
                    unions.push({
                        type: "resolved",
                        is: () => IsFactory.express_to_json(input),
                        value: () =>
                            visit_to_json(modulo)(
                                input,
                                meta.resolved!,
                                explore,
                            ),
                    });

            // ATOMICS AND CONSTANTS
            for (const [type, values] of meta.constants)
                if (meta.atomics.has(type)) continue;
                else if (type !== "string")
                    unions.push({
                        type: "atomic",
                        is: () =>
                            IsFactory.express(
                                input,
                                IMetadata.separate({
                                    atomics: new Set([type]),
                                }),
                                explore,
                            ),
                        value: () => decode_atomic(input, type),
                    });
                else
                    unions.push({
                        type: "const string",
                        is: () =>
                            IsFactory.express(
                                input,
                                IMetadata.separate({
                                    atomics: new Set([type]),
                                }),
                                explore,
                            ),
                        value: () =>
                            decode_constant_string(input, [
                                ...values,
                            ] as string[]),
                    });
            for (const type of meta.atomics)
                unions.push({
                    type: "atomic",
                    is: () =>
                        IsFactory.express(
                            input,
                            IMetadata.separate({ atomics: new Set([type]) }),
                            explore,
                        ),
                    value: () => decode_atomic(input, type),
                });

            // TUPLES
            for (const tuple of meta.tuples)
                unions.push({
                    type: "tuple",
                    is: () =>
                        IsFactory.express(
                            input,
                            IMetadata.separate({ tuples: new Map([tuple]) }),
                            explore,
                        ),
                    value: () =>
                        express_tuple(modulo)(input, tuple[1], explore),
                });

            // ARRIES
            for (const [key, value] of meta.arraies)
                unions.push({
                    type: "array",
                    is: () =>
                        IsFactory.express(
                            input,
                            IMetadata.separate({
                                arraies: new Map([[key, value]]),
                            }),
                            explore,
                        ),
                    value: () => decode_array(modulo)(input, value, explore),
                });

            // OBJECTS
            for (const [key, [value, nullable]] of meta.objects)
                unions.push({
                    type: "object",
                    is: () =>
                        IsFactory.express(
                            input,
                            IMetadata.separate({
                                objects: new Map([[key, [value, nullable]]]),
                            }),
                            explore,
                        ),
                    value: () => decode_object(modulo)(input, value, explore),
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
                        iterate(modulo)(input, unions),
                    ),
                    undefined,
                    undefined,
                ),
            );
        };

    const decode_object = (modulo: ts.LeftHandSideExpression) =>
        FeatureFactory.decode_object(CONFIG(modulo));
    const decode_array = (modulo: ts.LeftHandSideExpression) =>
        FeatureFactory.decode_array(CONFIG(modulo), (input, arrow) =>
            [
                ts.factory.createStringLiteral("["),
                ts.factory.createCallExpression(
                    ts.factory.createPropertyAccessExpression(
                        ts.factory.createCallExpression(
                            IdentifierFactory.join(input, "map"),
                            undefined,
                            [arrow],
                        ),
                        ts.factory.createIdentifier("join"),
                    ),
                    undefined,
                    [ts.factory.createStringLiteral(",")],
                ) as ts.Expression,
                ts.factory.createStringLiteral("]"),
            ].reduce((x, y) => ts.factory.createAdd(x, y)),
        );

    const express_tuple =
        (modulo: ts.LeftHandSideExpression) =>
        (
            input: ts.Expression,
            tuple: IMetadata[],
            explore: FeatureFactory.IExplore,
        ): ts.Expression => {
            const children: ts.Expression[] = [];
            tuple.forEach((elem, index) => {
                const child = decode(modulo)(
                    ts.factory.createElementAccessExpression(input, index),
                    elem,
                    {
                        ...explore,
                        from: "array",
                    },
                );
                children.push(child);
                if (index !== tuple.length - 1)
                    children.push(ts.factory.createStringLiteral(","));
            });

            return [
                ts.factory.createStringLiteral("["),
                ...children,
                ts.factory.createStringLiteral("]"),
            ].reduce((x, y) => ts.factory.createAdd(x, y));
        };

    function decode_atomic(input: ts.Expression, type: string): ts.Expression {
        if (type === "string")
            return ts.factory.createCallExpression(
                ts.factory.createIdentifier(`$string`),
                undefined,
                [input],
            );
        else
            return ts.factory.createCallExpression(
                IdentifierFactory.join(input, "toString"),
                undefined,
                undefined,
            );
    }

    function decode_constant_string(
        input: ts.Expression,
        values: string[],
    ): ts.Expression {
        if (values.every((v) => !StringPredicator.require_escape(v)))
            return [
                ts.factory.createStringLiteral('"'),
                input,
                ts.factory.createStringLiteral('"'),
            ].reduce((x, y) => ts.factory.createAdd(x, y));
        else return decode_atomic(input, "string");
    }

    const visit_to_json =
        (modulo: ts.LeftHandSideExpression) =>
        (
            input: ts.Expression,
            resolved: IMetadata,
            explore: FeatureFactory.IExplore,
        ): ts.Expression => {
            return decode(modulo)(
                ts.factory.createCallExpression(
                    IdentifierFactory.join(input, "toJSON"),
                    undefined,
                    [],
                ),
                resolved,
                explore,
            );
        };

    /* -----------------------------------------------------------
        RETURN SCRIPTS
    ----------------------------------------------------------- */
    function wrap_required(
        input: ts.Expression,
        meta: IMetadata,
        explore: FeatureFactory.IExplore,
    ): (expression: ts.Expression) => ts.Expression {
        if (meta.required === true) return (expression) => expression;
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
        meta: IMetadata,
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

    const iterate =
        (modulo: ts.LeftHandSideExpression) =>
        (input: ts.Expression, unions: IUnion[]): ts.Block => {
            return ts.factory.createBlock(
                [
                    ...unions.map((u) =>
                        ts.factory.createIfStatement(
                            u.is(),
                            ts.factory.createReturnStatement(u.value()),
                        ),
                    ),
                    ts.factory.createThrowStatement(
                        ts.factory.createNewExpression(
                            IdentifierFactory.join(modulo, "TypeGuardError"),
                            [],
                            [
                                ts.factory.createStringLiteral("stringify"),
                                ts.factory.createStringLiteral("unknown"),
                                input,
                            ],
                        ),
                    ),
                ],
                true,
            );
        };
}

interface IUnion {
    type: string;
    is: () => ts.Expression;
    value: () => ts.Expression;
}
