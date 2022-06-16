import ts from "typescript";
import { IExpressionEntry } from "../../structures/IExpressionEntry";
import { IMetadata } from "../../structures/IMetadata";
import { Escaper } from "../../utils/Escaper";
import { MetadataCollection } from "../MetadataCollection";
import { IdentifierFactory } from "../programmatics/IdentifierFactory";
import { ValueFactory } from "../ValueFactory";

export namespace FeatureFactory {
    export interface IConfig {
        trace: boolean;
        functors: {
            name: string;
            filter?: (object: IMetadata.IObject) => boolean;
        };
        joiner: (entries: IExpressionEntry[]) => ts.Expression;
        visitor: (
            input: ts.Expression,
            meta: IMetadata,
            explore: IExplore,
        ) => ts.Expression;
    }

    export interface IExplore {
        tracable: boolean;
        from: "top" | "array" | "object";
        postfix: string;
    }

    /* -----------------------------------------------------------
        GENERATORS
    ----------------------------------------------------------- */
    export function generate(
        config: IConfig,
        addition?: (
            collection: MetadataCollection,
        ) => ts.VariableDeclaration | null,
    ) {
        const createFunctors = generate_functors(config);
        const createParameters = PARAMETERS(config.trace ? true : null);

        return function (collection: MetadataCollection, meta: IMetadata) {
            // ITERATE OVER ALL METADATA
            const output: ts.Expression = config.visitor(
                ValueFactory.INPUT(),
                meta,
                {
                    tracable: config.trace,
                    from: "top",
                    postfix: '""',
                },
            );

            // CREATE FUNCTIONS
            const functors: ts.VariableDeclaration | null =
                createFunctors(collection);

            // RETURNS THE OPTIMAL ARROW FUNCTION
            const added = addition ? addition(collection) : null;
            return ts.factory.createArrowFunction(
                undefined,
                undefined,
                createParameters(ValueFactory.INPUT()),
                undefined,
                undefined,
                functors === null
                    ? output
                    : ts.factory.createBlock(
                          [
                              ...(added !== null
                                  ? [
                                        ts.factory.createVariableStatement(
                                            undefined,
                                            ts.factory.createVariableDeclarationList(
                                                [added],
                                                ts.NodeFlags.Const,
                                            ),
                                        ),
                                    ]
                                  : []),
                              ts.factory.createVariableStatement(
                                  undefined,
                                  ts.factory.createVariableDeclarationList(
                                      [functors],
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

    export function generate_functors(config: IConfig) {
        const createObject = generate_object(config);
        const iterator = config.functors.filter
            ? (storage: IMetadata.IStorage) => {
                  for (const [_key, value] of Object.entries(storage))
                      if (config.functors.filter!(value) === true)
                          createObject(value);
              }
            : () => {};
        const filter = config.functors.filter
            ? (storage: IMetadata.IStorage) =>
                  Object.entries(storage).filter(([_key, value]) =>
                      config.functors.filter!(value),
                  )
            : (storage: IMetadata.IStorage) => Object.entries(storage);

        return function (
            collection: MetadataCollection,
        ): ts.VariableDeclaration | null {
            // GET OBJECTS
            const storage = collection.storage();
            if (Object.entries(storage).length === 0) return null;

            // FOR 1ST FILTERING
            iterator(storage);

            // ASSIGN FUNCTIONS
            return ts.factory.createVariableDeclaration(
                config.functors.name,
                undefined,
                undefined,
                ts.factory.createObjectLiteralExpression(
                    filter(storage).map(([key, value]) =>
                        ts.factory.createPropertyAssignment(
                            IdentifierFactory.generate(key),
                            createObject(value),
                        ),
                    ),
                    true,
                ),
            );
        };
    }

    function generate_object(config: IConfig) {
        const createParameters = PARAMETERS(config.trace ? false : null);

        return function (obj: IMetadata.IObject) {
            const entries: IExpressionEntry[] = [];
            for (const [key, value] of Object.entries(obj.properties)) {
                const access = Escaper.variable(key)
                    ? ts.factory.createPropertyAccessExpression(
                          ValueFactory.INPUT(),
                          ts.factory.createIdentifier(key),
                      )
                    : ts.factory.createElementAccessExpression(
                          ValueFactory.INPUT(),
                          ts.factory.createStringLiteral(key),
                      );

                const postfix: string = Escaper.variable(key)
                    ? `".${key}"`
                    : `"[${key.split('"').join('\\"')}]"`;
                entries.push({
                    input: access,
                    key,
                    meta: value,
                    expression: config.visitor(access, value, {
                        tracable: config.trace,
                        from: "object",
                        postfix,
                    }),
                });
            }

            const output: ts.Expression = config.joiner(entries);
            return ts.factory.createArrowFunction(
                undefined,
                undefined,
                createParameters(ValueFactory.INPUT()),
                undefined,
                undefined,
                output,
            );
        };
    }

    /* -----------------------------------------------------------
        VISITORS
    ----------------------------------------------------------- */
    export function visit_array(
        config: IConfig,
        combiner: (
            input: ts.Expression,
            arrow: ts.ArrowFunction,
        ) => ts.Expression,
    ) {
        const tail = config.trace
            ? [
                  ts.factory.createParameterDeclaration(
                      undefined,
                      undefined,
                      undefined,
                      ValueFactory.INPUT("index"),
                  ),
              ]
            : [];

        return (input: ts.Expression, meta: IMetadata, explore: IExplore) => {
            const arrow: ts.ArrowFunction = ts.factory.createArrowFunction(
                undefined,
                undefined,
                [
                    ts.factory.createParameterDeclaration(
                        undefined,
                        undefined,
                        undefined,
                        ValueFactory.INPUT("elem"),
                    ),
                    ...tail,
                ],
                undefined,
                undefined,
                config.visitor(ValueFactory.INPUT("elem"), meta, {
                    tracable: explore.tracable,
                    from: "array",
                    postfix: explore.postfix.length
                        ? explore.postfix.substr(
                              0,
                              explore.postfix.length - 1,
                          ) + INDEX_SYMBOL
                        : '"' + INDEX_SYMBOL,
                }),
            );
            return combiner(input, arrow);
        };
    }

    export function visit_object(config: IConfig) {
        return function (
            input: ts.Expression,
            obj: IMetadata.IObject,
            explore: IExplore,
        ): ts.Expression {
            const createArguments = ARGUMENTS(config.trace, explore);
            return ts.factory.createCallExpression(
                IdentifierFactory.join(
                    ts.factory.createIdentifier(config.functors.name),
                    obj.$id,
                ),
                undefined,
                createArguments(input),
            );
        };
    }
}

const INDEX_SYMBOL = '[" + index + "]"';
const ARGUMENTS = (trace: boolean, explore: FeatureFactory.IExplore) => {
    const tail: ts.Expression[] =
        trace === false
            ? []
            : [
                  ts.factory.createIdentifier(`path + ${explore.postfix}`),
                  explore.from === "object"
                      ? ts.factory.createIdentifier(
                            `${explore.tracable} && exceptionable`,
                        )
                      : ts.factory.createIdentifier(`${explore.tracable}`),
              ];
    return (input: ts.Expression) => [input, ...tail];
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
