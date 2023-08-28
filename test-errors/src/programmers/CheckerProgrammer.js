"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckerProgrammer = void 0;
const typescript_1 = __importDefault(require("typescript"));
const ExpressionFactory_1 = require("../factories/ExpressionFactory");
const IdentifierFactory_1 = require("../factories/IdentifierFactory");
const MetadataCollection_1 = require("../factories/MetadataCollection");
const MetadataFactory_1 = require("../factories/MetadataFactory");
const StatementFactory_1 = require("../factories/StatementFactory");
const TypeFactory_1 = require("../factories/TypeFactory");
const ValueFactory_1 = require("../factories/ValueFactory");
const MetadataArray_1 = require("../schemas/metadata/MetadataArray");
const MetadataTuple_1 = require("../schemas/metadata/MetadataTuple");
const TransformerError_1 = require("../transformers/TransformerError");
const FeatureProgrammer_1 = require("./FeatureProgrammer");
const AtomicPredicator_1 = require("./helpers/AtomicPredicator");
const OptionPredicator_1 = require("./helpers/OptionPredicator");
const UnionExplorer_1 = require("./helpers/UnionExplorer");
const check_array_length_1 = require("./internal/check_array_length");
const check_bigint_1 = require("./internal/check_bigint");
const check_native_1 = require("./internal/check_native");
const check_number_1 = require("./internal/check_number");
const check_string_1 = require("./internal/check_string");
const check_template_1 = require("./internal/check_template");
const decode_union_object_1 = require("./internal/decode_union_object");
const wrap_metadata_rest_tuple_1 = require("./internal/wrap_metadata_rest_tuple");
var CheckerProgrammer;
(function (CheckerProgrammer) {
    /* -----------------------------------------------------------
        WRITERS
    ----------------------------------------------------------- */
    CheckerProgrammer.write = (project) => (config) => (importer) => FeatureProgrammer_1.FeatureProgrammer.write(project)(configure(project)(config)(importer))(importer);
    CheckerProgrammer.write_object_functions = (project) => (config) => (importer) => FeatureProgrammer_1.FeatureProgrammer.write_object_functions(configure(project)(config)(importer))(importer);
    CheckerProgrammer.write_union_functions = (project) => (config) => (importer) => FeatureProgrammer_1.FeatureProgrammer.write_union_functions(configure(project)({ ...config, numeric: false })(importer));
    CheckerProgrammer.write_array_functions = (project) => (config) => (importer) => (collection) => collection
        .arrays()
        .filter((a) => a.recursive)
        .map((type, i) => StatementFactory_1.StatementFactory.constant(`${config.prefix}a${i}`, typescript_1.default.factory.createArrowFunction(undefined, undefined, FeatureProgrammer_1.FeatureProgrammer.parameterDeclarations(config)(TypeFactory_1.TypeFactory.keyword("any"))(typescript_1.default.factory.createIdentifier("input")), TypeFactory_1.TypeFactory.keyword("any"), undefined, decode_array_inline(project)(config)(importer)(typescript_1.default.factory.createIdentifier("input"), MetadataArray_1.MetadataArray.create({
        type,
        tags: [],
    }), {
        tracable: config.trace,
        source: "function",
        from: "array",
        postfix: "",
    }))));
    CheckerProgrammer.write_tuple_functions = (project) => (config) => (importer) => (collection) => collection
        .tuples()
        .filter((t) => t.recursive)
        .map((tuple, i) => StatementFactory_1.StatementFactory.constant(`${config.prefix}t${i}`, typescript_1.default.factory.createArrowFunction(undefined, undefined, FeatureProgrammer_1.FeatureProgrammer.parameterDeclarations(config)(TypeFactory_1.TypeFactory.keyword("any"))(typescript_1.default.factory.createIdentifier("input")), TypeFactory_1.TypeFactory.keyword("any"), undefined, decode_tuple_inline(project)(config)(importer)(typescript_1.default.factory.createIdentifier("input"), tuple, {
        tracable: config.trace,
        source: "function",
        from: "array",
        postfix: "",
    }))));
    const configure = (project) => (config) => (importer) => ({
        types: {
            input: () => TypeFactory_1.TypeFactory.keyword("any"),
            output: (type, name) => typescript_1.default.factory.createTypePredicateNode(undefined, "input", typescript_1.default.factory.createTypeReferenceNode(name ??
                TypeFactory_1.TypeFactory.getFullName(project.checker)(type))),
        },
        trace: config.trace,
        path: config.path,
        prefix: config.prefix,
        initializer: ({ checker }) => (importer) => (type) => {
            const collection = new MetadataCollection_1.MetadataCollection();
            const result = MetadataFactory_1.MetadataFactory.analyze(checker)({
                escape: false,
                constant: true,
                absorb: true,
            })(collection)(type);
            if (result.success === false)
                throw TransformerError_1.TransformerError.from(`typia.${importer.method}`)(result.errors);
            return [collection, result.data];
        },
        addition: config.addition,
        decoder: () => config.decoder?.() ?? CheckerProgrammer.decode(project)(config)(importer),
        objector: {
            checker: () => config.decoder?.() ?? CheckerProgrammer.decode(project)(config)(importer),
            decoder: () => CheckerProgrammer.decode_object(config)(importer),
            joiner: config.joiner.object,
            unionizer: config.equals
                ? (0, decode_union_object_1.decode_union_object)(CheckerProgrammer.decode_object(config)(importer))((input, obj, explore) => CheckerProgrammer.decode_object(config)(importer)(input, obj, {
                    ...explore,
                    tracable: true,
                }))(config.joiner.is ?? ((expr) => expr))((value, expected) => typescript_1.default.factory.createReturnStatement(config.joiner.failure(value, expected)))
                : (input, targets, explore) => config.combiner(explore)("or")(input, targets.map((obj) => ({
                    expression: CheckerProgrammer.decode_object(config)(importer)(input, obj, explore),
                    combined: true,
                })), `(${targets.map((t) => t.name).join(" | ")})`),
            failure: (value, expected) => typescript_1.default.factory.createReturnStatement(config.joiner.failure(value, expected)),
            is: config.joiner.is,
            required: config.joiner.required,
            full: config.joiner.full,
            type: TypeFactory_1.TypeFactory.keyword("boolean"),
        },
        generator: {
            unions: config.numeric
                ? () => FeatureProgrammer_1.FeatureProgrammer.write_union_functions(configure(project)({ ...config, numeric: false })(importer))
                : undefined,
            arrays: () => CheckerProgrammer.write_array_functions(project)(config)(importer),
            tuples: () => CheckerProgrammer.write_tuple_functions(project)(config)(importer),
        },
    });
    /* -----------------------------------------------------------
        DECODERS
    ----------------------------------------------------------- */
    /**
     * @internal
     */
    CheckerProgrammer.decode = (project) => (config) => (importer) => (input, meta, explore) => {
        if (meta.any)
            return config.success;
        const top = [];
        const binaries = [];
        const add = create_add(binaries)(input);
        const getConstantValue = (value) => {
            if (typeof value === "string")
                return typescript_1.default.factory.createStringLiteral(value);
            else if (typeof value === "bigint")
                return ExpressionFactory_1.ExpressionFactory.bigint(value);
            return typescript_1.default.factory.createIdentifier(value.toString());
        };
        //----
        // CHECK OPTIONAL
        //----
        // @todo -> should be elaborated
        const checkOptional = meta.empty() || meta.isUnionBucket();
        // NULLABLE
        if (checkOptional || meta.nullable)
            (meta.nullable ? add : create_add(top)(input))(meta.nullable, ValueFactory_1.ValueFactory.NULL());
        // UNDEFINDABLE
        if (checkOptional || !meta.isRequired())
            (meta.isRequired() ? create_add(top)(input) : add)(!meta.isRequired(), ValueFactory_1.ValueFactory.UNDEFINED());
        // FUNCTIONAL
        if (meta.functional === true)
            if (OptionPredicator_1.OptionPredicator.functional(project.options) ||
                meta.size() !== 1)
                add(true, typescript_1.default.factory.createStringLiteral("function"), ValueFactory_1.ValueFactory.TYPEOF(input));
            else
                binaries.push({
                    combined: false,
                    expression: config.success,
                });
        //----
        // VALUES
        //----
        // CONSTANT VALUES
        for (const constant of meta.constants)
            if (AtomicPredicator_1.AtomicPredicator.constant(meta)(constant.type))
                for (const val of constant.values)
                    add(true, getConstantValue(val));
        // ATOMIC VALUES
        for (const atom of meta.atomics)
            if (AtomicPredicator_1.AtomicPredicator.atomic(meta)(atom.type) === false)
                continue;
            else if (atom.type === "number")
                binaries.push({
                    expression: config.atomist(explore)((0, check_number_1.check_number)(project, config.numeric)(atom)(input))(input),
                    combined: false,
                });
            else if (atom.type === "bigint")
                binaries.push({
                    expression: config.atomist(explore)((0, check_bigint_1.check_bigint)(project)(atom)(input))(input),
                    combined: false,
                });
            else if (atom.type === "string")
                binaries.push({
                    expression: config.atomist(explore)((0, check_string_1.check_string)(project)(atom)(input))(input),
                    combined: false,
                });
            else
                add(true, typescript_1.default.factory.createStringLiteral(atom.type), ValueFactory_1.ValueFactory.TYPEOF(input));
        // TEMPLATE LITERAL VALUES
        if (meta.templates.length)
            if (AtomicPredicator_1.AtomicPredicator.template(meta))
                binaries.push({
                    expression: config.atomist(explore)((0, check_template_1.check_template)(meta.templates)(input))(input),
                    combined: false,
                });
        // NATIVE CLASSES
        for (const native of meta.natives)
            binaries.push({
                expression: (0, check_native_1.check_native)(native)(input),
                combined: false,
            });
        const instances = [];
        const prepare = (pre, expected) => (body) => instances.push({
            pre,
            expected,
            body,
        });
        // SETS
        if (meta.sets.length) {
            const install = prepare((0, check_native_1.check_native)("Set")(input), meta.sets
                .map((elem) => `Set<${elem.getName()}>`)
                .join(" | "));
            if (meta.sets.some((elem) => elem.any))
                install(null);
            else
                install(explore_sets(project)(config)(importer)(input, meta.sets, {
                    ...explore,
                    from: "array",
                }));
        }
        // MAPS
        if (meta.maps.length) {
            const install = prepare((0, check_native_1.check_native)("Map")(input), meta.maps
                .map(({ key, value }) => `Map<${key}, ${value}>`)
                .join(" | "));
            if (meta.maps.some((elem) => elem.key.any && elem.value.any))
                install(null);
            else
                install(explore_maps(project)(config)(importer)(input, meta.maps, {
                    ...explore,
                    from: "array",
                }));
        }
        // ARRAYS AND TUPLES
        if (meta.tuples.length + meta.arrays.length > 0) {
            const install = prepare(config.atomist(explore)({
                expected: [
                    ...meta.tuples.map((t) => t.type.name),
                    ...meta.arrays.map((a) => a.getName()),
                ].join(" | "),
                expression: ExpressionFactory_1.ExpressionFactory.isArray(input),
                conditions: [],
            })(input), [...meta.tuples, ...meta.arrays]
                .map((elem) => elem.type.name)
                .join(" | "));
            if (meta.arrays.length === 0)
                if (meta.tuples.length === 1)
                    install(decode_tuple(project)(config)(importer)(input, meta.tuples[0], {
                        ...explore,
                        from: "array",
                    }));
                // TUPLE ONLY
                else
                    install(explore_tuples(project)(config)(importer)(input, meta.tuples, {
                        ...explore,
                        from: "array",
                    }));
            else if (meta.arrays.some((elem) => elem.type.value.any))
                install(null);
            else if (meta.tuples.length === 0)
                if (meta.arrays.length === 1)
                    // ARRAY ONLY
                    install(decode_array(project)(config)(importer)(input, meta.arrays[0], {
                        ...explore,
                        from: "array",
                    }));
                else
                    install(explore_arrays(project)(config)(importer)(input, meta.arrays, {
                        ...explore,
                        from: "array",
                    }));
            else
                install(explore_arrays_and_tuples(project)(config)(importer)(input, [...meta.tuples, ...meta.arrays], explore));
        }
        // OBJECT
        if (meta.objects.length > 0)
            prepare(ExpressionFactory_1.ExpressionFactory.isObject({
                checkNull: true,
                checkArray: meta.objects.some((obj) => obj.properties.every((prop) => !prop.key.isSoleLiteral() ||
                    !prop.value.isRequired())),
            })(input), meta.objects.map((obj) => obj.name).join(" | "))(explore_objects(config)(importer)(input, meta, {
                ...explore,
                from: "object",
            }));
        if (instances.length) {
            const transformer = (merger) => (ins) => ins.body
                ? {
                    expression: merger(ins.pre, ins.body),
                    combined: true,
                }
                : {
                    expression: ins.pre,
                    combined: false,
                };
            if (instances.length === 1)
                binaries.push(transformer((pre, body) => config.combiner(explore)("and")(input, [pre, body].map((expression) => ({
                    expression,
                    combined: expression !== pre,
                })), meta.getName()))(instances[0]));
            else
                binaries.push({
                    expression: config.combiner(explore)("or")(input, instances.map(transformer(typescript_1.default.factory.createLogicalAnd)), meta.getName()),
                    combined: true,
                });
        }
        //----
        // COMBINE CONDITIONS
        //----
        return top.length && binaries.length
            ? config.combiner(explore)("and")(input, [
                ...top,
                {
                    expression: config.combiner(explore)("or")(input, binaries, meta.getName()),
                    combined: true,
                },
            ], meta.getName())
            : binaries.length
                ? config.combiner(explore)("or")(input, binaries, meta.getName())
                : config.success;
    };
    CheckerProgrammer.decode_object = (config) => (importer) => {
        const func = FeatureProgrammer_1.FeatureProgrammer.decode_object(config)(importer);
        return (input, obj, explore) => {
            obj.validated = true;
            return func(input, obj, explore);
        };
    };
    const decode_array = (project) => (config) => (importer) => (input, array, explore) => {
        if (array.type.recursive === false)
            return decode_array_inline(project)(config)(importer)(input, array, explore);
        explore = {
            ...explore,
            source: "function",
            from: "array",
        };
        return typescript_1.default.factory.createLogicalOr(typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier(importer.useLocal(`${config.prefix}a${array.type.index}`)), undefined, FeatureProgrammer_1.FeatureProgrammer.argumentsArray(config)({
            ...explore,
            source: "function",
            from: "array",
        })(input)), config.joiner.failure(input, array.type.name, explore));
    };
    const decode_array_inline = (project) => (config) => (importer) => (input, array, explore) => {
        const length = (0, check_array_length_1.check_array_length)(project)(array)(input);
        const main = FeatureProgrammer_1.FeatureProgrammer.decode_array({
            prefix: config.prefix,
            trace: config.trace,
            path: config.path,
            decoder: () => CheckerProgrammer.decode(project)(config)(importer),
        })(importer)(config.joiner.array)(input, array, explore);
        return length.expression === null && length.conditions.length === 0
            ? main
            : typescript_1.default.factory.createLogicalAnd(config.atomist(explore)(length)(input), main);
    };
    const decode_tuple = (project) => (config) => (importer) => (input, tuple, explore) => {
        if (tuple.type.recursive === false)
            return decode_tuple_inline(project)(config)(importer)(input, tuple.type, explore);
        explore = {
            ...explore,
            source: "function",
            from: "array",
        };
        return typescript_1.default.factory.createLogicalOr(typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier(importer.useLocal(`${config.prefix}t${tuple.type.index}`)), undefined, FeatureProgrammer_1.FeatureProgrammer.argumentsArray(config)({
            ...explore,
            source: "function",
        })(input)), config.joiner.failure(input, tuple.type.name, explore));
    };
    const decode_tuple_inline = (project) => (config) => (importer) => (input, tuple, explore) => {
        const binaries = tuple.elements
            .filter((meta) => meta.rest === null)
            .map((meta, index) => CheckerProgrammer.decode(project)(config)(importer)(typescript_1.default.factory.createElementAccessExpression(input, index), meta, {
            ...explore,
            from: "array",
            postfix: explore.postfix.length
                ? `${explore.postfix.slice(0, -1)}[${index}]"`
                : `"[${index}]"`,
        }));
        const rest = tuple.elements.length && tuple.elements.at(-1).rest !== null
            ? CheckerProgrammer.decode(project)(config)(importer)(typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(input)("slice"), undefined, [
                typescript_1.default.factory.createNumericLiteral(tuple.elements.length - 1),
            ]), (0, wrap_metadata_rest_tuple_1.wrap_metadata_rest_tuple)(tuple.elements.at(-1).rest), {
                ...explore,
                start: tuple.elements.length - 1,
            })
            : null;
        const arrayLength = typescript_1.default.factory.createPropertyAccessExpression(input, "length");
        return config.combiner(explore)("and")(input, [
            ...(rest === null
                ? tuple.elements.every((t) => t.optional === false)
                    ? [
                        {
                            combined: false,
                            expression: typescript_1.default.factory.createStrictEquality(arrayLength, typescript_1.default.factory.createNumericLiteral(tuple.elements.length)),
                        },
                    ]
                    : [
                        {
                            combined: false,
                            expression: typescript_1.default.factory.createLogicalAnd(typescript_1.default.factory.createLessThanEquals(typescript_1.default.factory.createNumericLiteral(tuple.elements.filter((t) => t.optional === false).length), arrayLength), typescript_1.default.factory.createGreaterThanEquals(typescript_1.default.factory.createNumericLiteral(tuple.elements.length), arrayLength)),
                        },
                    ]
                : []),
            ...(config.joiner.tuple
                ? [
                    {
                        expression: config.joiner.tuple(binaries),
                        combined: true,
                    },
                ]
                : binaries.map((expression) => ({
                    expression,
                    combined: true,
                }))),
            ...(rest !== null
                ? [
                    {
                        expression: rest,
                        combined: true,
                    },
                ]
                : []),
        ], `[${tuple.elements.map((t) => t.getName()).join(", ")}]`);
    };
    /* -----------------------------------------------------------
        UNION TYPE EXPLORERS
    ----------------------------------------------------------- */
    const explore_sets = (project) => (config) => (importer) => (input, sets, explore) => typescript_1.default.factory.createCallExpression(UnionExplorer_1.UnionExplorer.set({
        checker: CheckerProgrammer.decode(project)(config)(importer),
        decoder: decode_array(project)(config)(importer),
        empty: config.success,
        success: config.success,
        failure: (input, expected, explore) => typescript_1.default.factory.createReturnStatement(config.joiner.failure(input, expected, explore)),
    })([])(input, sets, explore), undefined, undefined);
    const explore_maps = (project) => (config) => (importer) => (input, maps, explore) => typescript_1.default.factory.createCallExpression(UnionExplorer_1.UnionExplorer.map({
        checker: (input, entry, explore) => {
            const func = CheckerProgrammer.decode(project)(config)(importer);
            return typescript_1.default.factory.createLogicalAnd(func(typescript_1.default.factory.createElementAccessExpression(input, 0), entry[0], {
                ...explore,
                postfix: `${explore.postfix}[0]`,
            }), func(typescript_1.default.factory.createElementAccessExpression(input, 1), entry[1], {
                ...explore,
                postfix: `${explore.postfix}[1]`,
            }));
        },
        decoder: decode_array(project)(config)(importer),
        empty: config.success,
        success: config.success,
        failure: (input, expected, explore) => typescript_1.default.factory.createReturnStatement(config.joiner.failure(input, expected, explore)),
    })([])(input, maps, explore), undefined, undefined);
    const explore_tuples = (project) => (config) => (importer) => (input, tuples, explore) => explore_array_like_union_types(config)(importer)(UnionExplorer_1.UnionExplorer.tuple({
        checker: decode_tuple(project)(config)(importer),
        decoder: decode_tuple(project)(config)(importer),
        empty: config.success,
        success: config.success,
        failure: (input, expected, explore) => typescript_1.default.factory.createReturnStatement(config.joiner.failure(input, expected, explore)),
    }))(input, tuples, explore);
    const explore_arrays = (project) => (config) => (importer) => (input, arrays, explore) => explore_array_like_union_types(config)(importer)(UnionExplorer_1.UnionExplorer.array({
        checker: CheckerProgrammer.decode(project)(config)(importer),
        decoder: decode_array(project)(config)(importer),
        empty: config.success,
        success: config.success,
        failure: (input, expected, explore) => typescript_1.default.factory.createReturnStatement(config.joiner.failure(input, expected, explore)),
    }))(input, arrays, explore);
    const explore_arrays_and_tuples = (project) => (config) => (importer) => (input, elements, explore) => explore_array_like_union_types(config)(importer)(UnionExplorer_1.UnionExplorer.array_or_tuple({
        checker: (front, target, explore, array) => target instanceof MetadataTuple_1.MetadataTuple
            ? decode_tuple(project)(config)(importer)(front, target, explore)
            : config.atomist(explore)({
                expected: elements
                    .map((elem) => elem instanceof MetadataArray_1.MetadataArray
                    ? elem.getName()
                    : elem.type.name)
                    .join(" | "),
                expression: CheckerProgrammer.decode(project)(config)(importer)(front, target, explore),
                conditions: [],
            })(array),
        decoder: (input, target, explore) => target instanceof MetadataTuple_1.MetadataTuple
            ? decode_tuple(project)(config)(importer)(input, target, explore)
            : decode_array(project)(config)(importer)(input, target, explore),
        empty: config.success,
        success: config.success,
        failure: (input, expected, explore) => typescript_1.default.factory.createReturnStatement(config.joiner.failure(input, expected, explore)),
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
        return typescript_1.default.factory.createLogicalOr(typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier(importer.emplaceUnion(config.prefix, elements.map((e) => e.type.name).join(" | "), () => arrow(FeatureProgrammer_1.FeatureProgrammer.parameterDeclarations(config)(TypeFactory_1.TypeFactory.keyword("any"))(typescript_1.default.factory.createIdentifier("input")))({
            ...explore,
            postfix: "",
        })(typescript_1.default.factory.createIdentifier("input")))), undefined, FeatureProgrammer_1.FeatureProgrammer.argumentsArray(config)(explore)(input)), config.joiner.failure(input, elements.map((e) => e.type.name).join(" | "), explore));
    };
    const explore_objects = (config) => (importer) => (input, meta, explore) => meta.objects.length === 1
        ? CheckerProgrammer.decode_object(config)(importer)(input, meta.objects[0], explore)
        : typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier(importer.useLocal(`${config.prefix}u${meta.union_index}`)), undefined, FeatureProgrammer_1.FeatureProgrammer.argumentsArray(config)(explore)(input));
})(CheckerProgrammer || (exports.CheckerProgrammer = CheckerProgrammer = {}));
const create_add = (binaries) => (defaultInput) => (exact, left, right = defaultInput) => {
    const factory = exact
        ? typescript_1.default.factory.createStrictEquality
        : typescript_1.default.factory.createStrictInequality;
    binaries.push({
        expression: factory(left, right),
        combined: false,
    });
};
