import ts from "typescript";

import { IdentifierFactory } from "../factories/IdentifierFactory";
import { MetadataCollection } from "../factories/MetadataCollection";
import { StatementFactory } from "../factories/StatementFactory";
import { ValueFactory } from "../factories/ValueFactory";

import { IMetadataTag } from "../metadata/IMetadataTag";
import { Metadata } from "../metadata/Metadata";
import { MetadataObject } from "../metadata/MetadataObject";

import { IProject } from "../transformers/IProject";

import { CheckerProgrammer } from "./CheckerProgrammer";
import { FunctionImporter } from "./helpers/FunctionImporeter";
import { IExpressionEntry } from "./helpers/IExpressionEntry";
import { UnionExplorer } from "./helpers/UnionExplorer";
import { feature_object_entries } from "./internal/feature_object_entries";

export namespace FeatureProgrammer {
    /* -----------------------------------------------------------
        PARAMETERS
    ----------------------------------------------------------- */
    export interface IConfig {
        /**
         * Prefix name of functions for specific object types.
         */
        functors: string;

        /**
         * Prefix name of functions for union object types.
         */
        unioners: string;

        /**
         * Whether to archive access path or not.
         */
        path: boolean;

        /**
         * Whether to trace exception or not.
         */
        trace: boolean;

        /**
         * Initializer of metadata.
         */
        initializer(
            project: IProject,
            type: ts.Type,
        ): [MetadataCollection, Metadata];

        /**
         * Decoder, station of every types.
         */
        decoder: Decoder<Metadata>;

        /**
         * Object configurator.
         */
        objector: IConfig.IObjector;

        /**
         * Generator of functions for object types.
         */
        generator?: Partial<IConfig.IGenerator>;
    }
    export namespace IConfig {
        export interface IObjector {
            /**
             * Type checker when union object type comes.
             */
            checker: Decoder<Metadata>;

            /**
             * Decoder, function call expression generator of specific typed objects.
             */
            decoder: Decoder<MetadataObject>;

            /**
             * Joiner of expressions from properties.
             */
            joiner(
                input: ts.Expression,
                entries: IExpressionEntry[],
                parent: MetadataObject,
            ): ts.ConciseBody;

            /**
             * Union type specificator.
             *
             * Expression of an algorithm specifying object type and calling
             * the `decoder` function of the specified object type.
             */
            unionizer: Decoder<MetadataObject[]>;

            /**
             * Handler of union type specification failure.
             *
             * @param value Expression of input parameter
             * @param expected Expected type name
             * @param explore Exploration info
             * @returns Statement of failure
             */
            failure(
                value: ts.Expression,
                expected: string,
                explore?: IExplore,
            ): ts.Statement;

            /**
             * Transformer of type checking expression by discrimination.
             *
             * When an object type has been specified by a discrimination without full
             * iteration, the `unionizer` will decode the object instance after
             * the last type checking.
             *
             * In such circumtance, you can transform the last type checking function.
             *
             * @param exp Current expression about type checking
             * @returns Transformed expression
             * @deprecated
             */
            is?(exp: ts.Expression): ts.Expression;

            /**
             * Transformer of non-undefined type checking by discrimination.
             *
             * When specifying an union type of objects, `typia` tries to find
             * descrimination way just by checking only one property type.
             * If succeeded to find the discrimination way, `typia` will check the target
             * property type and in the checking, non-undefined type checking would be
             * done.
             *
             * In such process, you can transform the non-undefined type checking.
             *
             * @param exp
             * @returns Transformed expression
             * @deprecated
             */
            required?(exp: ts.Expression): ts.Expression;

            /**
             * Conditon wrapper when unable to specify any object type.
             *
             * When failed to specify an object type through discrimination, full
             * iteration type checking would be happend. In such circumstance, you
             * can wrap the condition with additional function.
             *
             * @param condition Current condition
             * @returns A function wrapped current condition
             */
            full?: (
                condition: ts.Expression,
            ) => (
                input: ts.Expression,
                expected: string,
                explore: IExplore,
            ) => ts.Expression;
        }
        export interface IGenerator {
            /**
             *
             * @param col
             */
            functors(col: MetadataCollection): ts.VariableStatement[];

            /**
             *
             * @param col
             */
            unioners(col: MetadataCollection): ts.VariableStatement[];
        }
    }

    export interface IExplore {
        tracable: boolean;
        source: "top" | "object";
        from: "top" | "array" | "object";
        postfix: string;
        start?: number;
    }

    export interface Decoder<T> {
        (
            input: ts.Expression,
            target: T,
            explore: IExplore,
            tags: IMetadataTag[],
        ): ts.Expression;
    }

    /* -----------------------------------------------------------
        GENERATORS
    ----------------------------------------------------------- */
    /**
     * Generates a decoder function for a specific type.
     *
     * @param project Project configuration
     * @param config Detailed configuration for programming
     * @param importer Function importer
     * @param addition Generator of additinal statements in the top of function
     * @returns Currying function generating type decoder function
     */
    export const generate =
        (
            project: IProject,
            config: IConfig,
            importer: FunctionImporter,
            addition: (
                collection: MetadataCollection,
            ) => ts.Statement[] | undefined,
        ) =>
        (type: ts.Type) => {
            const [collection, meta] = config.initializer(project, type);

            // ITERATE OVER ALL METADATA
            const output: ts.Expression = config.decoder(
                ValueFactory.INPUT(),
                meta,
                {
                    tracable: config.path || config.trace,
                    source: "top",
                    from: "top",
                    postfix: '""',
                },
                [],
            );

            // RETURNS THE OPTIMAL ARROW FUNCTION
            const functors: ts.VariableStatement[] =
                config.generator?.functors !== undefined
                    ? config.generator.functors(collection)
                    : generate_functors(config, importer)(collection);
            const unioners: ts.VariableStatement[] =
                config.generator?.unioners !== undefined
                    ? config.generator.unioners(collection)
                    : generate_unioners(config)(collection);
            const added: ts.Statement[] | undefined = addition(collection);

            return ts.factory.createArrowFunction(
                undefined,
                undefined,
                PARAMETERS(config)(ValueFactory.INPUT()),
                undefined,
                undefined,
                ts.factory.createBlock(
                    [
                        ...(added || []),
                        ...functors,
                        ...unioners,
                        ts.factory.createReturnStatement(output),
                    ],
                    true,
                ),
            );
        };

    export const generate_functors =
        (config: IConfig, importer: FunctionImporter) =>
        (collection: MetadataCollection) =>
            collection
                .objects()
                .map((obj, i) =>
                    StatementFactory.constant(
                        `${config.functors}${i}`,
                        generate_object(config, importer)(obj),
                    ),
                );

    export const generate_unioners =
        (config: IConfig) => (collection: MetadataCollection) =>
            collection
                .unions()
                .map((union, i) =>
                    StatementFactory.constant(
                        `${config.unioners}${i}`,
                        generate_union(config)(union),
                    ),
                );

    function generate_object(config: IConfig, importer: FunctionImporter) {
        if (config.path === true) importer.use("join");
        return (obj: MetadataObject) =>
            ts.factory.createArrowFunction(
                undefined,
                undefined,
                PARAMETERS(config)(ValueFactory.INPUT()),
                undefined,
                undefined,
                config.objector.joiner(
                    ts.factory.createIdentifier("input"),
                    feature_object_entries(config)(obj)(
                        ts.factory.createIdentifier("input"),
                    ),
                    obj,
                ),
            );
    }

    function generate_union(config: IConfig) {
        const explorer = UnionExplorer.object(config);
        const input = ValueFactory.INPUT();

        return (meta: MetadataObject[]) =>
            ts.factory.createArrowFunction(
                undefined,
                undefined,
                PARAMETERS(config)(ValueFactory.INPUT()),
                undefined,
                undefined,
                explorer(
                    input,
                    meta,
                    {
                        tracable: config.path || config.trace,
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
        config: Pick<IConfig, "trace" | "path" | "decoder">,
        importer: FunctionImporter,
        combiner: (
            input: ts.Expression,
            arrow: ts.ArrowFunction,
            tags: IMetadataTag[],
        ) => ts.Expression,
    ) {
        const rand: string = importer.increment().toString();
        const tail =
            config.path || config.trace
                ? [IdentifierFactory.parameter("index" + rand)]
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
                [IdentifierFactory.parameter("elem"), ...tail],
                undefined,
                undefined,
                config.decoder(
                    ValueFactory.INPUT("elem"),
                    meta,
                    {
                        tracable: explore.tracable,
                        source: explore.source,
                        from: "array",
                        postfix: INDEX_SYMBOL(explore.start ?? null)(
                            explore.postfix,
                        )(rand),
                    },
                    tags,
                ),
            );
            return combiner(input, arrow, tags);
        };
    }

    export const decode_object =
        (config: Pick<IConfig, "trace" | "path" | "functors">) =>
        (input: ts.Expression, obj: MetadataObject, explore: IExplore) =>
            ts.factory.createCallExpression(
                ts.factory.createIdentifier(`${config.functors}${obj.index}`),
                undefined,
                get_object_arguments(config)(explore)(input),
            );

    export const get_object_arguments =
        (config: Pick<IConfig, "path" | "trace">) =>
        (explore: FeatureProgrammer.IExplore) => {
            const tail: ts.Expression[] =
                config.path === false && config.trace === false
                    ? []
                    : config.path === true && config.trace === true
                    ? [
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
                      ]
                    : config.path === true
                    ? [
                          ts.factory.createIdentifier(
                              explore.postfix
                                  ? `path + ${explore.postfix}`
                                  : "path",
                          ),
                      ]
                    : [
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

const INDEX_SYMBOL =
    (start: number | null) => (prev: string) => (rand: string) => {
        const tail: string =
            start !== null
                ? `"[" + (${start} + index${rand}) + "]"`
                : `"[" + index${rand} + "]"`;
        if (prev === "") return tail;
        else if (prev[prev.length - 1] === `"`)
            return prev.substring(0, prev.length - 1) + tail.substring(1);
        return prev + ` + ${tail}`;
    };
const PARAMETERS = (
    props: Pick<CheckerProgrammer.IConfig, "path" | "trace">,
) => {
    const tail: ts.ParameterDeclaration[] = [];
    if (props.path) tail.push(IdentifierFactory.parameter("path"));
    if (props.trace) tail.push(IdentifierFactory.parameter("exceptionable"));

    return (input: ts.Identifier) => [
        IdentifierFactory.parameter(input),
        ...tail,
    ];
};
