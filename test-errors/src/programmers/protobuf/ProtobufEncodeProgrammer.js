"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtobufEncodeProgrammer = void 0;
const typescript_1 = __importDefault(require("typescript"));
const ExpressionFactory_1 = require("../../factories/ExpressionFactory");
const IdentifierFactory_1 = require("../../factories/IdentifierFactory");
const MetadataCollection_1 = require("../../factories/MetadataCollection");
const NumericRangeFactory_1 = require("../../factories/NumericRangeFactory");
const ProtobufFactory_1 = require("../../factories/ProtobufFactory");
const StatementFactory_1 = require("../../factories/StatementFactory");
const TypeFactory_1 = require("../../factories/TypeFactory");
const IsProgrammer_1 = require("../IsProgrammer");
const FunctionImporeter_1 = require("../helpers/FunctionImporeter");
const ProtobufUtil_1 = require("../helpers/ProtobufUtil");
const UnionPredicator_1 = require("../helpers/UnionPredicator");
const decode_union_object_1 = require("../internal/decode_union_object");
var ProtobufEncodeProgrammer;
(function (ProtobufEncodeProgrammer) {
    ProtobufEncodeProgrammer.write = (project) => (modulo) => (type, name) => {
        const importer = new FunctionImporeter_1.FunctionImporter(modulo.getText());
        const collection = new MetadataCollection_1.MetadataCollection();
        const meta = ProtobufFactory_1.ProtobufFactory.metadata(modulo.getText())(project.checker)(collection)(type);
        const callEncoder = (writer) => (factory) => StatementFactory_1.StatementFactory.constant(writer, typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("encoder"), undefined, [factory]));
        const block = [
            StatementFactory_1.StatementFactory.constant("encoder", write_encoder(project)(importer)(collection)(meta)),
            callEncoder("sizer")(typescript_1.default.factory.createNewExpression(importer.use("Sizer"), undefined, [])),
            callEncoder("writer")(typescript_1.default.factory.createNewExpression(importer.use("Writer"), undefined, [typescript_1.default.factory.createIdentifier("sizer")])),
            typescript_1.default.factory.createReturnStatement(typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(WRITER())("buffer"), undefined, undefined)),
        ];
        return typescript_1.default.factory.createArrowFunction(undefined, undefined, [
            IdentifierFactory_1.IdentifierFactory.parameter("input", typescript_1.default.factory.createTypeReferenceNode(name ??
                TypeFactory_1.TypeFactory.getFullName(project.checker)(type))),
        ], typescript_1.default.factory.createTypeReferenceNode("Uint8Array"), undefined, typescript_1.default.factory.createBlock([...importer.declare(modulo, false), ...block], true));
    };
    const write_encoder = (project) => (importer) => (collection) => (meta) => {
        const functors = collection
            .objects()
            .filter((obj) => ProtobufUtil_1.ProtobufUtil.isStaticObject(obj))
            .map((obj) => StatementFactory_1.StatementFactory.constant(`${PREFIX}o${obj.index}`, write_object_function(project)(importer)(typescript_1.default.factory.createIdentifier("input"), obj, {
            source: "function",
            from: "object",
            tracable: false,
            postfix: "",
        })));
        const main = decode(project)(importer)(null)(typescript_1.default.factory.createIdentifier("input"), meta, {
            source: "top",
            from: "top",
            tracable: false,
            postfix: "",
        });
        return typescript_1.default.factory.createArrowFunction(undefined, undefined, [IdentifierFactory_1.IdentifierFactory.parameter("writer")], TypeFactory_1.TypeFactory.keyword("any"), undefined, typescript_1.default.factory.createBlock([
            ...importer.declareUnions(),
            ...functors,
            ...IsProgrammer_1.IsProgrammer.write_function_statements(project)(importer)(collection),
            ...main.statements,
            typescript_1.default.factory.createReturnStatement(typescript_1.default.factory.createIdentifier("writer")),
        ], true));
    };
    const write_object_function = (project) => (importer) => (input, obj, explore) => {
        let index = 1;
        const body = obj.properties
            .map((p) => {
            const block = decode(project)(importer)(index)(IdentifierFactory_1.IdentifierFactory.access(input)(p.key.getSoleLiteral()), p.value, explore);
            index += ProtobufUtil_1.ProtobufUtil.size(p.value);
            return [
                typescript_1.default.factory.createExpressionStatement(typescript_1.default.factory.createIdentifier(`// property "${p.key.getSoleLiteral()}"`)),
                ...block.statements,
            ];
        })
            .flat();
        return typescript_1.default.factory.createArrowFunction(undefined, undefined, [IdentifierFactory_1.IdentifierFactory.parameter("input")], TypeFactory_1.TypeFactory.keyword("any"), undefined, typescript_1.default.factory.createBlock(body, true));
    };
    /* -----------------------------------------------------------
        DECODERS
    ----------------------------------------------------------- */
    const decode = (project) => (importer) => (index) => (input, meta, explore) => {
        const wrapper = meta.isRequired() && meta.nullable === false
            ? (block) => block
            : meta.isRequired() === false && meta.nullable === false
                ? (block) => typescript_1.default.factory.createBlock([
                    typescript_1.default.factory.createIfStatement(typescript_1.default.factory.createLogicalAnd(typescript_1.default.factory.createInequality(typescript_1.default.factory.createIdentifier("undefined"), input), typescript_1.default.factory.createInequality(typescript_1.default.factory.createNull(), input)), block),
                ], true)
                : meta.isRequired() === false
                    ? (block) => typescript_1.default.factory.createBlock([
                        typescript_1.default.factory.createIfStatement(typescript_1.default.factory.createInequality(typescript_1.default.factory.createIdentifier("undefined"), input), block),
                    ], true)
                    : (block) => typescript_1.default.factory.createBlock([
                        typescript_1.default.factory.createIfStatement(typescript_1.default.factory.createInequality(typescript_1.default.factory.createNull(), input), block),
                    ], true);
        // STARTS FROM ATOMIC TYPES
        const unions = [];
        const numbers = ProtobufUtil_1.ProtobufUtil.getNumbers(meta);
        const bigints = ProtobufUtil_1.ProtobufUtil.getBigints(meta);
        for (const atom of ProtobufUtil_1.ProtobufUtil.getAtomics(meta))
            if (atom === "bool")
                unions.push({
                    type: "bool",
                    is: () => typescript_1.default.factory.createStrictEquality(typescript_1.default.factory.createStringLiteral("boolean"), typescript_1.default.factory.createTypeOfExpression(input)),
                    value: (index) => decode_bool(index)(input),
                });
            else if (atom === "int32" ||
                atom === "uint32" ||
                atom === "float" ||
                atom === "double")
                unions.push(decode_number(project)(numbers)(atom)(input));
            else if (atom === "int64" || atom === "uint64")
                if (numbers.some((n) => n === atom))
                    unions.push(decode_number(project)(numbers)(atom)(input));
                else
                    unions.push(decode_bigint(project)(bigints)(atom)(input));
            else if (atom === "string")
                unions.push({
                    type: "string",
                    is: () => typescript_1.default.factory.createStrictEquality(typescript_1.default.factory.createStringLiteral("string"), typescript_1.default.factory.createTypeOfExpression(input)),
                    value: (index) => decode_bytes("string")(index)(input),
                });
        // CONSIDER BYTES
        if (meta.natives.length)
            unions.push({
                type: "bytes",
                is: () => ExpressionFactory_1.ExpressionFactory.isInstanceOf("Uint8Array")(input),
                value: (index) => decode_bytes("bytes")(index)(input),
            });
        // CONSIDER ARRAYS
        if (meta.arrays.length)
            unions.push({
                type: "array",
                is: () => ExpressionFactory_1.ExpressionFactory.isArray(input),
                value: (index) => decode_array(project)(importer)(index)(input, meta.arrays[0], {
                    ...explore,
                    from: "array",
                }),
            });
        // CONSIDER MAPS
        if (meta.maps.length)
            unions.push({
                type: "map",
                is: () => ExpressionFactory_1.ExpressionFactory.isInstanceOf("Map")(input),
                value: (index) => decode_map(project)(importer)(index)(input, meta.maps[0], {
                    ...explore,
                    from: "array",
                }),
            });
        // CONSIDER OBJECTS
        if (meta.objects.length)
            unions.push({
                type: "object",
                is: () => ExpressionFactory_1.ExpressionFactory.isObject({
                    checkNull: true,
                    checkArray: false,
                })(input),
                value: (index) => explore_objects(project)(importer)(0)(index)(input, meta.objects, {
                    ...explore,
                    from: "object",
                }),
            });
        // RETURNS
        if (unions.length === 1)
            return wrapper(unions[0].value(index));
        else
            return wrapper(iterate(importer)(index)(unions)(meta.getName())(input));
    };
    const iterate = (importer) => (index) => (unions) => (expected) => (input) => typescript_1.default.factory.createBlock([
        unions
            .map((u, i) => typescript_1.default.factory.createIfStatement(u.is(), u.value(index ? index + i : null), i === unions.length - 1
            ? create_throw_error(importer)(expected)(input)
            : undefined))
            .reverse()
            .reduce((a, b) => typescript_1.default.factory.createIfStatement(b.expression, b.thenStatement, a)),
    ], true);
    const decode_map = (project) => (importer) => (index) => (input, map, explore) => {
        const each = [
            typescript_1.default.factory.createExpressionStatement(decode_tag(2 /* ProtobufWire.LEN */)(index)),
            typescript_1.default.factory.createExpressionStatement(typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(WRITER())("fork"), undefined, undefined)),
            ...decode(project)(importer)(1)(typescript_1.default.factory.createIdentifier("key"), map.key, explore).statements,
            ...decode(project)(importer)(2)(typescript_1.default.factory.createIdentifier("value"), map.value, explore).statements,
            typescript_1.default.factory.createExpressionStatement(typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(WRITER())("ldelim"), undefined, undefined)),
        ];
        return typescript_1.default.factory.createBlock([
            typescript_1.default.factory.createForOfStatement(undefined, StatementFactory_1.StatementFactory.entry("key")("value"), input, typescript_1.default.factory.createBlock(each)),
        ], true);
    };
    const decode_object = (project) => (importer) => (index) => (input, object, explore) => {
        const top = object.properties[0];
        if (top.key.isSoleLiteral() === false)
            return decode_map(project)(importer)(index)(typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("Object.entries"), [], [input]), top, explore);
        return typescript_1.default.factory.createBlock([
            typescript_1.default.factory.createIdentifier(`//${index !== null ? ` ${index} -> ` : ""}${object.name}`),
            ...(index !== null
                ? [
                    decode_tag(2 /* ProtobufWire.LEN */)(index),
                    typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(WRITER())("fork"), undefined, undefined),
                ]
                : []),
            typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier(importer.useLocal(`${PREFIX}o${object.index}`)), [], [input]),
            ...(index !== null
                ? [
                    typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(WRITER())("ldelim"), undefined, undefined),
                ]
                : []),
        ].map((expr) => typescript_1.default.factory.createExpressionStatement(expr)), true);
    };
    const decode_array = (project) => (importer) => (index) => (input, array, explore) => {
        const wire = get_standalone_wire(array.type.value);
        const forLoop = (index) => typescript_1.default.factory.createForOfStatement(undefined, typescript_1.default.factory.createVariableDeclarationList([typescript_1.default.factory.createVariableDeclaration("elem")], typescript_1.default.NodeFlags.Const), input, decode(project)(importer)(index)(typescript_1.default.factory.createIdentifier("elem"), array.type.value, explore));
        const length = (block) => typescript_1.default.factory.createBlock([
            typescript_1.default.factory.createIfStatement(typescript_1.default.factory.createStrictInequality(typescript_1.default.factory.createNumericLiteral(0), IdentifierFactory_1.IdentifierFactory.access(input)("length")), block),
        ], true);
        if (wire === 2 /* ProtobufWire.LEN */)
            return length(typescript_1.default.factory.createBlock([forLoop(index)], true));
        return length(typescript_1.default.factory.createBlock([
            typescript_1.default.factory.createExpressionStatement(decode_tag(2 /* ProtobufWire.LEN */)(index)),
            typescript_1.default.factory.createExpressionStatement(typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(WRITER())("fork"), undefined, undefined)),
            forLoop(null),
            typescript_1.default.factory.createExpressionStatement(typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(WRITER())("ldelim"), undefined, undefined)),
        ], true));
    };
    const decode_bool = (index) => (input) => typescript_1.default.factory.createBlock([
        ...(index !== null
            ? [decode_tag(0 /* ProtobufWire.VARIANT */)(index)]
            : []),
        typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(WRITER())("bool"), undefined, [input]),
    ].map((exp) => typescript_1.default.factory.createExpressionStatement(exp)), true);
    const decode_number = (project) => (candidates) => (type) => (input) => ({
        type,
        is: () => candidates.length === 1
            ? typescript_1.default.factory.createStrictEquality(typescript_1.default.factory.createStringLiteral("number"), typescript_1.default.factory.createTypeOfExpression(input))
            : typescript_1.default.factory.createLogicalAnd(typescript_1.default.factory.createStrictEquality(typescript_1.default.factory.createStringLiteral("number"), typescript_1.default.factory.createTypeOfExpression(input)), NumericRangeFactory_1.NumericRangeFactory.number(project.context)(type)(input)),
        value: (index) => typescript_1.default.factory.createBlock([
            ...(index !== null
                ? [decode_tag(get_numeric_wire(type))(index)]
                : []),
            typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(WRITER())(type), undefined, [input]),
        ].map((exp) => typescript_1.default.factory.createExpressionStatement(exp)), true),
    });
    const decode_bigint = (project) => (candidates) => (type) => (input) => ({
        type,
        is: () => candidates.length === 1
            ? typescript_1.default.factory.createStrictEquality(typescript_1.default.factory.createStringLiteral("bigint"), typescript_1.default.factory.createTypeOfExpression(input))
            : typescript_1.default.factory.createLogicalAnd(typescript_1.default.factory.createStrictEquality(typescript_1.default.factory.createStringLiteral("bigint"), typescript_1.default.factory.createTypeOfExpression(input)), NumericRangeFactory_1.NumericRangeFactory.bigint(project.context)(type)(input)),
        value: (index) => typescript_1.default.factory.createBlock([
            ...(index !== null
                ? [decode_tag(0 /* ProtobufWire.VARIANT */)(index)]
                : []),
            typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(WRITER())(type), undefined, [input]),
        ].map((exp) => typescript_1.default.factory.createExpressionStatement(exp)), true),
    });
    const decode_bytes = (method) => (index) => (input) => typescript_1.default.factory.createBlock([
        decode_tag(2 /* ProtobufWire.LEN */)(index),
        typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(WRITER())(method), undefined, [input]),
    ].map((expr) => typescript_1.default.factory.createExpressionStatement(expr)), true);
    const decode_tag = (wire) => (index) => typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(WRITER())("uint32"), undefined, [typescript_1.default.factory.createNumericLiteral((index << 3) | wire)]);
    const get_standalone_wire = (meta) => {
        if (meta.arrays.length ||
            meta.objects.length ||
            meta.maps.length ||
            meta.natives.length)
            return 2 /* ProtobufWire.LEN */;
        const v = ProtobufUtil_1.ProtobufUtil.getAtomics(meta)[0];
        if (v === "string")
            return 2 /* ProtobufWire.LEN */;
        else if (v === "bool" ||
            v === "int32" ||
            v === "uint32" ||
            v === "int64" ||
            v === "uint64")
            return 0 /* ProtobufWire.VARIANT */;
        else if (v === "float")
            return 5 /* ProtobufWire.I32 */;
        return 1 /* ProtobufWire.I64 */;
    };
    const get_numeric_wire = (type) => type === "double"
        ? 1 /* ProtobufWire.I64 */
        : type === "float"
            ? 5 /* ProtobufWire.I32 */
            : 0 /* ProtobufWire.VARIANT */;
    /* -----------------------------------------------------------
        EXPLORERS
    ----------------------------------------------------------- */
    const explore_objects = (project) => (importer) => (level) => (index) => (input, targets, explore, indexes) => {
        if (targets.length === 1)
            return decode_object(project)(importer)(indexes ? indexes.get(targets[0]) : index)(input, targets[0], explore);
        const expected = `(${targets
            .map((t) => t.name)
            .join(" | ")})`;
        // POSSIBLE TO SPECIALIZE?
        const specList = UnionPredicator_1.UnionPredicator.object(targets);
        indexes ??= new Map(targets.map((t, i) => [t, index + i]));
        if (specList.length === 0) {
            const condition = (0, decode_union_object_1.decode_union_object)(IsProgrammer_1.IsProgrammer.decode_object(importer))((i, o, e) => ExpressionFactory_1.ExpressionFactory.selfCall(decode_object(project)(importer)(indexes.get(o))(i, o, e)))((expr) => expr)((value, expected) => create_throw_error(importer)(expected)(value))(input, targets, explore);
            return StatementFactory_1.StatementFactory.block(condition);
        }
        const remained = targets.filter((t) => specList.find((s) => s.object === t) === undefined);
        // DO SPECIALIZE
        const condition = specList
            .filter((spec) => spec.property.key.getSoleLiteral() !== null)
            .map((spec, i, array) => {
            const key = spec.property.key.getSoleLiteral();
            const accessor = IdentifierFactory_1.IdentifierFactory.access(input)(key);
            const pred = spec.neighbour
                ? IsProgrammer_1.IsProgrammer.decode(project)(importer)(accessor, spec.property.value, {
                    ...explore,
                    tracable: false,
                    postfix: IdentifierFactory_1.IdentifierFactory.postfix(key),
                })
                : ExpressionFactory_1.ExpressionFactory.isRequired(accessor);
            return typescript_1.default.factory.createIfStatement(pred, typescript_1.default.factory.createReturnStatement(ExpressionFactory_1.ExpressionFactory.selfCall(decode_object(project)(importer)(indexes.get(spec.object))(input, spec.object, explore))), i === array.length - 1
                ? remained.length
                    ? typescript_1.default.factory.createReturnStatement(ExpressionFactory_1.ExpressionFactory.selfCall(explore_objects(project)(importer)(level + 1)(index)(input, remained, explore, indexes)))
                    : create_throw_error(importer)(expected)(input)
                : undefined);
        })
            .reverse()
            .reduce((a, b) => typescript_1.default.factory.createIfStatement(b.expression, b.thenStatement, a));
        // RETURNS WITH CONDITIONS
        return typescript_1.default.factory.createBlock([condition], true);
    };
    /* -----------------------------------------------------------
        CONFIGURATIONS
    ----------------------------------------------------------- */
    const PREFIX = "$pe";
    const create_throw_error = (importer) => (expected) => (value) => typescript_1.default.factory.createExpressionStatement(typescript_1.default.factory.createCallExpression(importer.use("throws"), [], [
        typescript_1.default.factory.createObjectLiteralExpression([
            typescript_1.default.factory.createPropertyAssignment("expected", typescript_1.default.factory.createStringLiteral(expected)),
            typescript_1.default.factory.createPropertyAssignment("value", value),
        ], true),
    ]));
})(ProtobufEncodeProgrammer || (exports.ProtobufEncodeProgrammer = ProtobufEncodeProgrammer = {}));
const WRITER = () => typescript_1.default.factory.createIdentifier("writer");
