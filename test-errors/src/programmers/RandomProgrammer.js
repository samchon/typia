"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomProgrammer = void 0;
const typescript_1 = __importDefault(require("typescript"));
const ExpressionFactory_1 = require("../factories/ExpressionFactory");
const IdentifierFactory_1 = require("../factories/IdentifierFactory");
const MetadataCollection_1 = require("../factories/MetadataCollection");
const MetadataFactory_1 = require("../factories/MetadataFactory");
const StatementFactory_1 = require("../factories/StatementFactory");
const TemplateFactory_1 = require("../factories/TemplateFactory");
const TypeFactory_1 = require("../factories/TypeFactory");
const Metadata_1 = require("../schemas/metadata/Metadata");
const MetadataArray_1 = require("../schemas/metadata/MetadataArray");
const MetadataArrayType_1 = require("../schemas/metadata/MetadataArrayType");
const MetadataAtomic_1 = require("../schemas/metadata/MetadataAtomic");
const MetadataTuple_1 = require("../schemas/metadata/MetadataTuple");
const MetadataTupleType_1 = require("../schemas/metadata/MetadataTupleType");
const TransformerError_1 = require("../transformers/TransformerError");
const Escaper_1 = require("../utils/Escaper");
const FunctionImporeter_1 = require("./helpers/FunctionImporeter");
const RandomJoiner_1 = require("./helpers/RandomJoiner");
const RandomRanger_1 = require("./helpers/RandomRanger");
const random_custom_1 = require("./internal/random_custom");
var RandomProgrammer;
(function (RandomProgrammer) {
    RandomProgrammer.write = (project) => (modulo) => (init) => {
        const importer = new FunctionImporeter_1.FunctionImporter(modulo.getText());
        return (type, name) => {
            // INITIALIZE METADATA
            const collection = new MetadataCollection_1.MetadataCollection();
            const result = MetadataFactory_1.MetadataFactory.analyze(project.checker)({
                escape: false,
                constant: true,
                absorb: true,
                validate: (meta) => {
                    const output = [];
                    if (meta.natives.some((n) => n === "WeakSet"))
                        output.push(`WeakSet is not supported.`);
                    else if (meta.natives.some((n) => n === "WeakMap"))
                        output.push(`WeakMap is not supported.`);
                    return output;
                },
            })(collection)(type);
            if (result.success === false)
                throw TransformerError_1.TransformerError.from(`typia.${importer.method}`)(result.errors);
            // GENERATE FUNCTION
            const functions = {
                objects: write_object_functions(importer)(collection),
                arrays: write_array_functions(importer)(collection),
                tuples: write_tuple_functions(importer)(collection),
            };
            const output = decode(importer)({
                function: false,
                recursive: false,
            })(result.data);
            return typescript_1.default.factory.createArrowFunction(undefined, undefined, [
                IdentifierFactory_1.IdentifierFactory.parameter("generator", typescript_1.default.factory.createTypeReferenceNode("Partial<typia.IRandomGenerator>"), init ??
                    typescript_1.default.factory.createToken(typescript_1.default.SyntaxKind.QuestionToken)),
            ], typescript_1.default.factory.createTypeReferenceNode(`typia.Resolved<${name ??
                TypeFactory_1.TypeFactory.getFullName(project.checker)(type)}>`), undefined, typescript_1.default.factory.createBlock([
                ...importer.declare(modulo),
                ...functions.objects,
                ...functions.arrays,
                ...functions.tuples,
                typescript_1.default.factory.createReturnStatement(output),
            ], true));
        };
    };
    const write_object_functions = (importer) => (collection) => collection.objects().map((obj, i) => StatementFactory_1.StatementFactory.constant(PREFIX.object(i), typescript_1.default.factory.createArrowFunction(undefined, undefined, [
        IdentifierFactory_1.IdentifierFactory.parameter("_recursive", TypeFactory_1.TypeFactory.keyword("boolean"), typescript_1.default.factory.createIdentifier(String(obj.recursive))),
        IdentifierFactory_1.IdentifierFactory.parameter("_depth", TypeFactory_1.TypeFactory.keyword("number"), typescript_1.default.factory.createNumericLiteral(0)),
    ], TypeFactory_1.TypeFactory.keyword("any"), undefined, RandomJoiner_1.RandomJoiner.object(COALESCE(importer))(decode(importer)({
        recursive: obj.recursive,
        function: true,
    }))(obj))));
    const write_array_functions = (importer) => (collection) => collection
        .arrays()
        .filter((a) => a.recursive)
        .map((array, i) => StatementFactory_1.StatementFactory.constant(PREFIX.array(i), typescript_1.default.factory.createArrowFunction(undefined, undefined, [
        IdentifierFactory_1.IdentifierFactory.parameter("length", TypeFactory_1.TypeFactory.keyword("number")),
        IdentifierFactory_1.IdentifierFactory.parameter("_recursive", TypeFactory_1.TypeFactory.keyword("boolean"), typescript_1.default.factory.createTrue()),
        IdentifierFactory_1.IdentifierFactory.parameter("_depth", TypeFactory_1.TypeFactory.keyword("number"), typescript_1.default.factory.createNumericLiteral(0)),
    ], TypeFactory_1.TypeFactory.keyword("any"), undefined, RandomJoiner_1.RandomJoiner.array(COALESCE(importer))(decode(importer)({
        recursive: true,
        function: true,
    }))({
        recursive: true,
        function: true,
    })(typescript_1.default.factory.createIdentifier("length"))(array.value))));
    const write_tuple_functions = (importer) => (collection) => collection
        .tuples()
        .filter((a) => a.recursive)
        .map((tuple, i) => StatementFactory_1.StatementFactory.constant(PREFIX.tuple(i), typescript_1.default.factory.createArrowFunction(undefined, undefined, [
        IdentifierFactory_1.IdentifierFactory.parameter("_recursive", TypeFactory_1.TypeFactory.keyword("boolean"), typescript_1.default.factory.createTrue()),
        IdentifierFactory_1.IdentifierFactory.parameter("_depth", TypeFactory_1.TypeFactory.keyword("number"), typescript_1.default.factory.createNumericLiteral(0)),
    ], TypeFactory_1.TypeFactory.keyword("any"), undefined, RandomJoiner_1.RandomJoiner.tuple(decode(importer)({
        function: true,
        recursive: true,
    }))(tuple.elements))));
    /* -----------------------------------------------------------
        DECODERS
    ----------------------------------------------------------- */
    const decode = (importer) => (explore) => (meta) => {
        const expressions = [];
        if (meta.any)
            expressions.push(typescript_1.default.factory.createStringLiteral("any type used..."));
        // NULL COALESCING
        if (meta.isRequired() === false || meta.functional === true)
            expressions.push(typescript_1.default.factory.createIdentifier("undefined"));
        if (meta.nullable === true)
            expressions.push(typescript_1.default.factory.createNull());
        // CONSTANT TYPES
        for (const constant of meta.constants)
            for (const value of constant.values)
                expressions.push(decode_atomic(value));
        // ATOMIC VARIABLES
        for (const template of meta.templates)
            expressions.push(decode_template(importer)(explore)(template));
        for (const atomic of meta.atomics)
            if (atomic.type === "boolean")
                expressions.push(decode_boolean(importer));
            else if (atomic.type === "number")
                expressions.push(...decode_number(importer)(atomic));
            else if (atomic.type === "string")
                expressions.push(...decode_string(importer)(atomic));
            else if (atomic.type === "bigint")
                expressions.push(...decode_bigint(importer)(atomic));
        // INSTANCE TYPES
        if (meta.escaped)
            expressions.push(decode(importer)(explore)(meta.escaped.returns));
        for (const array of meta.arrays)
            expressions.push(...decode_array(importer)(explore)(array));
        for (const tuple of meta.tuples)
            expressions.push(decode_tuple(importer)(explore)(tuple));
        for (const o of meta.objects)
            expressions.push(decode_object(importer)(explore)(o));
        for (const native of meta.natives)
            expressions.push(decode_native(importer)(native));
        for (const set of meta.sets)
            expressions.push(decode_set(importer)(explore)(set));
        for (const map of meta.maps)
            expressions.push(decode_map(importer)(explore)(map));
        // PICK UP A TYPE
        if (expressions.length === 1)
            return expressions[0];
        return typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createCallExpression(importer.use("pick"), undefined, [
            typescript_1.default.factory.createArrayLiteralExpression(expressions.map((expr) => typescript_1.default.factory.createArrowFunction(undefined, undefined, [], undefined, undefined, expr)), true),
        ]), undefined, undefined);
    };
    const decode_boolean = (importer) => typescript_1.default.factory.createCallExpression(COALESCE(importer)("boolean"), undefined, undefined);
    const decode_atomic = (value) => typeof value === "boolean"
        ? typescript_1.default.factory.createIdentifier(value.toString())
        : typeof value === "number"
            ? typescript_1.default.factory.createNumericLiteral(value)
            : typeof value === "string"
                ? typescript_1.default.factory.createStringLiteral(value)
                : ExpressionFactory_1.ExpressionFactory.bigint(Number(value));
    const decode_template = (importer) => (explore) => (template) => TemplateFactory_1.TemplateFactory.generate(template.map((meta) => decode(importer)(explore)(meta)));
    const decode_number = (importer) => (atomic) => (atomic.tags.length ? atomic.tags : [[]]).map((tags) => {
        const type = tags.find((t) => t.kind === "type" &&
            (t.value === "int32" || t.value === "int64"))
            ? "int"
            : tags.find((t) => t.kind === "type" &&
                (t.value === "uint32" || t.value === "uint64"))
                ? "uint"
                : "double";
        const multiply = tags.find((t) => t.kind === "multipleOf");
        return (0, random_custom_1.random_custom)(COALESCE(importer))("number")(tags)(RandomRanger_1.RandomRanger.number({
            type,
            transform: (value) => typescript_1.default.factory.createNumericLiteral(value),
            setter: (args) => typescript_1.default.factory.createCallExpression(type !== "double" || multiply !== undefined
                ? COALESCE(importer)("integer")
                : COALESCE(importer)("number"), undefined, args.map((val) => typescript_1.default.factory.createNumericLiteral(val))),
        })({
            minimum: 0,
            maximum: 100,
            gap: 10,
        })(tags));
    });
    const decode_bigint = (importer) => (atomic) => (atomic.tags.length ? atomic.tags : [[]]).map((tags) => (0, random_custom_1.random_custom)(COALESCE(importer))("bigint")(tags)(RandomRanger_1.RandomRanger.number({
        type: tags.find((t) => t.kind === "type" &&
            (t.value === "uint" || t.value === "uint64"))
            ? "uint"
            : "int",
        transform: (value) => ExpressionFactory_1.ExpressionFactory.bigint(value),
        setter: (args) => typescript_1.default.factory.createCallExpression(COALESCE(importer)("bigint"), undefined, args.map((value) => ExpressionFactory_1.ExpressionFactory.bigint(value))),
    })({
        minimum: 0,
        maximum: 100,
        gap: 10,
    })(tags)));
    const decode_string = (importer) => (atomic) => (atomic.tags.length ? atomic.tags : [[]]).map((tags) => (0, random_custom_1.random_custom)(COALESCE(importer))("string")(tags)((() => {
        for (const t of tags)
            if (t.kind === "format")
                return typescript_1.default.factory.createCallExpression(COALESCE(importer)(t.value === "date-time"
                    ? "datetime"
                    : t.value), undefined, undefined);
            else if (t.kind === "pattern")
                return typescript_1.default.factory.createCallExpression(COALESCE(importer)("pattern"), undefined, [
                    typescript_1.default.factory.createIdentifier(`/${t.value}/`),
                ]);
        const tail = RandomRanger_1.RandomRanger.length(COALESCE(importer))({
            minimum: 5,
            maximum: 25,
            gap: 5,
        })({
            minimum: "minLength",
            maximum: "maxLength",
        })(tags);
        return typescript_1.default.factory.createCallExpression(COALESCE(importer)("string"), undefined, tail ? [tail] : undefined);
    })()));
    const decode_array = (importer) => (explore) => (array) => {
        const lengths = (array.tags.length ? array.tags : [[]]).map((tags) => RandomRanger_1.RandomRanger.length(COALESCE(importer))({
            minimum: 0,
            maximum: 3,
            gap: 3,
        })({
            minimum: "minItems",
            maximum: "maxItems",
        })(tags));
        if (array.type.recursive)
            return lengths.map((len) => typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier(importer.useLocal(PREFIX.array(array.type.index))), undefined, [
                len ?? COALESCE(importer)("length"),
                typescript_1.default.factory.createTrue(),
                explore.recursive
                    ? typescript_1.default.factory.createAdd(typescript_1.default.factory.createNumericLiteral(1), typescript_1.default.factory.createIdentifier("_depth"))
                    : typescript_1.default.factory.createNumericLiteral(0),
            ]));
        return lengths.map((len) => {
            const expr = RandomJoiner_1.RandomJoiner.array(COALESCE(importer))(decode(importer)(explore))(explore)(len)(array.type.value);
            return explore.recursive
                ? typescript_1.default.factory.createConditionalExpression(typescript_1.default.factory.createLogicalAnd(typescript_1.default.factory.createIdentifier("_recursive"), typescript_1.default.factory.createLessThan(typescript_1.default.factory.createNumericLiteral(5), typescript_1.default.factory.createIdentifier("_depth"))), undefined, typescript_1.default.factory.createIdentifier("[]"), undefined, expr)
                : expr;
        });
    };
    const decode_tuple = (importer) => (explore) => (tuple) => tuple.type.recursive
        ? typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier(importer.useLocal(PREFIX.tuple(tuple.type.index))), undefined, [
            typescript_1.default.factory.createTrue(),
            explore.recursive
                ? typescript_1.default.factory.createAdd(typescript_1.default.factory.createNumericLiteral(1), typescript_1.default.factory.createIdentifier("_depth"))
                : typescript_1.default.factory.createNumericLiteral(0),
        ])
        : RandomJoiner_1.RandomJoiner.tuple(decode(importer)(explore))(tuple.type.elements);
    const decode_object = (importer) => (explore) => (object) => typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier(importer.useLocal(PREFIX.object(object.index))), undefined, explore.function
        ? [
            explore.recursive
                ? typescript_1.default.factory.createTrue()
                : typescript_1.default.factory.createIdentifier("_recursive"),
            typescript_1.default.factory.createConditionalExpression(typescript_1.default.factory.createIdentifier("_recursive"), undefined, typescript_1.default.factory.createAdd(typescript_1.default.factory.createNumericLiteral(1), typescript_1.default.factory.createIdentifier("_depth")), undefined, typescript_1.default.factory.createIdentifier("_depth")),
        ]
        : undefined);
    /* -----------------------------------------------------------
        NATIVE CLASSES
    ----------------------------------------------------------- */
    const decode_set = (importer) => (explore) => (meta) => typescript_1.default.factory.createNewExpression(typescript_1.default.factory.createIdentifier("Set"), undefined, [
        decode_array(importer)(explore)(MetadataArray_1.MetadataArray.create({
            tags: [],
            type: MetadataArrayType_1.MetadataArrayType.create({
                value: meta,
                recursive: false,
                index: null,
                nullables: [],
                name: `Set<${meta.getName()}>`,
            }),
        }))[0],
    ]);
    const decode_map = (importer) => (explore) => (map) => typescript_1.default.factory.createNewExpression(typescript_1.default.factory.createIdentifier("Map"), undefined, [
        decode_array(importer)(explore)(MetadataArray_1.MetadataArray.create({
            tags: [],
            type: MetadataArrayType_1.MetadataArrayType.create({
                name: `Map<${map.key.getName()}, ${map.value.getName()}>`,
                index: null,
                recursive: false,
                nullables: [],
                value: Metadata_1.Metadata.create({
                    ...Metadata_1.Metadata.initialize(),
                    tuples: [
                        (() => {
                            const type = MetadataTupleType_1.MetadataTupleType.create({
                                name: `[${map.key.getName()}, ${map.value.getName()}]`,
                                index: null,
                                recursive: false,
                                nullables: [],
                                elements: [
                                    map.key,
                                    map.value,
                                ],
                            });
                            type.of_map = true;
                            return MetadataTuple_1.MetadataTuple.create({
                                type,
                                tags: [],
                            });
                        })(),
                    ],
                }),
            }),
        }))[0],
    ]);
    const decode_native = (importer) => (type) => {
        if (type === "Boolean")
            return decode_boolean(importer);
        else if (type === "Number")
            return decode_number(importer)(MetadataAtomic_1.MetadataAtomic.create({
                type: "number",
                tags: [],
            }))[0];
        else if (type === "String")
            return decode_string(importer)(MetadataAtomic_1.MetadataAtomic.create({
                type: "string",
                tags: [],
            }))[0];
        else if (type === "Date")
            return decode_native_date(importer);
        else if (type === "Uint8Array" ||
            type === "Uint8ClampedArray" ||
            type === "Uint16Array" ||
            type === "Uint32Array" ||
            type === "BigUint64Array" ||
            type === "Int8Array" ||
            type === "Int16Array" ||
            type === "Int32Array" ||
            type === "BigInt64Array" ||
            type === "Float32Array" ||
            type === "Float64Array")
            return decode_native_byte_array(importer)(type);
        else if (type === "ArrayBuffer" || type === "SharedArrayBuffer")
            return decode_native_array_buffer(importer)(type);
        else if (type === "DataView")
            return decode_native_data_view(importer);
        else
            return typescript_1.default.factory.createNewExpression(typescript_1.default.factory.createIdentifier(type), undefined, []);
    };
    const decode_native_date = (importer) => typescript_1.default.factory.createNewExpression(typescript_1.default.factory.createIdentifier("Date"), undefined, [
        typescript_1.default.factory.createCallExpression(COALESCE(importer)("datetime"), undefined, []),
    ]);
    const decode_native_byte_array = (importer) => (type) => {
        new BigInt64Array();
        const [minimum, maximum] = (() => {
            if (type === "Uint8Array" || type === "Uint8ClampedArray")
                return [0, 255];
            else if (type === "Uint16Array")
                return [0, 65535];
            else if (type === "Uint32Array")
                return [0, 4294967295];
            else if (type === "BigUint64Array")
                return [0, 18446744073709551615];
            else if (type === "Int8Array")
                return [-128, 127];
            else if (type === "Int16Array")
                return [-32768, 32767];
            else if (type === "Int32Array")
                return [-2147483648, 2147483647];
            else if (type === "BigInt64Array")
                return [-9223372036854775808, 9223372036854775807];
            else if (type === "Float32Array")
                return [-1.175494351e38, 3.4028235e38];
            return [Number.MIN_VALUE, Number.MAX_VALUE];
        })();
        const literal = type === "BigInt64Array" || type === "BigUint64Array"
            ? ExpressionFactory_1.ExpressionFactory.bigint
            : typescript_1.default.factory.createNumericLiteral;
        return typescript_1.default.factory.createNewExpression(typescript_1.default.factory.createIdentifier(type), [], [
            typescript_1.default.factory.createCallExpression(COALESCE(importer)("array"), undefined, [
                typescript_1.default.factory.createArrowFunction(undefined, undefined, [], TypeFactory_1.TypeFactory.keyword("any"), undefined, typescript_1.default.factory.createCallExpression(COALESCE(importer)(type === "Float32Array" ||
                    type === "Float64Array"
                    ? "number"
                    : type === "BigInt64Array" ||
                        type === "BigUint64Array"
                        ? "bigint"
                        : "integer"), undefined, [literal(minimum), literal(maximum)])),
            ]),
        ]);
    };
    const decode_native_array_buffer = (importer) => (type) => type === "ArrayBuffer"
        ? IdentifierFactory_1.IdentifierFactory.access(decode_native_byte_array(importer)("Uint8Array"))("buffer")
        : ExpressionFactory_1.ExpressionFactory.selfCall(typescript_1.default.factory.createBlock([
            StatementFactory_1.StatementFactory.constant("length", typescript_1.default.factory.createCallExpression(COALESCE(importer)("integer"), undefined, [])),
            StatementFactory_1.StatementFactory.constant("buffer", typescript_1.default.factory.createNewExpression(typescript_1.default.factory.createIdentifier("SharedArrayBuffer"), [], [typescript_1.default.factory.createIdentifier("length")])),
            StatementFactory_1.StatementFactory.constant("bytes", typescript_1.default.factory.createNewExpression(typescript_1.default.factory.createIdentifier("Uint8Array"), [], [typescript_1.default.factory.createIdentifier("buffer")])),
            typescript_1.default.factory.createExpressionStatement(typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(typescript_1.default.factory.createIdentifier("bytes"))("set"), undefined, [
                typescript_1.default.factory.createCallExpression(COALESCE(importer)("array"), undefined, [
                    typescript_1.default.factory.createArrowFunction(undefined, undefined, [], TypeFactory_1.TypeFactory.keyword("any"), undefined, typescript_1.default.factory.createCallExpression(COALESCE(importer)("integer"), undefined, [
                        typescript_1.default.factory.createNumericLiteral(0),
                        typescript_1.default.factory.createNumericLiteral(255),
                    ])),
                    typescript_1.default.factory.createIdentifier("length"),
                ]),
                typescript_1.default.factory.createNumericLiteral(0),
            ])),
            typescript_1.default.factory.createReturnStatement(typescript_1.default.factory.createIdentifier("buffer")),
        ], true));
    const decode_native_data_view = (importer) => typescript_1.default.factory.createNewExpression(typescript_1.default.factory.createIdentifier("DataView"), [], [
        IdentifierFactory_1.IdentifierFactory.access(decode_native_byte_array(importer)("Uint8Array"))("buffer"),
    ]);
})(RandomProgrammer || (exports.RandomProgrammer = RandomProgrammer = {}));
const PREFIX = {
    object: (i) => `$ro${i}`,
    array: (i) => `$ra${i}`,
    tuple: (i) => `$rt${i}`,
};
const COALESCE = (importer) => (name) => ExpressionFactory_1.ExpressionFactory.coalesce(Escaper_1.Escaper.variable(name)
    ? typescript_1.default.factory.createPropertyAccessChain(typescript_1.default.factory.createIdentifier("generator"), typescript_1.default.factory.createToken(typescript_1.default.SyntaxKind.QuestionDotToken), typescript_1.default.factory.createIdentifier(name))
    : typescript_1.default.factory.createElementAccessChain(typescript_1.default.factory.createIdentifier("generator"), typescript_1.default.factory.createToken(typescript_1.default.SyntaxKind.QuestionDotToken), typescript_1.default.factory.createStringLiteral(name)))(IdentifierFactory_1.IdentifierFactory.access(importer.use("generator"))(name));
