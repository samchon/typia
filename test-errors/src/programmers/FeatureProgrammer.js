"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureProgrammer = void 0;
const typescript_1 = __importDefault(require("typescript"));
const IdentifierFactory_1 = require("../factories/IdentifierFactory");
const StatementFactory_1 = require("../factories/StatementFactory");
const TypeFactory_1 = require("../factories/TypeFactory");
const ValueFactory_1 = require("../factories/ValueFactory");
const UnionExplorer_1 = require("./helpers/UnionExplorer");
const feature_object_entries_1 = require("./internal/feature_object_entries");
var FeatureProgrammer;
(function (FeatureProgrammer) {
    /* -----------------------------------------------------------
        GENERATORS
    ----------------------------------------------------------- */
    FeatureProgrammer.write = (project) => (config) => (importer) => (type, name) => {
        const [collection, meta] = config.initializer(project)(importer)(type);
        // ITERATE OVER ALL METADATA
        const output = config.decoder()(ValueFactory_1.ValueFactory.INPUT(), meta, {
            tracable: config.path || config.trace,
            source: "top",
            from: "top",
            postfix: '""',
        });
        // RETURNS THE OPTIMAL ARROW FUNCTION
        const functions = {
            objects: (config.generator.objects?.() ??
                FeatureProgrammer.write_object_functions(config)(importer))(collection),
            unions: (config.generator.unions?.() ?? FeatureProgrammer.write_union_functions(config))(collection),
            arrays: config.generator.arrays()(collection),
            tuples: config.generator.tuples()(collection),
        };
        const added = (config.addition ?? (() => []))(collection);
        return typescript_1.default.factory.createArrowFunction(undefined, undefined, FeatureProgrammer.parameterDeclarations(config)(config.types.input(type, name))(ValueFactory_1.ValueFactory.INPUT()), config.types.output(type, name), undefined, typescript_1.default.factory.createBlock([
            ...added,
            ...functions.objects.filter((_, i) => importer.hasLocal(`${config.prefix}o${i}`)),
            ...functions.unions.filter((_, i) => importer.hasLocal(`${config.prefix}u${i}`)),
            ...functions.arrays.filter((_, i) => importer.hasLocal(`${config.prefix}a${i}`)),
            ...functions.tuples.filter((_, i) => importer.hasLocal(`${config.prefix}t${i}`)),
            ...(typescript_1.default.isBlock(output)
                ? output.statements
                : [typescript_1.default.factory.createReturnStatement(output)]),
        ], true));
    };
    FeatureProgrammer.write_object_functions = (config) => (importer) => (collection) => collection
        .objects()
        .map((obj) => StatementFactory_1.StatementFactory.constant(`${config.prefix}o${obj.index}`, typescript_1.default.factory.createArrowFunction(undefined, undefined, FeatureProgrammer.parameterDeclarations(config)(TypeFactory_1.TypeFactory.keyword("any"))(ValueFactory_1.ValueFactory.INPUT()), config.objector.type ?? TypeFactory_1.TypeFactory.keyword("any"), undefined, config.objector.joiner(typescript_1.default.factory.createIdentifier("input"), (0, feature_object_entries_1.feature_object_entries)(config)(importer)(obj)(typescript_1.default.factory.createIdentifier("input")), obj))));
    FeatureProgrammer.write_union_functions = (config) => (collection) => collection
        .unions()
        .map((union, i) => StatementFactory_1.StatementFactory.constant(`${config.prefix}u${i}`, write_union(config)(union)));
    const write_union = (config) => {
        const explorer = UnionExplorer_1.UnionExplorer.object(config);
        const input = ValueFactory_1.ValueFactory.INPUT();
        return (meta) => typescript_1.default.factory.createArrowFunction(undefined, undefined, FeatureProgrammer.parameterDeclarations(config)(TypeFactory_1.TypeFactory.keyword("any"))(ValueFactory_1.ValueFactory.INPUT()), TypeFactory_1.TypeFactory.keyword("any"), undefined, explorer(input, meta, {
            tracable: config.path || config.trace,
            source: "function",
            from: "object",
            postfix: "",
        }));
    };
    /* -----------------------------------------------------------
        DECODERS
    ----------------------------------------------------------- */
    FeatureProgrammer.decode_array = (config) => (importer) => (combiner) => {
        const rand = importer.increment().toString();
        const tail = config.path || config.trace
            ? [
                IdentifierFactory_1.IdentifierFactory.parameter("_index" + rand, TypeFactory_1.TypeFactory.keyword("number")),
            ]
            : [];
        return (input, array, explore) => {
            const arrow = typescript_1.default.factory.createArrowFunction(undefined, undefined, [
                IdentifierFactory_1.IdentifierFactory.parameter("elem", TypeFactory_1.TypeFactory.keyword("any")),
                ...tail,
            ], undefined, undefined, config.decoder()(ValueFactory_1.ValueFactory.INPUT("elem"), array.type.value, {
                tracable: explore.tracable,
                source: explore.source,
                from: "array",
                postfix: FeatureProgrammer.index(explore.start ?? null)(explore.postfix)(rand),
            }));
            return combiner(input, arrow);
        };
    };
    FeatureProgrammer.decode_object = (config) => (importer) => (input, obj, explore) => typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier(importer.useLocal(`${config.prefix}o${obj.index}`)), undefined, FeatureProgrammer.argumentsArray(config)(explore)(input));
    /* -----------------------------------------------------------
        UTILITIES FOR INTERNAL FUNCTIONS
    ----------------------------------------------------------- */
    FeatureProgrammer.index = (start) => (prev) => (rand) => {
        const tail = start !== null
            ? `"[" + (${start} + _index${rand}) + "]"`
            : `"[" + _index${rand} + "]"`;
        if (prev === "")
            return tail;
        else if (prev[prev.length - 1] === `"`)
            return prev.substring(0, prev.length - 1) + tail.substring(1);
        return prev + ` + ${tail}`;
    };
    FeatureProgrammer.argumentsArray = (config) => (explore) => {
        const tail = config.path === false && config.trace === false
            ? []
            : config.path === true && config.trace === true
                ? [
                    typescript_1.default.factory.createIdentifier(explore.postfix
                        ? `_path + ${explore.postfix}`
                        : "_path"),
                    explore.source === "function"
                        ? typescript_1.default.factory.createIdentifier(`${explore.tracable} && _exceptionable`)
                        : explore.tracable
                            ? typescript_1.default.factory.createTrue()
                            : typescript_1.default.factory.createFalse(),
                ]
                : config.path === true
                    ? [
                        typescript_1.default.factory.createIdentifier(explore.postfix
                            ? `_path + ${explore.postfix}`
                            : "_path"),
                    ]
                    : [
                        explore.source === "function"
                            ? typescript_1.default.factory.createIdentifier(`${explore.tracable} && _exceptionable`)
                            : explore.tracable
                                ? typescript_1.default.factory.createTrue()
                                : typescript_1.default.factory.createFalse(),
                    ];
        return (input) => [input, ...tail];
    };
    FeatureProgrammer.parameterDeclarations = (props) => (type) => {
        const tail = [];
        if (props.path)
            tail.push(IdentifierFactory_1.IdentifierFactory.parameter("_path", TypeFactory_1.TypeFactory.keyword("string")));
        if (props.trace)
            tail.push(IdentifierFactory_1.IdentifierFactory.parameter("_exceptionable", TypeFactory_1.TypeFactory.keyword("boolean"), typescript_1.default.factory.createTrue()));
        return (input) => [
            IdentifierFactory_1.IdentifierFactory.parameter(input, type),
            ...tail,
        ];
    };
})(FeatureProgrammer || (exports.FeatureProgrammer = FeatureProgrammer = {}));
