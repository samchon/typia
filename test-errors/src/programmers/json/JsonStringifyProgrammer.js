"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonStringifyProgrammer = void 0;
const typescript_1 = __importDefault(require("typescript"));
const ExpressionFactory_1 = require("../../factories/ExpressionFactory");
const IdentifierFactory_1 = require("../../factories/IdentifierFactory");
const JsonMetadataFactory_1 = require("../../factories/JsonMetadataFactory");
const StatementFactory_1 = require("../../factories/StatementFactory");
const TypeFactory_1 = require("../../factories/TypeFactory");
const ValueFactory_1 = require("../../factories/ValueFactory");
const Metadata_1 = require("../../schemas/metadata/Metadata");
const MetadataArray_1 = require("../../schemas/metadata/MetadataArray");
const MetadataAtomic_1 = require("../../schemas/metadata/MetadataAtomic");
const ArrayUtil_1 = require("../../utils/ArrayUtil");
const FeatureProgrammer_1 = require("../FeatureProgrammer");
const IsProgrammer_1 = require("../IsProgrammer");
const AtomicPredicator_1 = require("../helpers/AtomicPredicator");
const FunctionImporeter_1 = require("../helpers/FunctionImporeter");
const OptionPredicator_1 = require("../helpers/OptionPredicator");
const StringifyJoinder_1 = require("../helpers/StringifyJoinder");
const StringifyPredicator_1 = require("../helpers/StringifyPredicator");
const UnionExplorer_1 = require("../helpers/UnionExplorer");
const check_native_1 = require("../internal/check_native");
const decode_union_object_1 = require("../internal/decode_union_object");
const feature_object_entries_1 = require("../internal/feature_object_entries");
const wrap_metadata_rest_tuple_1 = require("../internal/wrap_metadata_rest_tuple");
var JsonStringifyProgrammer;
(function (JsonStringifyProgrammer) {
    /* -----------------------------------------------------------
        WRITER
    ----------------------------------------------------------- */
    JsonStringifyProgrammer.write = (project) => (modulo) => {
        const importer = new FunctionImporeter_1.FunctionImporter(modulo.getText());
        const config = configure(project)(importer);
        return FeatureProgrammer_1.FeatureProgrammer.write(project)({
            ...config,
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
        if (meta.any === true)
            return wrap_required(input, meta, explore)(wrap_functional(input, meta, explore)(typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("JSON.stringify"), undefined, [input])));
        // ONLY NULL OR UNDEFINED
        const size = meta.size();
        if (size === 0 &&
            (meta.isRequired() === false || meta.nullable === true)) {
            if (meta.isRequired() === false && meta.nullable === true)
                return explore.from === "array"
                    ? typescript_1.default.factory.createStringLiteral("null")
                    : typescript_1.default.factory.createConditionalExpression(typescript_1.default.factory.createStrictEquality(typescript_1.default.factory.createNull(), input), undefined, typescript_1.default.factory.createStringLiteral("null"), undefined, typescript_1.default.factory.createIdentifier("undefined"));
            else if (meta.isRequired() === false)
                return explore.from === "array"
                    ? typescript_1.default.factory.createStringLiteral("null")
                    : typescript_1.default.factory.createIdentifier("undefined");
            else
                return typescript_1.default.factory.createStringLiteral("null");
        }
        //----
        // LIST UP UNION TYPES
        //----
        const unions = [];
        // toJSON() METHOD
        if (meta.escaped !== null)
            unions.push({
                type: "resolved",
                is: () => IsProgrammer_1.IsProgrammer.decode_to_json(false)(input),
                value: () => decode_to_json(project)(config)(importer)(input, meta.escaped.returns, explore),
            });
        else if (meta.functional === true)
            unions.push({
                type: "functional",
                is: () => IsProgrammer_1.IsProgrammer.decode_functional(input),
                value: () => decode_functional(explore),
            });
        // TEMPLATES
        if (meta.templates.length ||
            ArrayUtil_1.ArrayUtil.has(meta.constants, (c) => c.type === "string"))
            if (AtomicPredicator_1.AtomicPredicator.template(meta)) {
                const partial = Metadata_1.Metadata.initialize();
                partial.atomics.push(MetadataAtomic_1.MetadataAtomic.create({ type: "string", tags: [] })),
                    unions.push({
                        type: "template literal",
                        is: () => IsProgrammer_1.IsProgrammer.decode(project)(importer)(input, partial, explore),
                        value: () => decode_atomic(project)(importer)(input, "string", explore),
                    });
            }
        // CONSTANTS
        for (const constant of meta.constants)
            if (AtomicPredicator_1.AtomicPredicator.constant(meta)(constant.type) === false)
                continue;
            else if (constant.type !== "string")
                unions.push({
                    type: "atomic",
                    is: () => IsProgrammer_1.IsProgrammer.decode(project)(importer)(input, (() => {
                        const partial = Metadata_1.Metadata.initialize();
                        partial.atomics.push(MetadataAtomic_1.MetadataAtomic.create({
                            type: constant.type,
                            tags: [],
                        }));
                        return partial;
                    })(), explore),
                    value: () => decode_atomic(project)(importer)(input, constant.type, explore),
                });
            else if (meta.templates.length === 0)
                unions.push({
                    type: "const string",
                    is: () => IsProgrammer_1.IsProgrammer.decode(project)(importer)(input, (() => {
                        const partial = Metadata_1.Metadata.initialize();
                        partial.atomics.push(MetadataAtomic_1.MetadataAtomic.create({
                            type: "string",
                            tags: [],
                        }));
                        return partial;
                    })(), explore),
                    value: () => decode_constant_string(project)(importer)(input, [...constant.values], explore),
                });
        /// ATOMICS
        for (const a of meta.atomics)
            if (AtomicPredicator_1.AtomicPredicator.atomic(meta)(a.type))
                unions.push({
                    type: "atomic",
                    is: () => IsProgrammer_1.IsProgrammer.decode(project)(importer)(input, (() => {
                        const partial = Metadata_1.Metadata.initialize();
                        partial.atomics.push(a);
                        return partial;
                    })(), explore),
                    value: () => decode_atomic(project)(importer)(input, a.type, explore),
                });
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
        if (meta.arrays.length) {
            const value = meta.arrays.length === 1
                ? () => decode_array(config)(importer)(input, meta.arrays[0], {
                    ...explore,
                    from: "array",
                })
                : meta.arrays.some((elem) => elem.type.value.any)
                    ? () => typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("JSON.stringify"), undefined, [input])
                    : () => explore_arrays(project)(config)(importer)(input, meta.arrays, {
                        ...explore,
                        from: "array",
                    });
            unions.push({
                type: "array",
                is: () => ExpressionFactory_1.ExpressionFactory.isArray(input),
                value,
            });
        }
        // BUILT-IN CLASSES
        if (meta.natives.length)
            for (const native of meta.natives)
                unions.push({
                    type: "object",
                    is: () => (0, check_native_1.check_native)(native)(input),
                    value: () => AtomicPredicator_1.AtomicPredicator.native(native)
                        ? decode_atomic(project)(importer)(input, native.toLowerCase(), explore)
                        : typescript_1.default.factory.createStringLiteral("{}"),
                });
        // SETS
        if (meta.sets.length)
            unions.push({
                type: "object",
                is: () => ExpressionFactory_1.ExpressionFactory.isInstanceOf("Set")(input),
                value: () => typescript_1.default.factory.createStringLiteral("{}"),
            });
        // MAPS
        if (meta.maps.length)
            unions.push({
                type: "object",
                is: () => ExpressionFactory_1.ExpressionFactory.isInstanceOf("Map")(input),
                value: () => typescript_1.default.factory.createStringLiteral("{}"),
            });
        // OBJECTS
        if (meta.objects.length)
            unions.push({
                type: "object",
                is: () => ExpressionFactory_1.ExpressionFactory.isObject({
                    checkNull: true,
                    checkArray: meta.objects.some((obj) => obj.properties.every((prop) => !prop.key.isSoleLiteral() ||
                        !prop.value.isRequired())),
                })(input),
                value: () => meta.isParentResolved() === false &&
                    meta.objects.length === 1 &&
                    meta.objects[0]._Is_simple(explore.from === "top" ? 0 : 1)
                    ? (() => {
                        const obj = meta.objects[0];
                        const entries = (0, feature_object_entries_1.feature_object_entries)({
                            decoder: () => decode(project)(config)(importer),
                            trace: false,
                            path: false,
                        })(importer)(obj)(typescript_1.default.factory.createAsExpression(input, TypeFactory_1.TypeFactory.keyword("any")));
                        return StringifyJoinder_1.StringifyJoiner.object(importer)(typescript_1.default.factory.createAsExpression(input, TypeFactory_1.TypeFactory.keyword("any")), entries);
                    })()
                    : explore_objects(config)(importer)(input, meta, {
                        ...explore,
                        from: "object",
                    }),
            });
        //----
        // RETURNS
        //----
        // CHECK NULL AND UNDEFINED
        const wrapper = (output) => wrap_required(input, meta, explore)(wrap_nullable(input, meta)(output));
        // DIRECT RETURN
        if (unions.length === 0)
            return typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("JSON.stringify"), undefined, [input]);
        else if (unions.length === 1)
            return wrapper(unions[0].value());
        // RETURN WITH TYPE CHECKING
        return wrapper(typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createArrowFunction(undefined, undefined, [], undefined, undefined, iterate(importer, input, unions, meta.getName())), undefined, undefined));
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
    const decode_array_inline = (config) => (importer) => (input, array, explore) => FeatureProgrammer_1.FeatureProgrammer.decode_array(config)(importer)(StringifyJoinder_1.StringifyJoiner.array)(input, array, explore);
    const decode_tuple = (project) => (config) => (importer) => (input, tuple, explore) => tuple.type.recursive
        ? typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier(importer.useLocal(`${config.prefix}t${tuple.type.index}`)), undefined, FeatureProgrammer_1.FeatureProgrammer.argumentsArray(config)({
            ...explore,
            source: "function",
        })(input))
        : decode_tuple_inline(project)(config)(importer)(input, tuple.type, explore);
    const decode_tuple_inline = (project) => (config) => (importer) => (input, tuple, explore) => {
        const children = tuple.elements
            .filter((elem) => elem.rest === null)
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
            if (last.rest === null)
                return null;
            const code = decode(project)(config)(importer)(typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(input)("slice"), undefined, [
                typescript_1.default.factory.createNumericLiteral(tuple.elements.length - 1),
            ]), (0, wrap_metadata_rest_tuple_1.wrap_metadata_rest_tuple)(tuple.elements.at(-1).rest), {
                ...explore,
                start: tuple.elements.length - 1,
            });
            return typescript_1.default.factory.createCallExpression(importer.use("rest"), undefined, [code]);
        })();
        return StringifyJoinder_1.StringifyJoiner.tuple(children, rest);
    };
    const decode_atomic = (project) => (importer) => (input, type, explore) => {
        if (type === "string")
            return typescript_1.default.factory.createCallExpression(importer.use("string"), undefined, [input]);
        else if (type === "number" &&
            OptionPredicator_1.OptionPredicator.numeric(project.options))
            input = typescript_1.default.factory.createCallExpression(importer.use("number"), undefined, [input]);
        return explore.from !== "top"
            ? input
            : typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(input)("toString"), undefined, undefined);
    };
    const decode_constant_string = (project) => (importer) => (input, values, explore) => {
        if (values.every((v) => !StringifyPredicator_1.StringifyPredicator.require_escape(v)))
            return [
                typescript_1.default.factory.createStringLiteral('"'),
                input,
                typescript_1.default.factory.createStringLiteral('"'),
            ].reduce((x, y) => typescript_1.default.factory.createAdd(x, y));
        else
            return decode_atomic(project)(importer)(input, "string", explore);
    };
    const decode_to_json = (project) => (config) => (importer) => (input, resolved, explore) => {
        return decode(project)(config)(importer)(typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(input)("toJSON"), undefined, []), resolved, explore);
    };
    const decode_functional = (explore) => explore.from === "array"
        ? typescript_1.default.factory.createStringLiteral("null")
        : typescript_1.default.factory.createIdentifier("undefined");
    /* -----------------------------------------------------------
        EXPLORERS
    ----------------------------------------------------------- */
    const explore_objects = (config) => (importer) => (input, meta, explore) => meta.objects.length === 1
        ? decode_object(importer)(input, meta.objects[0], explore)
        : typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier(importer.useLocal(`${PREFIX}u${meta.union_index}`)), undefined, FeatureProgrammer_1.FeatureProgrammer.argumentsArray(config)(explore)(input));
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
    /* -----------------------------------------------------------
        RETURN SCRIPTS
    ----------------------------------------------------------- */
    const wrap_required = (input, meta, explore) => {
        if (meta.isRequired() === true && meta.any === false)
            return (expression) => expression;
        return (expression) => typescript_1.default.factory.createConditionalExpression(typescript_1.default.factory.createStrictInequality(typescript_1.default.factory.createIdentifier("undefined"), input), undefined, expression, undefined, explore.from === "array"
            ? typescript_1.default.factory.createStringLiteral("null")
            : typescript_1.default.factory.createIdentifier("undefined"));
    };
    const wrap_nullable = (input, meta) => {
        if (meta.nullable === false)
            return (expression) => expression;
        return (expression) => typescript_1.default.factory.createConditionalExpression(typescript_1.default.factory.createStrictInequality(typescript_1.default.factory.createNull(), input), undefined, expression, undefined, typescript_1.default.factory.createStringLiteral("null"));
    };
    const wrap_functional = (input, meta, explore) => {
        if (meta.functional === false)
            return (expression) => expression;
        return (expression) => typescript_1.default.factory.createConditionalExpression(typescript_1.default.factory.createStrictInequality(typescript_1.default.factory.createStringLiteral("function"), ValueFactory_1.ValueFactory.TYPEOF(input)), undefined, expression, undefined, decode_functional(explore));
    };
    const iterate = (importer, input, unions, expected) => typescript_1.default.factory.createBlock([
        ...unions.map((u) => typescript_1.default.factory.createIfStatement(u.is(), typescript_1.default.factory.createReturnStatement(u.value()))),
        create_throw_error(importer)(expected)(input),
    ], true);
    /* -----------------------------------------------------------
        CONFIGURATIONS
    ----------------------------------------------------------- */
    const PREFIX = "$s";
    const configure = (project) => (importer) => {
        const config = {
            types: {
                input: (type, name) => typescript_1.default.factory.createTypeReferenceNode(name ??
                    TypeFactory_1.TypeFactory.getFullName(project.checker)(type)),
                output: () => TypeFactory_1.TypeFactory.keyword("string"),
            },
            prefix: PREFIX,
            trace: false,
            path: false,
            initializer,
            decoder: () => decode(project)(config)(importer),
            objector: {
                checker: () => (input, meta, explore) => IsProgrammer_1.IsProgrammer.decode(project)(importer)(input, meta, explore),
                decoder: () => decode_object(importer),
                joiner: StringifyJoinder_1.StringifyJoiner.object(importer),
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
    const initializer = ({ checker }) => (importer) => (type) => JsonMetadataFactory_1.JsonMetadataFactory.analyze(`typia.json.${importer.method}`)(checker)(type);
    const create_throw_error = (importer) => (expected) => (value) => typescript_1.default.factory.createExpressionStatement(typescript_1.default.factory.createCallExpression(importer.use("throws"), [], [
        typescript_1.default.factory.createObjectLiteralExpression([
            typescript_1.default.factory.createPropertyAssignment("expected", typescript_1.default.factory.createStringLiteral(expected)),
            typescript_1.default.factory.createPropertyAssignment("value", value),
        ], true),
    ]));
})(JsonStringifyProgrammer || (exports.JsonStringifyProgrammer = JsonStringifyProgrammer = {}));
