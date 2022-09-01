import ts from "typescript";

import { IdentifierFactory } from "../factories/IdentifierFactory";
import { MetadataCollection } from "../factories/MetadataCollection";
import { ValueFactory } from "../factories/ValueFactory";

import { IMetadataTag } from "../metadata/IMetadataTag";
import { Metadata } from "../metadata/Metadata";
import { MetadataObject } from "../metadata/MetadataObject";

import { IProject } from "../transformers/IProject";

import { Escaper } from "../utils/Escaper";

import { IExpressionEntry } from "./helpers/IExpressionEntry";
import { UnionExplorer } from "./helpers/UnionExplorer";

export namespace FeatureProgrammer {
    /* -----------------------------------------------------------
        PARAMETERS
    ----------------------------------------------------------- */
    export interface IConfig {
        functors: string;
        unioners: string;
        trace: boolean;
        initializer: Initializer;
        decoder: Decoder<Metadata>;
        objector: IConfig.IObjector;
    }
    export namespace IConfig {
        export interface IObjector {
            checker: Decoder<Metadata>;
            decoder: Decoder<MetadataObject>;
            joiner: ObjectJoiner;
            unionizer: Decoder<MetadataObject[]>;
            failure: (
                expression: ts.Expression,
                targets: MetadataObject[],
            ) => ts.Statement;
        }
    }
    export interface IExplore {
        tracable: boolean;
        source: "top" | "object";
        from: "top" | "array" | "object";
        postfix: string;
    }

    export interface Initializer {
        (project: IProject, type: ts.Type): [MetadataCollection, Metadata];
    }
    export interface Decoder<T> {
        (
            input: ts.Expression,
            target: T,
            explore: IExplore,
            tags: IMetadataTag[],
        ): ts.Expression;
    }
    export interface ObjectJoiner {
        (entries: IExpressionEntry[], parent: MetadataObject): ts.ConciseBody;
    }

    /* -----------------------------------------------------------
        GENERATORS
    ----------------------------------------------------------- */
    export const generate =
        (
            project: IProject,
            config: IConfig,
            addition?: (collection: MetadataCollection) => ts.Statement[],
        ) =>
        (type: ts.Type) => {
            const [collection, meta] = config.initializer(project, type);

            // ITERATE OVER ALL METADATA
            const output: ts.Expression = config.decoder(
                ValueFactory.INPUT(),
                meta,
                {
                    tracable: config.trace,
                    source: "top",
                    from: "top",
                    postfix: '""',
                },
                [],
            );

            // CREATE FUNCTIONS
            const functors: ts.VariableDeclaration | null =
                generate_functors(config)(collection);
            const unioners: ts.VariableDeclaration | null =
                generate_unioners(config)(collection);

            // RETURNS THE OPTIMAL ARROW FUNCTION
            const added: ts.Statement[] = addition ? addition(collection) : [];

            return ts.factory.createArrowFunction(
                undefined,
                undefined,
                PARAMETERS(config.trace ? true : null)(ValueFactory.INPUT()),
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
                        ...(unioners !== null
                            ? [
                                  ts.factory.createVariableStatement(
                                      undefined,
                                      ts.factory.createVariableDeclarationList(
                                          [unioners],
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

    export function generate_functors(config: IConfig) {
        return function (
            collection: MetadataCollection,
        ): ts.VariableDeclaration | null {
            // GET OBJECTS
            const objects: MetadataObject[] = collection.objects();
            if (objects.length === 0) return null;

            // ASSIGN FUNCTIONS
            return ts.factory.createVariableDeclaration(
                config.functors,
                undefined,
                undefined,
                ts.factory.createArrayLiteralExpression(
                    objects.map((obj) => generate_object(config)(obj)),
                    true,
                ),
            );
        };
    }

    export function generate_unioners(config: IConfig) {
        return function (collection: MetadataCollection) {
            const unions: MetadataObject[][] = collection.unions();
            if (unions.length === 0) return null;

            return ts.factory.createVariableDeclaration(
                config.unioners,
                undefined,
                undefined,
                ts.factory.createArrayLiteralExpression(
                    unions.map((meta) => generate_union(config)(meta)),
                    true,
                ),
            );
        };
    }

    function generate_object(config: IConfig) {
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
                    expression: config.decoder(
                        access,
                        prop.metadata,
                        {
                            tracable: config.trace,
                            source: "object",
                            from: "object",
                            postfix: IdentifierFactory.postfix(prop.name),
                        },
                        prop.tags,
                    ),
                });
            }

            return ts.factory.createArrowFunction(
                undefined,
                undefined,
                PARAMETERS(config.trace ? false : null)(ValueFactory.INPUT()),
                undefined,
                undefined,
                config.objector.joiner(entries, obj),
            );
        };
    }

    function generate_union(config: IConfig) {
        const explorer = UnionExplorer.object(
            config,
            config.objector.checker,
            config.objector.decoder,
            config.objector.unionizer,
            config.objector.failure,
        );
        const input = ValueFactory.INPUT();

        return (meta: MetadataObject[]) =>
            ts.factory.createArrowFunction(
                undefined,
                undefined,
                PARAMETERS(config.trace ? false : null)(ValueFactory.INPUT()),
                undefined,
                undefined,
                explorer(
                    input,
                    meta,
                    {
                        tracable: config.trace,
                        source: "object",
                        from: "object",
                        postfix: "",
                    },
                    [],
                ),
            );
    }

    /* -----------------------------------------------------------
        DECODERS
    ----------------------------------------------------------- */
    export function decode_array(
        config: Pick<IConfig, "trace" | "decoder">,
        combiner: (
            input: ts.Expression,
            arrow: ts.ArrowFunction,
        ) => ts.Expression,
    ) {
        const rand: string = Math.random().toString().slice(2);
        const tail = config.trace
            ? [
                  ts.factory.createParameterDeclaration(
                      undefined,
                      undefined,
                      undefined,
                      ValueFactory.INPUT("index" + rand),
                  ),
              ]
            : [];

        return (
            input: ts.Expression,
            meta: Metadata,
            explore: IExplore,
            tags: IMetadataTag[],
        ) => {
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
                config.decoder(
                    ValueFactory.INPUT("elem"),
                    meta,
                    {
                        tracable: explore.tracable,
                        source: explore.source,
                        from: "array",
                        postfix: explore.postfix.length
                            ? explore.postfix.slice(0, -1) + INDEX_SYMBOL(rand)
                            : '"' + INDEX_SYMBOL(rand),
                    },
                    tags,
                ),
            );
            return combiner(input, arrow);
        };
    }

    export const decode_object =
        (config: Pick<IConfig, "trace" | "functors">) =>
        (input: ts.Expression, obj: MetadataObject, explore: IExplore) =>
            ts.factory.createCallExpression(
                ts.factory.createElementAccessExpression(
                    ts.factory.createIdentifier(config.functors),
                    obj.index,
                ),
                undefined,
                get_object_arguments(config.trace, explore)(input),
            );

    export const get_object_arguments = (
        trace: boolean,
        explore: FeatureProgrammer.IExplore,
    ) => {
        const tail: ts.Expression[] =
            trace === false
                ? []
                : [
                      ts.factory.createIdentifier(
                          explore.postfix
                              ? `path + ${explore.postfix}`
                              : "path",
                      ),
                      explore.source === "object"
                          ? ts.factory.createIdentifier(
                                `${explore.tracable} && exceptionable`,
                            )
                          : explore.tracable
                          ? ts.factory.createTrue()
                          : ts.factory.createFalse(),
                  ];
        return (input: ts.Expression) => [input, ...tail];
    };
}

const INDEX_SYMBOL = (rand: string) => `[" + index${rand} + "]"`;
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
