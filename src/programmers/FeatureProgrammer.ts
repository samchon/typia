import ts from "typescript";
import { IExpressionEntry } from "../structures/IExpressionEntry";
import { IProject } from "../structures/IProject";
import { Escaper } from "../utils/Escaper";
import { MetadataCollection } from "../factories/MetadataCollection";
import { ValueFactory } from "../factories/ValueFactory";
import { Metadata } from "../metadata/Metadata";
import { MetadataObject } from "../metadata/MetadataObject";
import { IdentifierFactory } from "../factories/IdentifierFactory";
import { IsProgrammer } from "./IsProgrammer";
import { ExpressionFactory } from "../factories/ExpressionFactory";
import { UnionPredicator } from "./helpers/UnionPredicator";

export namespace FeatureProgrammer {
    export interface IConfig {
        initializer(
            project: IProject,
            type: ts.Type,
        ): [MetadataCollection, Metadata];
        trace: boolean;
        functors: {
            name: string;
        };
        joiner(
            entries: IExpressionEntry[],
            parent: MetadataObject,
        ): ts.ConciseBody;
        decoder(
            input: ts.Expression,
            meta: Metadata,
            explore: IExplore,
        ): ts.Expression;
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
        addition?: (collection: MetadataCollection) => ts.Statement[],
    ) {
        const createFunctors = generate_functors(config);
        const createParameters = PARAMETERS(config.trace ? true : null);

        return function (project: IProject, type: ts.Type) {
            const [collection, meta] = config.initializer(project, type);

            // ITERATE OVER ALL METADATA
            const output: ts.Expression = config.decoder(
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
            const added: ts.Statement[] = addition ? addition(collection) : [];

            return ts.factory.createArrowFunction(
                undefined,
                undefined,
                createParameters(ValueFactory.INPUT()),
                undefined,
                undefined,
                ts.factory.createBlock(
                    [
                        ...added,
                        ...(functors !== null
                            ? [
                                  ts.factory.createVariableStatement(
                                      undefined,
                                      ts.factory.createVariableDeclarationList(
                                          [functors],
                                          ts.NodeFlags.Const,
                                      ),
                                  ),
                              ]
                            : []),
                        ts.factory.createReturnStatement(output),
                    ],
                    true,
                ),
            );
        };
    }

    export function generate_functors(config: IConfig) {
        const createObject = generate_object(config);

        return function (
            collection: MetadataCollection,
        ): ts.VariableDeclaration | null {
            // GET OBJECTS
            const storage: Map<string, MetadataObject> = collection.storage();
            if (storage.size === 0) return null;

            // ASSIGN FUNCTIONS
            return ts.factory.createVariableDeclaration(
                config.functors.name,
                undefined,
                undefined,
                ts.factory.createArrayLiteralExpression(
                    [...storage.values()].map((value) => createObject(value)),
                    true,
                ),
            );
        };
    }

    function generate_object(config: IConfig) {
        const createParameters = PARAMETERS(config.trace ? false : null);

        return function (obj: MetadataObject) {
            const entries: IExpressionEntry[] = [];
            for (const prop of obj.properties) {
                const access = Escaper.variable(prop.name)
                    ? ts.factory.createPropertyAccessExpression(
                          ValueFactory.INPUT(),
                          ts.factory.createIdentifier(prop.name),
                      )
                    : ts.factory.createElementAccessExpression(
                          ValueFactory.INPUT(),
                          ts.factory.createStringLiteral(prop.name),
                      );

                entries.push({
                    input: access,
                    key: prop.name,
                    meta: prop.metadata,
                    expression: config.decoder(access, prop.metadata, {
                        tracable: config.trace,
                        from: "object",
                        postfix: IdentifierFactory.postfix(prop.name),
                    }),
                });
            }

            return ts.factory.createArrowFunction(
                undefined,
                undefined,
                createParameters(ValueFactory.INPUT()),
                undefined,
                undefined,
                config.joiner(entries, obj),
            );
        };
    }

    /* -----------------------------------------------------------
        DECODERS
    ----------------------------------------------------------- */
    export function decode_array(
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

        return (input: ts.Expression, meta: Metadata, explore: IExplore) => {
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
                config.decoder(ValueFactory.INPUT("elem"), meta, {
                    tracable: explore.tracable,
                    from: "array",
                    postfix: explore.postfix.length
                        ? explore.postfix.slice(0, -1) + INDEX_SYMBOL
                        : '"' + INDEX_SYMBOL,
                }),
            );
            return combiner(input, arrow);
        };
    }

    export function decode_object(config: IConfig) {
        return function (
            input: ts.Expression,
            obj: MetadataObject,
            explore: IExplore,
        ): ts.Expression {
            const createArguments = ARGUMENTS(config.trace, explore);
            return ts.factory.createCallExpression(
                ts.factory.createElementAccessExpression(
                    ts.factory.createIdentifier(config.functors.name),
                    obj.index,
                ),
                undefined,
                createArguments(input),
            );
        };
    }

    /* -----------------------------------------------------------
        EXPLORERS
    ----------------------------------------------------------- */
    export function explore_objects(
        config: IConfig,
        combiner: (
            explorer: IExplore,
        ) => (
            type: "and" | "or",
        ) => (
            input: ts.Expression,
            expressions: ts.Expression[],
        ) => ts.Expression,
        objector: (
            input: ts.Expression,
            obj: MetadataObject,
            explore: IExplore,
        ) => ts.Expression = decode_object(config),
        failure: (input: ts.Expression) => ts.Statement,
    ) {
        return function (
            input: ts.Expression,
            targets: MetadataObject[],
            explore: IExplore,
        ): ts.Expression {
            // BREAKER
            if (targets.length === 1)
                return objector(input, targets[0]!, explore);

            // POSSIBLE TO SPECIALIZE?
            const specList: UnionPredicator.ISpecialized[] =
                UnionPredicator.object(targets);
            if (specList.length === 0)
                return combiner({ ...explore, tracable: false })("or")(
                    input,
                    targets.map((obj) => objector(input, obj, explore)),
                );
            const remained: MetadataObject[] = targets.filter(
                (t) => specList.find((s) => s.object === t) === undefined,
            );

            // DO SPECIALIZE
            const statements: ts.IfStatement[] = specList.map((spec) => {
                const accessor: ts.Expression = IdentifierFactory.join(
                    input,
                    spec.property.name,
                );
                const pred: ts.Expression = spec.neighbour
                    ? IsProgrammer.express()(accessor, spec.property.metadata, {
                          tracable: true,
                          from: "object",
                          postfix: IdentifierFactory.postfix(
                              spec.property.name,
                          ),
                      })
                    : ExpressionFactory.isRequired(accessor);
                return ts.factory.createIfStatement(
                    pred,
                    ts.factory.createReturnStatement(
                        objector(input, spec.object, explore),
                    ),
                );
            });

            // RETURNS WITH CONDITIONS
            return ts.factory.createCallExpression(
                ts.factory.createArrowFunction(
                    undefined,
                    undefined,
                    [],
                    undefined,
                    undefined,
                    ts.factory.createBlock(
                        [
                            ...statements,
                            remained.length
                                ? ts.factory.createReturnStatement(
                                      explore_objects(
                                          config,
                                          combiner,
                                          objector,
                                          failure,
                                      )(input, remained, explore),
                                  )
                                : failure(input),
                        ],
                        true,
                    ),
                ),
                undefined,
                undefined,
            );
        };
    }
}

const INDEX_SYMBOL = '[" + index + "]"';
const ARGUMENTS = (trace: boolean, explore: FeatureProgrammer.IExplore) => {
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
