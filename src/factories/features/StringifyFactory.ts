import ts from "typescript";
import { IExpressionEntry } from "../../structures/IExpressionEntry";
import { IMetadata } from "../../structures/IMetadata";
import { IModule } from "../../structures/IModule";
import { IdentifierFactory } from "../programmatics/IdentifierFactory";
import { FeatureFactory } from "./FeatureFactory";
import { IsFactory } from "./IsFactory";

export namespace StringifyFactory {
    const CONFIG = (modulo: IModule): FeatureFactory.IConfig => ({
        trace: false,
        functors: {
            name: "stringify",
        },
        joiner: join_object,
        visitor: visit(modulo),
    });

    /* -----------------------------------------------------------
        GENERATORS
    ----------------------------------------------------------- */
    export const generate = (modulo: IModule) =>
        FeatureFactory.generate(CONFIG(modulo), IsFactory.generate_functors);

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
                        ts.factory.createConditionalExpression(
                            ts.factory.createStrictInequality(
                                ts.factory.createIdentifier("undefined"),
                                entry.input,
                            ),
                            undefined,
                            output,
                            undefined,
                            ts.factory.createNull(),
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
                              ts.factory.createNull(),
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
    const visit =
        (modulo: IModule) =>
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

            //----
            // LIST UP UNION TYPES
            //----
            const unions: IUnion[] = [];

            // toJSON() METHOD
            if (meta.resolved !== null)
                if (IMetadata.size(meta) === 1)
                    return visit_to_json(modulo)(input, meta.resolved, explore);
                else
                    unions.push({
                        type: "resolved",
                        is: () => IsFactory.visit_to_json(input),
                        value: () =>
                            visit_to_json(modulo)(
                                input,
                                meta.resolved!,
                                explore,
                            ),
                    });

            // ATOMICS
            for (const type of meta.atomics)
                unions.push({
                    type: "atomic",
                    is: () =>
                        IsFactory.visit(
                            input,
                            IMetadata.separate({ atomics: new Set([type]) }),
                            explore,
                        ),
                    value: () => visit_atomic(modulo)(input, type),
                });

            // TUPLES
            for (const tuple of meta.tuples)
                unions.push({
                    type: "tuple",
                    is: () =>
                        IsFactory.visit(
                            input,
                            IMetadata.separate({ tuples: new Map([tuple]) }),
                            explore,
                        ),
                    value: () => visit_tuple(modulo)(input, tuple[1], explore),
                });

            // ARRIES
            for (const [key, value] of meta.arraies)
                unions.push({
                    type: "array",
                    is: () =>
                        IsFactory.visit(
                            input,
                            IMetadata.separate({
                                arraies: new Map([[key, value]]),
                            }),
                            explore,
                        ),
                    value: () => visit_array(modulo)(input, value, explore),
                });

            // OBJECTS
            for (const [key, [value, nullable]] of meta.objects)
                unions.push({
                    type: "object",
                    is: () =>
                        IsFactory.visit(
                            input,
                            IMetadata.separate({
                                objects: new Map([[key, [value, nullable]]]),
                            }),
                            explore,
                        ),
                    value: () => visit_object(modulo)(input, value, explore),
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

    const visit_object = (modulo: IModule) =>
        FeatureFactory.visit_object(CONFIG(modulo));
    const visit_array = (modulo: IModule) =>
        FeatureFactory.visit_array(CONFIG(modulo), (input, arrow) =>
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

    const visit_tuple =
        (modulo: IModule) =>
        (
            input: ts.Expression,
            tuple: IMetadata[],
            explore: FeatureFactory.IExplore,
        ): ts.Expression => {
            const children: ts.Expression[] = [];
            tuple.forEach((elem, index) => {
                const child = visit(modulo)(
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

    const visit_atomic =
        (modulo: IModule) =>
        (input: ts.Expression, type: string): ts.Expression => {
            if (type === "string")
                return ts.factory.createCallExpression(
                    ts.factory.createIdentifier(
                        `${modulo.functional.name}.string`,
                    ),
                    undefined,
                    [input],
                );
            else
                return ts.factory.createCallExpression(
                    IdentifierFactory.join(input, "toString"),
                    undefined,
                    undefined,
                );
        };

    const visit_to_json =
        (modulo: IModule) =>
        (
            input: ts.Expression,
            resolved: IMetadata,
            explore: FeatureFactory.IExplore,
        ): ts.Expression => {
            return visit(modulo)(
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
        if (meta.required === true || explore.from === "object")
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
        (modulo: IModule) =>
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
                            ts.factory.createIdentifier(
                                `${modulo.error.name}.TypeGuardError`,
                            ),
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
