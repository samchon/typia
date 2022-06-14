import ts from "typescript";
import { IMetadata } from "../../structures/IMetadata";
import { IdentifierFactory } from "../programmatics/IdentifierFactory";
import { MetadataCollection } from "../MetadataCollection";
import { ValueFactory } from "../ValueFactory";
import { Escaper } from "../../utils/Escaper";

export namespace CheckerFactory {
    export interface Combiner {
        (trace: boolean, postfix?: string): {
            (type: "and" | "or"): {
                (expressions: ts.Expression[]): ts.Expression;
            };
        };
    }

    export function generate(trace: boolean, combiner: Combiner) {
        const globalTrace: boolean = trace;

        function generate_object(
            trace: boolean,
            combiner: Combiner,
            obj: IMetadata.IObject,
        ) {
            const binaries: ts.Expression[] = [];
            for (const [key, value] of Object.entries(obj.properties)) {
                const access = ts.factory.createPropertyAccessExpression(
                    ValueFactory.INPUT(),
                    key,
                );
                const postfix: string =
                    !Escaper.reserved(key) && Escaper.variable(key)
                        ? `".${key}"`
                        : `"[${key.split('"').join('\\"')}]"`;
                binaries.push(
                    visit(trace, combiner, access, value, true, postfix),
                );
            }

            const output = combiner(false)("and")(binaries);
            return ts.factory.createArrowFunction(
                undefined,
                undefined,
                PARAMETERS(trace ? false : null)(ValueFactory.INPUT()),
                undefined,
                undefined,
                output,
            );
        }

        /* -----------------------------------------------------------
            VISITORS
        ----------------------------------------------------------- */
        function visit(
            trace: boolean,
            combiner: Combiner,
            input: ts.Expression,
            meta: IMetadata,
            fromObject: boolean,
            postfix: string = '""',
        ): ts.Expression {
            if (meta.any) return ValueFactory.BOOLEAN(true);
            trace = trace && IMetadata.size(meta) === 1;

            const top: ts.Expression[] = [];
            const binaries: ts.Expression[] = [];
            const add = create_add(binaries)(input);
            const constant = (value: number | string | bigint | boolean) =>
                typeof value === "string"
                    ? ts.factory.createStringLiteral(value)
                    : ts.factory.createIdentifier(value.toString());

            // NULLBLE AND UNDEFINDABLE
            (meta.nullable ? add : create_add(top)(input))(
                meta.nullable,
                ValueFactory.NULL(),
            );
            (meta.required ? create_add(top)(input) : add)(
                !meta.required,
                ValueFactory.UNDEFINED(),
            );

            // CONSTANT VALUES
            for (const values of meta.constants.values())
                for (const val of values) add(true, constant(val));

            // ATOMIC VALUES
            for (const type of meta.atomics)
                add(
                    true,
                    ValueFactory.TYPEOF(input),
                    ts.factory.createStringLiteral(type),
                );

            // ARRAY OR TUPLE
            if (meta.arraies.size + meta.tuples.size > 0) {
                const inner: ts.Expression[] = [];
                for (const tuple of meta.tuples.values())
                    inner.push(
                        visit_tuple(
                            trace,
                            combiner,
                            input,
                            tuple,
                            fromObject,
                            postfix,
                        ),
                    );
                for (const array of meta.arraies.values())
                    inner.push(
                        visit_array(
                            trace,
                            combiner,
                            input,
                            array,
                            fromObject,
                            postfix,
                        ),
                    );

                // ADD
                binaries.push(
                    ts.factory.createLogicalAnd(
                        ts.factory.createCallExpression(
                            ts.factory.createIdentifier("Array.isArray"),
                            undefined,
                            [input],
                        ),
                        inner.length === 0
                            ? inner[0]!
                            : inner.reduce((x, y) =>
                                  ts.factory.createLogicalOr(x, y),
                              ),
                    ),
                );
            }

            // OBJECT
            if (meta.objects.size > 0) {
                const outer: ts.Expression[] = [];
                if (meta.nullable === false)
                    create_add(outer)(input)(false, ValueFactory.NULL());
                create_add(outer)(input)(
                    true,
                    ValueFactory.TYPEOF(input),
                    ts.factory.createStringLiteral("object"),
                );

                const inner: ts.Expression[] = [];
                for (const [obj] of meta.objects.values())
                    inner.push(
                        visit_object(trace, input, obj, fromObject, postfix),
                    );

                binaries.push(
                    combiner(false, postfix)("and")([
                        ...outer,
                        combiner(false, postfix)("or")(inner),
                    ]),
                );
            }

            // COMBINE CONDITIONS
            return top.length !== 0
                ? combiner(trace, postfix)("and")([
                      ...top,
                      combiner(false, postfix)("or")(binaries),
                  ])
                : combiner(trace, postfix)("or")(binaries);
        }

        function visit_tuple(
            trace: boolean,
            combiner: Combiner,
            input: ts.Expression,
            tuple: Array<IMetadata>,
            fromObject: boolean,
            postfix: string,
        ): ts.Expression {
            const length = ts.factory.createStrictEquality(
                ts.factory.createPropertyAccessExpression(input, "length"),
                ts.factory.createNumericLiteral(tuple.length),
            );
            const binaries: ts.Expression[] = tuple.map((meta, index) =>
                visit(
                    trace,
                    combiner,
                    ts.factory.createElementAccessExpression(input, index),
                    meta,
                    fromObject,
                    `${postfix}[${index}]`,
                ),
            );
            if (binaries.length === 0) return length;
            else
                return [length, ...binaries].reduce((x, y) =>
                    ts.factory.createLogicalAnd(x, y),
                );
        }

        function visit_array(
            trace: boolean,
            combiner: Combiner,
            input: ts.Expression,
            meta: IMetadata,
            fromObject: boolean,
            postfix: string,
        ): ts.Expression {
            return ts.factory.createCallExpression(
                ts.factory.createPropertyAccessExpression(input, "every"),
                undefined,
                [
                    ts.factory.createArrowFunction(
                        undefined,
                        undefined,
                        [
                            ts.factory.createParameterDeclaration(
                                undefined,
                                undefined,
                                undefined,
                                ValueFactory.INPUT("elem"),
                            ),
                            ...(globalTrace
                                ? [
                                      ts.factory.createParameterDeclaration(
                                          undefined,
                                          undefined,
                                          undefined,
                                          ValueFactory.INPUT("index"),
                                      ),
                                  ]
                                : []),
                        ],
                        undefined,
                        undefined,
                        visit(
                            trace,
                            combiner,
                            ValueFactory.INPUT("elem"),
                            meta,
                            fromObject,
                            postfix.length
                                ? postfix.substr(0, postfix.length - 1) +
                                      INDEX_SYMBOL
                                : '"' + INDEX_SYMBOL,
                        ),
                    ),
                ],
            );
        }

        function visit_object(
            trace: boolean,
            input: ts.Expression,
            { $id }: IMetadata.IObject,
            fromObject: boolean,
            postfix: string,
        ) {
            return ts.factory.createCallExpression(
                IdentifierFactory.join(
                    ts.factory.createIdentifier("functors"),
                    $id,
                ),
                undefined,
                ARGUMENTS(globalTrace, trace, fromObject, postfix)(input),
            );
        }

        return function (collection: MetadataCollection, meta: IMetadata) {
            const variable = (() => {
                const storage = collection.storage();
                if (Object.entries(storage).length === 0) return null;

                const functors = ts.factory.createObjectLiteralExpression(
                    Object.entries(collection.storage()).map(([key, value]) =>
                        ts.factory.createPropertyAssignment(
                            IdentifierFactory.generate(key),
                            generate_object(trace, combiner, value),
                        ),
                    ),
                    true,
                );

                return ts.factory.createVariableDeclaration(
                    "functors",
                    undefined,
                    undefined,
                    functors,
                );
            })();
            const output = visit(
                trace,
                combiner,
                ValueFactory.INPUT(),
                meta,
                false,
            );

            return ts.factory.createArrowFunction(
                undefined,
                undefined,
                PARAMETERS(trace ? true : null)(ValueFactory.INPUT()),
                undefined,
                undefined,
                variable === null
                    ? output
                    : ts.factory.createBlock(
                          [
                              ts.factory.createVariableStatement(
                                  undefined,
                                  ts.factory.createVariableDeclarationList(
                                      [variable],
                                      ts.NodeFlags.Const,
                                  ),
                              ),
                              ts.factory.createReturnStatement(output),
                          ],
                          true,
                      ),
            );
        };
    }
}

const create_add =
    (binaries: ts.Expression[]) =>
    (defaultInput: ts.Expression) =>
    (
        exact: boolean,
        left: ts.Expression,
        right: ts.Expression = defaultInput,
    ) => {
        const factory = exact
            ? ts.factory.createStrictEquality
            : ts.factory.createStrictInequality;
        binaries.push(factory(left, right));
    };

const PARAMETERS = (initialize: null | boolean) => {
    const tail =
        initialize === null
            ? []
            : [
                  ts.factory.createParameterDeclaration(
                      undefined,
                      undefined,
                      undefined,
                      "path",
                      undefined,
                      undefined,
                      initialize
                          ? ts.factory.createStringLiteral("$input")
                          : undefined,
                  ),
              ];
    if (initialize === false)
        tail.push(
            ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                "exceptionable",
            ),
        );

    return (input: ts.Identifier) => [
        ts.factory.createParameterDeclaration(
            undefined,
            undefined,
            undefined,
            input,
        ),
        ...tail,
    ];
};

const ARGUMENTS = (
    globalTrace: boolean,
    trace: boolean,
    fromObject: boolean,
    postfix: string,
) => {
    const tail: ts.Expression[] =
        globalTrace === false
            ? []
            : [
                  ts.factory.createIdentifier(`path + ${postfix || ""}`),
                  fromObject
                      ? ts.factory.createIdentifier(`${trace} && exceptionable`)
                      : ts.factory.createIdentifier(`${trace}`),
              ];
    return (input: ts.Expression) => [input, ...tail];
};

const INDEX_SYMBOL = '[" + index + "]"';
