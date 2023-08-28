"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscPruneProgrammer = void 0;
const typescript_1 = __importDefault(require("typescript"));
const ExpressionFactory_1 = require("../../factories/ExpressionFactory");
const IdentifierFactory_1 = require("../../factories/IdentifierFactory");
const MetadataCollection_1 = require("../../factories/MetadataCollection");
const MetadataFactory_1 = require("../../factories/MetadataFactory");
const StatementFactory_1 = require("../../factories/StatementFactory");
const TypeFactory_1 = require("../../factories/TypeFactory");
const Metadata_1 = require("../../schemas/metadata/Metadata");
const MetadataArray_1 = require("../../schemas/metadata/MetadataArray");
const TransformerError_1 = require("../../transformers/TransformerError");
const FeatureProgrammer_1 = require("../FeatureProgrammer");
const IsProgrammer_1 = require("../IsProgrammer");
const FunctionImporeter_1 = require("../helpers/FunctionImporeter");
const PruneJoiner_1 = require("../helpers/PruneJoiner");
const UnionExplorer_1 = require("../helpers/UnionExplorer");
const decode_union_object_1 = require("../internal/decode_union_object");
const wrap_metadata_rest_tuple_1 = require("../internal/wrap_metadata_rest_tuple");
var MiscPruneProgrammer;
(function (MiscPruneProgrammer) {
    MiscPruneProgrammer.write = (project) => (modulo) => {
        const importer = new FunctionImporeter_1.FunctionImporter(modulo.getText());
        return FeatureProgrammer_1.FeatureProgrammer.write(project)({
            ...configure(project)(importer),
            addition: (collection) => [
                ...IsProgrammer_1.IsProgrammer.write_function_statements(project)(importer)(collection),
                ...importer.declare(modulo),
            ],
        })(importer);
    };
    const write_array_functions = (config) => (importer) => (collection) => collection
        .arrays()
        .filter((a) => a.recursive)
        .map((type, i) => StatementFactory_1.StatementFactory.constant(`${config.prefix}a${i}`, typescript_1.default.factory.createArrowFunction(undefined, undefined, FeatureProgrammer_1.FeatureProgrammer.parameterDeclarations(config)(TypeFactory_1.TypeFactory.keyword("any"))(typescript_1.default.factory.createIdentifier("input")), TypeFactory_1.TypeFactory.keyword("any"), undefined, decode_array_inline(config)(importer)(typescript_1.default.factory.createIdentifier("input"), MetadataArray_1.MetadataArray.create({
        type,
        tags: [],
    }), {
        tracable: config.trace,
        source: "function",
        from: "array",
        postfix: "",
    }))));
    const write_tuple_functions = (project) => (config) => (importer) => (collection) => collection
        .tuples()
        .filter((t) => t.recursive)
        .map((tuple, i) => StatementFactory_1.StatementFactory.constant(`${config.prefix}t${i}`, typescript_1.default.factory.createArrowFunction(undefined, undefined, FeatureProgrammer_1.FeatureProgrammer.parameterDeclarations(config)(TypeFactory_1.TypeFactory.keyword("any"))(typescript_1.default.factory.createIdentifier("input")), TypeFactory_1.TypeFactory.keyword("any"), undefined, decode_tuple_inline(project)(config)(importer)(typescript_1.default.factory.createIdentifier("input"), tuple, {
        tracable: config.trace,
        source: "function",
        from: "array",
        postfix: "",
    }))));
    /* -----------------------------------------------------------
        DECODERS
    ----------------------------------------------------------- */
    const decode = (project) => (config) => (importer) => (input, meta, explore) => {
        if (filter(meta) === false)
            return typescript_1.default.factory.createBlock([]);
        const unions = [];
        //----
        // LIST UP UNION TYPES
        //----
        // TUPLES
        for (const tuple of meta.tuples.filter((tuple) => tuple.type.elements.some((e) => filter(e.rest ?? e))))
            unions.push({
                type: "tuple",
                is: () => IsProgrammer_1.IsProgrammer.decode(project)(importer)(input, (() => {
                    const partial = Metadata_1.Metadata.initialize();
                    partial.tuples.push(tuple);
                    return partial;
                })(), explore),
                value: () => decode_tuple(project)(config)(importer)(input, tuple, explore),
            });
        // ARRAYS
        if (meta.arrays.filter((a) => filter(a.type.value)).length)
            unions.push({
                type: "array",
                is: () => ExpressionFactory_1.ExpressionFactory.isArray(input),
                value: () => explore_arrays(project)(config)(importer)(input, meta.arrays, {
                    ...explore,
                    from: "array",
                }),
            });
        // BUILT-IN CLASSES
        if (meta.natives.length)
            for (const native of meta.natives)
                unions.push({
                    type: "native",
                    is: () => ExpressionFactory_1.ExpressionFactory.isInstanceOf(native)(input),
                    value: () => typescript_1.default.factory.createReturnStatement(),
                });
        if (meta.sets.length)
            unions.push({
                type: "set",
                is: () => ExpressionFactory_1.ExpressionFactory.isInstanceOf("Set")(input),
                value: () => typescript_1.default.factory.createReturnStatement(),
            });
        if (meta.maps.length)
            unions.push({
                type: "map",
                is: () => ExpressionFactory_1.ExpressionFactory.isInstanceOf("Map")(input),
                value: () => typescript_1.default.factory.createReturnStatement(),
            });
        // OBJECTS
        if (meta.objects.length)
            unions.push({
                type: "object",
                is: () => ExpressionFactory_1.ExpressionFactory.isObject({
                    checkNull: true,
                    checkArray: false,
                })(input),
                value: () => explore_objects(config)(importer)(input, meta, {
                    ...explore,
                    from: "object",
                }),
            });
        //----
        // STATEMENTS
        //----
        const converter = (v) => typescript_1.default.isReturnStatement(v) || typescript_1.default.isBlock(v)
            ? v
            : typescript_1.default.factory.createExpressionStatement(v);
        const statements = unions.map((u) => typescript_1.default.factory.createIfStatement(u.is(), converter(u.value())));
        return typescript_1.default.factory.createBlock(statements, true);
    };
    const decode_object = (importer) => FeatureProgrammer_1.FeatureProgrammer.decode_object({
        trace: false,
        path: false,
        prefix: PREFIX,
    })(importer);
    const decode_array = (config) => (importer) => (input, array, explore) => array.type.recursive
        ? typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier(importer.useLocal(`${config.prefix}a${array.type.index}`)), undefined, FeatureProgrammer_1.FeatureProgrammer.argumentsArray(config)({
            ...explore,
            source: "function",
            from: "array",
        })(input))
        : decode_array_inline(config)(importer)(input, array, explore);
    const decode_array_inline = (config) => (importer) => (input, array, explore) => FeatureProgrammer_1.FeatureProgrammer.decode_array(config)(importer)(PruneJoiner_1.PruneJoiner.array)(input, array, explore);
    const decode_tuple = (project) => (config) => (importer) => (input, tuple, explore) => tuple.type.recursive
        ? typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier(importer.useLocal(`${config.prefix}t${tuple.type.index}`)), undefined, FeatureProgrammer_1.FeatureProgrammer.argumentsArray(config)({
            ...explore,
            source: "function",
        })(input))
        : decode_tuple_inline(project)(config)(importer)(input, tuple.type, explore);
    const decode_tuple_inline = (project) => (config) => (importer) => (input, tuple, explore) => {
        const children = tuple.elements
            .map((elem, index) => [elem, index])
            .filter(([elem]) => filter(elem) && elem.rest === null)
            .map(([elem, index]) => decode(project)(config)(importer)(typescript_1.default.factory.createElementAccessExpression(input, index), elem, {
            ...explore,
            from: "array",
            postfix: explore.postfix.length
                ? `${explore.postfix.slice(0, -1)}[${index}]"`
                : `"[${index}]"`,
        }));
        const rest = (() => {
            if (tuple.elements.length === 0)
                return null;
            const last = tuple.elements.at(-1);
            const rest = last.rest;
            if (rest === null || filter(rest) === false)
                return null;
            return decode(project)(config)(importer)(typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(input)("slice"), undefined, [
                typescript_1.default.factory.createNumericLiteral(tuple.elements.length - 1),
            ]), (0, wrap_metadata_rest_tuple_1.wrap_metadata_rest_tuple)(tuple.elements.at(-1).rest), {
                ...explore,
                start: tuple.elements.length - 1,
            });
        })();
        return PruneJoiner_1.PruneJoiner.tuple(children, rest);
    };
    /* -----------------------------------------------------------
        UNION TYPE EXPLORERS
    ----------------------------------------------------------- */
    const explore_objects = (config) => (importer) => (input, meta, explore) => {
        if (meta.objects.length === 1)
            return decode_object(importer)(input, meta.objects[0], explore);
        return typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier(importer.useLocal(`${PREFIX}u${meta.union_index}`)), undefined, FeatureProgrammer_1.FeatureProgrammer.argumentsArray(config)(explore)(input));
    };
    const explore_arrays = (project) => (config) => (importer) => (input, elements, explore) => explore_array_like_union_types(config)(importer)(UnionExplorer_1.UnionExplorer.array({
        checker: IsProgrammer_1.IsProgrammer.decode(project)(importer),
        decoder: decode_array(config)(importer),
        empty: typescript_1.default.factory.createStringLiteral("[]"),
        success: typescript_1.default.factory.createTrue(),
        failure: (input, expected) => create_throw_error(importer)(expected)(input),
    }))(input, elements, explore);
    const explore_array_like_union_types = (config) => (importer) => (factory) => (input, elements, explore) => {
        const arrow = (parameters) => (explore) => (input) => factory(parameters)(input, elements, explore);
        if (elements.every((e) => e.type.recursive === false))
            typescript_1.default.factory.createCallExpression(arrow([])(explore)(input), undefined, []);
        explore = {
            ...explore,
            source: "function",
            from: "array",
        };
        return typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier(importer.emplaceUnion(config.prefix, elements.map((e) => e.type.name).join(" | "), () => arrow(FeatureProgrammer_1.FeatureProgrammer.parameterDeclarations(config)(TypeFactory_1.TypeFactory.keyword("any"))(typescript_1.default.factory.createIdentifier("input")))({
            ...explore,
            postfix: "",
        })(typescript_1.default.factory.createIdentifier("input")))), undefined, FeatureProgrammer_1.FeatureProgrammer.argumentsArray(config)(explore)(input));
    };
    // @todo -> must filter out recursive visit
    const filter = (meta) => meta.any === false &&
        (meta.objects.length !== 0 ||
            meta.tuples.some((t) => t.type.elements.some((e) => filter(e.rest ?? e))) ||
            meta.arrays.some((e) => filter(e.type.value)));
    /* -----------------------------------------------------------
        CONFIGURATIONS
    ----------------------------------------------------------- */
    const PREFIX = "$p";
    const configure = (project) => (importer) => {
        const config = {
            types: {
                input: (type, name) => typescript_1.default.factory.createTypeReferenceNode(name ??
                    TypeFactory_1.TypeFactory.getFullName(project.checker)(type)),
                output: () => TypeFactory_1.TypeFactory.keyword("void"),
            },
            prefix: PREFIX,
            trace: false,
            path: false,
            initializer,
            decoder: () => decode(project)(config)(importer),
            objector: {
                checker: () => IsProgrammer_1.IsProgrammer.decode(project)(importer),
                decoder: () => decode_object(importer),
                joiner: PruneJoiner_1.PruneJoiner.object,
                unionizer: (0, decode_union_object_1.decode_union_object)(IsProgrammer_1.IsProgrammer.decode_object(importer))(decode_object(importer))((exp) => exp)((value, expected) => create_throw_error(importer)(expected)(value)),
                failure: (input, expected) => create_throw_error(importer)(expected)(input),
            },
            generator: {
                arrays: () => write_array_functions(config)(importer),
                tuples: () => write_tuple_functions(project)(config)(importer),
            },
        };
        return config;
    };
    const initializer = ({ checker }) => (importer) => (type) => {
        const collection = new MetadataCollection_1.MetadataCollection();
        const result = MetadataFactory_1.MetadataFactory.analyze(checker)({
            escape: false,
            constant: true,
            absorb: true,
        })(collection)(type);
        if (result.success === false)
            throw TransformerError_1.TransformerError.from(`typia.misc.${importer.method}`)(result.errors);
        return [collection, result.data];
    };
    const create_throw_error = (importer) => (expected) => (value) => typescript_1.default.factory.createExpressionStatement(typescript_1.default.factory.createCallExpression(importer.use("throws"), [], [
        typescript_1.default.factory.createObjectLiteralExpression([
            typescript_1.default.factory.createPropertyAssignment("expected", typescript_1.default.factory.createStringLiteral(expected)),
            typescript_1.default.factory.createPropertyAssignment("value", value),
        ], true),
    ]));
})(MiscPruneProgrammer || (exports.MiscPruneProgrammer = MiscPruneProgrammer = {}));
