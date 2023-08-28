"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscCloneProgrammer = void 0;
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
const CloneJoiner_1 = require("../helpers/CloneJoiner");
const FunctionImporeter_1 = require("../helpers/FunctionImporeter");
const UnionExplorer_1 = require("../helpers/UnionExplorer");
const decode_union_object_1 = require("../internal/decode_union_object");
const wrap_metadata_rest_tuple_1 = require("../internal/wrap_metadata_rest_tuple");
var MiscCloneProgrammer;
(function (MiscCloneProgrammer) {
    MiscCloneProgrammer.write = (project) => (modulo) => {
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
        // ANY TYPE
        if (meta.any ||
            meta.arrays.some((a) => a.type.value.any) ||
            meta.tuples.some((t) => t.type.elements.every((e) => e.any)))
            return typescript_1.default.factory.createCallExpression(importer.use("any"), undefined, [input]);
        const unions = [];
        //----
        // LIST UP UNION TYPES
        //----
        // TUPLES
        for (const tuple of meta.tuples)
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
        if (meta.arrays.length)
            unions.push({
                type: "array",
                is: () => ExpressionFactory_1.ExpressionFactory.isArray(input),
                value: () => explore_arrays(project)(config)(importer)(input, meta.arrays, {
                    ...explore,
                    from: "array",
                }),
            });
        // NATIVE TYPES
        if (meta.sets.length)
            unions.push({
                type: "set",
                is: () => ExpressionFactory_1.ExpressionFactory.isInstanceOf("Set")(input),
                value: () => explore_sets(project)(config)(importer)(input, meta.sets, { ...explore, from: "array" }),
            });
        if (meta.maps.length)
            unions.push({
                type: "map",
                is: () => ExpressionFactory_1.ExpressionFactory.isInstanceOf("Map")(input),
                value: () => explore_maps(project)(config)(importer)(input, meta.maps, {
                    ...explore,
                    from: "array",
                }),
            });
        for (const native of meta.natives)
            unions.push({
                type: "native",
                is: () => ExpressionFactory_1.ExpressionFactory.isInstanceOf(native)(input),
                value: () => native === "Boolean" ||
                    native === "Number" ||
                    native === "String"
                    ? typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(input)("valueOf"), undefined, undefined)
                    : decode_native(native)(input),
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
        // COMPOSITION
        let last = input;
        for (const u of unions.reverse())
            last = typescript_1.default.factory.createConditionalExpression(u.is(), undefined, u.value(), undefined, last);
        return typescript_1.default.factory.createAsExpression(last, TypeFactory_1.TypeFactory.keyword("any"));
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
    const decode_array_inline = (config) => (importer) => (input, array, explore) => FeatureProgrammer_1.FeatureProgrammer.decode_array(config)(importer)(CloneJoiner_1.CloneJoiner.array)(input, array, explore);
    const decode_tuple = (project) => (config) => (importer) => (input, tuple, explore) => tuple.type.recursive
        ? typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier(importer.useLocal(`${config.prefix}t${tuple.type.index}`)), undefined, FeatureProgrammer_1.FeatureProgrammer.argumentsArray(config)({
            ...explore,
            source: "function",
        })(input))
        : decode_tuple_inline(project)(config)(importer)(input, tuple.type, explore);
    const decode_tuple_inline = (project) => (config) => (importer) => (input, tuple, explore) => {
        const children = tuple.elements
            .filter((m) => m.rest === null)
            .map((elem, index) => decode(project)(config)(importer)(typescript_1.default.factory.createElementAccessExpression(input, index), elem, {
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
            if (rest === null)
                return null;
            return decode(project)(config)(importer)(typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(input)("slice"), undefined, [
                typescript_1.default.factory.createNumericLiteral(tuple.elements.length - 1),
            ]), (0, wrap_metadata_rest_tuple_1.wrap_metadata_rest_tuple)(tuple.elements.at(-1).rest), {
                ...explore,
                start: tuple.elements.length - 1,
            });
        })();
        return CloneJoiner_1.CloneJoiner.tuple(children, rest);
    };
    /* -----------------------------------------------------------
        NATIVE CLASSES
    ----------------------------------------------------------- */
    const decode_native = (type) => (input) => type === "Date" ||
        type === "Uint8Array" ||
        type === "Uint8ClampedArray" ||
        type === "Uint16Array" ||
        type === "Uint32Array" ||
        type === "BigUint64Array" ||
        type === "Int8Array" ||
        type === "Int16Array" ||
        type === "Int32Array" ||
        type === "BigInt64Array" ||
        type === "Float32Array" ||
        type === "Float64Array"
        ? decode_native_copyable(type)(input)
        : type === "ArrayBuffer" || type === "SharedArrayBuffer"
            ? decode_native_buffer(type)(input)
            : type === "DataView"
                ? decode_native_data_view(input)
                : typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier(type), undefined, []);
    const decode_native_copyable = (type) => (input) => typescript_1.default.factory.createNewExpression(typescript_1.default.factory.createIdentifier(type), undefined, [input]);
    const decode_native_buffer = (type) => (input) => ExpressionFactory_1.ExpressionFactory.selfCall(typescript_1.default.factory.createBlock([
        StatementFactory_1.StatementFactory.constant("buffer", typescript_1.default.factory.createNewExpression(typescript_1.default.factory.createIdentifier(type), undefined, [IdentifierFactory_1.IdentifierFactory.access(input)("byteLength")])),
        typescript_1.default.factory.createExpressionStatement(typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(typescript_1.default.factory.createNewExpression(typescript_1.default.factory.createIdentifier("Uint8Array"), undefined, [typescript_1.default.factory.createIdentifier("buffer")]))("set"), undefined, [
            typescript_1.default.factory.createNewExpression(typescript_1.default.factory.createIdentifier("Uint8Array"), undefined, [input]),
        ])),
        typescript_1.default.factory.createReturnStatement(typescript_1.default.factory.createIdentifier("buffer")),
    ], true));
    const decode_native_data_view = (input) => typescript_1.default.factory.createNewExpression(typescript_1.default.factory.createIdentifier("DataView"), undefined, [IdentifierFactory_1.IdentifierFactory.access(input)("buffer")]);
    /* -----------------------------------------------------------
        EXPLORERS FOR UNION TYPES
    ----------------------------------------------------------- */
    const explore_sets = (project) => (config) => (importer) => (input, sets, explore) => typescript_1.default.factory.createCallExpression(UnionExplorer_1.UnionExplorer.set({
        checker: IsProgrammer_1.IsProgrammer.decode(project)(importer),
        decoder: (input, array, explore) => typescript_1.default.factory.createNewExpression(typescript_1.default.factory.createIdentifier("Set"), [TypeFactory_1.TypeFactory.keyword("any")], [
            decode_array(config)(importer)(input, array, explore),
        ]),
        empty: typescript_1.default.factory.createNewExpression(typescript_1.default.factory.createIdentifier("Set"), [TypeFactory_1.TypeFactory.keyword("any")], []),
        success: typescript_1.default.factory.createTrue(),
        failure: (input, expected) => create_throw_error(importer)(expected)(input),
    })([])(input, sets, explore), undefined, undefined);
    const explore_maps = (project) => (config) => (importer) => (input, maps, explore) => typescript_1.default.factory.createCallExpression(UnionExplorer_1.UnionExplorer.map({
        checker: (top, entry, explore) => {
            const func = IsProgrammer_1.IsProgrammer.decode(project)(importer);
            return typescript_1.default.factory.createLogicalAnd(func(typescript_1.default.factory.createElementAccessExpression(top, 0), entry[0], {
                ...explore,
                postfix: `${explore.postfix}[0]`,
            }), func(typescript_1.default.factory.createElementAccessExpression(top, 1), entry[1], {
                ...explore,
                postfix: `${explore.postfix}[1]`,
            }));
        },
        decoder: (input, array, explore) => typescript_1.default.factory.createNewExpression(typescript_1.default.factory.createIdentifier("Map"), [
            TypeFactory_1.TypeFactory.keyword("any"),
            TypeFactory_1.TypeFactory.keyword("any"),
        ], [
            decode_array(config)(importer)(input, array, explore),
        ]),
        empty: typescript_1.default.factory.createNewExpression(typescript_1.default.factory.createIdentifier("Map"), [
            TypeFactory_1.TypeFactory.keyword("any"),
            TypeFactory_1.TypeFactory.keyword("any"),
        ], []),
        success: typescript_1.default.factory.createTrue(),
        failure: (input, expected) => create_throw_error(importer)(expected)(input),
    })([])(input, maps, explore), undefined, undefined);
    const explore_objects = (config) => (importer) => (input, meta, explore) => {
        if (meta.objects.length === 1)
            return decode_object(importer)(input, meta.objects[0], explore);
        return typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier(importer.useLocal(`${PREFIX}u${meta.union_index}`)), undefined, FeatureProgrammer_1.FeatureProgrammer.argumentsArray(config)(explore)(input));
    };
    const explore_arrays = (project) => (config) => (importer) => (input, elements, explore) => explore_array_like_union_types(config)(importer)(UnionExplorer_1.UnionExplorer.array({
        checker: IsProgrammer_1.IsProgrammer.decode(project)(importer),
        decoder: decode_array(config)(importer),
        empty: typescript_1.default.factory.createIdentifier("[]"),
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
    /* -----------------------------------------------------------
        CONFIGURATIONS
    ----------------------------------------------------------- */
    const PREFIX = "$c";
    const configure = (project) => (importer) => {
        const config = {
            types: {
                input: (type, name) => typescript_1.default.factory.createTypeReferenceNode(name ??
                    TypeFactory_1.TypeFactory.getFullName(project.checker)(type)),
                output: (type, name) => typescript_1.default.factory.createTypeReferenceNode(`typia.Resolved<${name ??
                    TypeFactory_1.TypeFactory.getFullName(project.checker)(type)}>`),
            },
            prefix: PREFIX,
            trace: false,
            path: false,
            initializer,
            decoder: () => decode(project)(config)(importer),
            objector: {
                checker: () => IsProgrammer_1.IsProgrammer.decode(project)(importer),
                decoder: () => decode_object(importer),
                joiner: CloneJoiner_1.CloneJoiner.object,
                unionizer: (0, decode_union_object_1.decode_union_object)(IsProgrammer_1.IsProgrammer.decode_object(importer))(decode_object(importer))((exp) => exp)((input, expected) => create_throw_error(importer)(expected)(input)),
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
            validate: (meta) => {
                const output = [];
                if (meta.natives.some((n) => n === "WeakSet"))
                    output.push("unable to clone WeakSet");
                else if (meta.natives.some((n) => n === "WeakMap"))
                    output.push("unable to clone WeakMap");
                return output;
            },
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
})(MiscCloneProgrammer || (exports.MiscCloneProgrammer = MiscCloneProgrammer = {}));
