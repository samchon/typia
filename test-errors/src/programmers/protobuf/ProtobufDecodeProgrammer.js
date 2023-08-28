"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtobufDecodeProgrammer = void 0;
const typescript_1 = __importDefault(require("typescript"));
const ExpressionFactory_1 = require("../../factories/ExpressionFactory");
const IdentifierFactory_1 = require("../../factories/IdentifierFactory");
const MetadataCollection_1 = require("../../factories/MetadataCollection");
const MetadataFactory_1 = require("../../factories/MetadataFactory");
const ProtobufFactory_1 = require("../../factories/ProtobufFactory");
const StatementFactory_1 = require("../../factories/StatementFactory");
const TypeFactory_1 = require("../../factories/TypeFactory");
const MetadataProperty_1 = require("../../schemas/metadata/MetadataProperty");
const FunctionImporeter_1 = require("../helpers/FunctionImporeter");
const ProtobufUtil_1 = require("../helpers/ProtobufUtil");
var ProtobufDecodeProgrammer;
(function (ProtobufDecodeProgrammer) {
    ProtobufDecodeProgrammer.write = (project) => (modulo) => (type, name) => {
        const importer = new FunctionImporeter_1.FunctionImporter(modulo.getText());
        const collection = new MetadataCollection_1.MetadataCollection();
        const meta = ProtobufFactory_1.ProtobufFactory.metadata(modulo.getText())(project.checker)(collection)(type);
        const functors = collection
            .objects()
            .filter((obj) => ProtobufUtil_1.ProtobufUtil.isStaticObject(obj))
            .map((obj) => StatementFactory_1.StatementFactory.constant(`${PREFIX}o${obj.index}`, write_object_function(project)(importer)(obj)));
        const reader = StatementFactory_1.StatementFactory.constant("reader", typescript_1.default.factory.createNewExpression(importer.use("Reader"), undefined, [typescript_1.default.factory.createIdentifier("input")]));
        return typescript_1.default.factory.createArrowFunction(undefined, undefined, [
            IdentifierFactory_1.IdentifierFactory.parameter("input", typescript_1.default.factory.createTypeReferenceNode("Uint8Array")),
        ], typescript_1.default.factory.createTypeReferenceNode(`typia.Resolved<${name ?? TypeFactory_1.TypeFactory.getFullName(project.checker)(type)}>`), undefined, typescript_1.default.factory.createBlock([
            ...importer.declare(modulo),
            ...functors,
            reader,
            typescript_1.default.factory.createReturnStatement(decode_regular_object(true)(meta.objects[0])),
        ], true));
    };
    const write_object_function = (project) => (importer) => (obj) => typescript_1.default.factory.createArrowFunction(undefined, undefined, [
        IdentifierFactory_1.IdentifierFactory.parameter("reader"),
        IdentifierFactory_1.IdentifierFactory.parameter("length", TypeFactory_1.TypeFactory.keyword("number"), typescript_1.default.factory.createNumericLiteral(-1)),
    ], TypeFactory_1.TypeFactory.keyword("any"), undefined, typescript_1.default.factory.createBlock([
        typescript_1.default.factory.createExpressionStatement(typescript_1.default.factory.createBinaryExpression(typescript_1.default.factory.createIdentifier("length"), typescript_1.default.factory.createToken(typescript_1.default.SyntaxKind.EqualsToken), typescript_1.default.factory.createConditionalExpression(typescript_1.default.factory.createLessThan(typescript_1.default.factory.createIdentifier("length"), typescript_1.default.factory.createNumericLiteral(0)), undefined, typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(READER())("size"), undefined, undefined), undefined, typescript_1.default.factory.createAdd(typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(READER())("index"), undefined, undefined), typescript_1.default.factory.createIdentifier("length"))))),
        ...write_object_function_body(project)(importer)({
            condition: typescript_1.default.factory.createLessThan(typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(READER())("index"), undefined, undefined), typescript_1.default.factory.createIdentifier("length")),
            tag: "tag",
            output: "output",
        })(obj.properties),
        typescript_1.default.factory.createReturnStatement(typescript_1.default.factory.createIdentifier("output")),
    ], true));
    const write_object_function_body = (project) => (importer) => (props) => (properties) => {
        let i = 1;
        const clauses = properties
            .map((p) => {
            const clause = decode_property(project)(importer)(i)(IdentifierFactory_1.IdentifierFactory.access(typescript_1.default.factory.createIdentifier(props.output))(p.key.getSoleLiteral()), p.value);
            i += ProtobufUtil_1.ProtobufUtil.size(p.value);
            return clause;
        })
            .flat();
        return [
            StatementFactory_1.StatementFactory.constant(props.output, typescript_1.default.factory.createObjectLiteralExpression(properties.map((p) => typescript_1.default.factory.createPropertyAssignment(IdentifierFactory_1.IdentifierFactory.identifier(p.key.getSoleLiteral()), write_property_default_value(p.value))), true)),
            typescript_1.default.factory.createWhileStatement(props.condition, typescript_1.default.factory.createBlock([
                StatementFactory_1.StatementFactory.constant(props.tag, typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(READER())("uint32"), undefined, undefined)),
                typescript_1.default.factory.createSwitchStatement(typescript_1.default.factory.createUnsignedRightShift(typescript_1.default.factory.createIdentifier(props.tag), typescript_1.default.factory.createNumericLiteral(3)), typescript_1.default.factory.createCaseBlock([
                    ...clauses,
                    typescript_1.default.factory.createDefaultClause([
                        typescript_1.default.factory.createExpressionStatement(typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(READER())("skipType"), undefined, [
                            typescript_1.default.factory.createBitwiseAnd(typescript_1.default.factory.createIdentifier(props.tag), typescript_1.default.factory.createNumericLiteral(7)),
                        ])),
                        typescript_1.default.factory.createBreakStatement(),
                    ]),
                ])),
            ])),
        ];
    };
    const write_property_default_value = (value) => typescript_1.default.factory.createAsExpression(value.nullable
        ? typescript_1.default.factory.createNull()
        : value.isRequired() === false
            ? typescript_1.default.factory.createIdentifier("undefined")
            : value.arrays.length
                ? typescript_1.default.factory.createArrayLiteralExpression()
                : value.maps.length
                    ? typescript_1.default.factory.createNewExpression(typescript_1.default.factory.createIdentifier("Map"), undefined, [])
                    : value.natives.length
                        ? typescript_1.default.factory.createNewExpression(typescript_1.default.factory.createIdentifier("Uint8Array"), undefined, [])
                        : value.atomics.some((a) => a.type === "string") ||
                            value.constants.some((c) => c.type === "string" && c.values.some((v) => v === "")) ||
                            value.templates.some((tpl) => tpl.length === 1 && tpl[0].getName() === "string")
                            ? typescript_1.default.factory.createStringLiteral("")
                            : value.objects.length &&
                                value.objects.some((obj) => !ProtobufUtil_1.ProtobufUtil.isStaticObject(obj))
                                ? typescript_1.default.factory.createObjectLiteralExpression()
                                : typescript_1.default.factory.createIdentifier("undefined"), TypeFactory_1.TypeFactory.keyword("any"));
    /* -----------------------------------------------------------
        DECODERS
    ----------------------------------------------------------- */
    const decode_property = (project) => (importer) => (index) => (accessor, meta) => {
        const clauses = [];
        const emplace = (name) => (v) => clauses.push(typescript_1.default.factory.createCaseClause(typescript_1.default.factory.createNumericLiteral(index++), Array.isArray(v)
            ? [
                typescript_1.default.factory.createExpressionStatement(typescript_1.default.factory.createIdentifier(`// type: ${name}`)),
                ...v,
                typescript_1.default.factory.createBreakStatement(),
            ]
            : [
                typescript_1.default.factory.createExpressionStatement(typescript_1.default.factory.createIdentifier(`// ${name}`)),
                typescript_1.default.factory.createExpressionStatement(typescript_1.default.factory.createBinaryExpression(accessor, typescript_1.default.factory.createToken(typescript_1.default.SyntaxKind.EqualsToken), v)),
                typescript_1.default.factory.createBreakStatement(),
            ]));
        const required = meta.isRequired() && !meta.nullable;
        for (const atomic of ProtobufUtil_1.ProtobufUtil.getAtomics(meta))
            emplace(atomic)(decode_atomic(meta)(atomic));
        if (meta.natives.length)
            emplace("bytes")(decode_bytes("bytes"));
        for (const array of meta.arrays)
            emplace(`Array<${array.type.value.getName()}>`)(decode_array(accessor, array, required));
        for (const map of meta.maps)
            emplace(`Map<string, ${map.value.getName()}>`)(decode_map(project)(importer)(accessor, map, required));
        for (const obj of meta.objects)
            emplace(obj.name)(ProtobufUtil_1.ProtobufUtil.isStaticObject(obj)
                ? decode_regular_object(false)(obj)
                : decode_dynamic_object(project)(importer)(accessor, obj, required));
        return clauses;
    };
    const decode_atomic = (meta) => (atomic) => {
        if (atomic === "string")
            return decode_bytes("string");
        const call = typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(typescript_1.default.factory.createIdentifier("reader"))(atomic), undefined, undefined);
        if (atomic !== "int64" && atomic !== "uint64")
            return call;
        const isNumber = ProtobufUtil_1.ProtobufUtil.getNumbers(meta).some((n) => n === atomic);
        return isNumber
            ? typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("Number"), undefined, [call])
            : call;
    };
    const decode_bytes = (method) => typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(typescript_1.default.factory.createIdentifier("reader"))(method), undefined, undefined);
    const decode_array = (accessor, array, required) => {
        const statements = [];
        if (required === false)
            statements.push(typescript_1.default.factory.createBinaryExpression(accessor, typescript_1.default.factory.createToken(typescript_1.default.SyntaxKind.QuestionQuestionEqualsToken), typescript_1.default.factory.createAsExpression(typescript_1.default.factory.createArrayLiteralExpression(), typescript_1.default.factory.createTypeReferenceNode("any[]"))));
        const atomics = ProtobufUtil_1.ProtobufUtil.getAtomics(array.type.value);
        const decoder = atomics.length
            ? () => decode_atomic(array.type.value)(atomics[0])
            : array.type.value.natives.length
                ? () => decode_bytes("bytes")
                : array.type.value.objects.length
                    ? () => decode_regular_object(false)(array.type.value.objects[0])
                    : null;
        if (decoder === null)
            throw new Error("Never reach here.");
        else if (atomics.length && atomics[0] !== "string") {
            statements.push(typescript_1.default.factory.createIfStatement(typescript_1.default.factory.createStrictEquality(typescript_1.default.factory.createNumericLiteral(2), typescript_1.default.factory.createBitwiseAnd(typescript_1.default.factory.createIdentifier("tag"), typescript_1.default.factory.createNumericLiteral(7))), typescript_1.default.factory.createBlock([
                StatementFactory_1.StatementFactory.constant("piece", typescript_1.default.factory.createAdd(typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(READER())("uint32"), undefined, undefined), typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(READER())("index"), undefined, undefined))),
                typescript_1.default.factory.createWhileStatement(typescript_1.default.factory.createLessThan(typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(READER())("index"), undefined, undefined), typescript_1.default.factory.createIdentifier("piece")), typescript_1.default.factory.createExpressionStatement(typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(accessor)("push"), undefined, [decoder()]))),
            ], true), typescript_1.default.factory.createExpressionStatement(typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(accessor)("push"), undefined, [decoder()]))));
        }
        else
            statements.push(typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(accessor)("push"), undefined, [decoder()]));
        return statements.map((stmt) => typescript_1.default.isExpression(stmt)
            ? typescript_1.default.factory.createExpressionStatement(stmt)
            : stmt);
    };
    const decode_regular_object = (top) => (obj) => typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier(`${PREFIX}o${obj.index}`), undefined, [
        typescript_1.default.factory.createIdentifier("reader"),
        ...(top
            ? []
            : [
                typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(READER())("uint32"), undefined, undefined),
            ]),
    ]);
    const decode_dynamic_object = (project) => (importer) => (accessor, obj, required) => {
        const top = obj.properties[0];
        return decode_entry(project)(importer)({
            initializer: () => typescript_1.default.factory.createBinaryExpression(accessor, typescript_1.default.factory.createToken(typescript_1.default.SyntaxKind.QuestionQuestionEqualsToken), typescript_1.default.factory.createObjectLiteralExpression()),
            setter: () => typescript_1.default.factory.createBinaryExpression(typescript_1.default.factory.createElementAccessExpression(accessor, typescript_1.default.factory.createIdentifier("entry.key")), typescript_1.default.factory.createToken(typescript_1.default.SyntaxKind.EqualsToken), typescript_1.default.factory.createIdentifier("entry.value")),
        })(top, required);
    };
    const decode_map = (project) => (importer) => (accessor, map, required) => decode_entry(project)(importer)({
        initializer: () => typescript_1.default.factory.createBinaryExpression(accessor, typescript_1.default.factory.createToken(typescript_1.default.SyntaxKind.QuestionQuestionEqualsToken), typescript_1.default.factory.createNewExpression(typescript_1.default.factory.createIdentifier("Map"), [
            TypeFactory_1.TypeFactory.keyword("any"),
            TypeFactory_1.TypeFactory.keyword("any"),
        ], [])),
        setter: () => typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(accessor)("set"), undefined, [
            typescript_1.default.factory.createIdentifier("entry.key"),
            typescript_1.default.factory.createIdentifier("entry.value"),
        ]),
    })(map, required);
    const decode_entry = (project) => (importer) => (props) => (map, required) => {
        const statements = [
            ...(required
                ? []
                : [
                    typescript_1.default.factory.createExpressionStatement(props.initializer()),
                ]),
            StatementFactory_1.StatementFactory.constant("piece", typescript_1.default.factory.createAdd(typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(READER())("uint32"), undefined, undefined), typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(READER())("index"), undefined, undefined))),
            ...write_object_function_body(project)(importer)({
                condition: typescript_1.default.factory.createLessThan(typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(READER())("index"), undefined, undefined), typescript_1.default.factory.createIdentifier("piece")),
                tag: "kind",
                output: "entry",
            })([
                MetadataProperty_1.MetadataProperty.create({
                    key: MetadataFactory_1.MetadataFactory.soleLiteral("key"),
                    value: map.key,
                    description: null,
                    jsDocTags: [],
                }),
                MetadataProperty_1.MetadataProperty.create({
                    key: MetadataFactory_1.MetadataFactory.soleLiteral("value"),
                    value: map.value,
                    description: null,
                    jsDocTags: [],
                }),
            ]),
            typescript_1.default.factory.createExpressionStatement(props.setter()),
        ];
        return [
            typescript_1.default.factory.createExpressionStatement(ExpressionFactory_1.ExpressionFactory.selfCall(typescript_1.default.factory.createBlock(statements, true))),
        ];
    };
})(ProtobufDecodeProgrammer || (exports.ProtobufDecodeProgrammer = ProtobufDecodeProgrammer = {}));
const PREFIX = "$pd";
const READER = () => typescript_1.default.factory.createIdentifier("reader");
