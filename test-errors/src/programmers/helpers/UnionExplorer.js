"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnionExplorer = void 0;
const typescript_1 = __importDefault(require("typescript"));
const ExpressionFactory_1 = require("../../factories/ExpressionFactory");
const IdentifierFactory_1 = require("../../factories/IdentifierFactory");
const Metadata_1 = require("../../schemas/metadata/Metadata");
const MetadataArray_1 = require("../../schemas/metadata/MetadataArray");
const MetadataArrayType_1 = require("../../schemas/metadata/MetadataArrayType");
const MetadataTuple_1 = require("../../schemas/metadata/MetadataTuple");
const MetadataTupleType_1 = require("../../schemas/metadata/MetadataTupleType");
const check_union_array_like_1 = require("../internal/check_union_array_like");
const UnionPredicator_1 = require("./UnionPredicator");
var UnionExplorer;
(function (UnionExplorer) {
    /* -----------------------------------------------------------
        OBJECT
    ----------------------------------------------------------- */
    UnionExplorer.object = (config, level = 0) => (input, targets, explore) => {
        // BREAKER
        if (targets.length === 1)
            return config.objector.decoder()(input, targets[0], explore);
        const expected = `(${targets
            .map((t) => t.name)
            .join(" | ")})`;
        // POSSIBLE TO SPECIALIZE?
        const specList = UnionPredicator_1.UnionPredicator.object(targets);
        if (specList.length === 0) {
            const condition = config.objector.unionizer(input, targets, {
                ...explore,
                tracable: false,
            });
            return config.objector.full
                ? config.objector.full(condition)(input, expected, explore)
                : condition;
        }
        const remained = targets.filter((t) => specList.find((s) => s.object === t) === undefined);
        // DO SPECIALIZE
        const condition = specList
            .filter((spec) => spec.property.key.getSoleLiteral() !== null)
            .map((spec, i, array) => {
            const key = spec.property.key.getSoleLiteral();
            const accessor = IdentifierFactory_1.IdentifierFactory.access(input)(key);
            const pred = spec.neighbour
                ? config.objector.checker()(accessor, spec.property.value, {
                    ...explore,
                    tracable: false,
                    postfix: IdentifierFactory_1.IdentifierFactory.postfix(key),
                })
                : (config.objector.required || ((exp) => exp))(ExpressionFactory_1.ExpressionFactory.isRequired(accessor));
            return typescript_1.default.factory.createIfStatement((config.objector.is || ((exp) => exp))(pred), typescript_1.default.factory.createReturnStatement(config.objector.decoder()(input, spec.object, explore)), i === array.length - 1
                ? remained.length
                    ? typescript_1.default.factory.createReturnStatement(UnionExplorer.object(config, level + 1)(input, remained, explore))
                    : config.objector.failure(input, expected, explore)
                : undefined);
        })
            .reverse()
            .reduce((a, b) => typescript_1.default.factory.createIfStatement(b.expression, b.thenStatement, a));
        // RETURNS WITH CONDITIONS
        return typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createArrowFunction(undefined, undefined, [], undefined, undefined, typescript_1.default.factory.createBlock([condition], true)), undefined, undefined);
    };
    /* -----------------------------------------------------------
        ARRAY LIKE
    ----------------------------------------------------------- */
    UnionExplorer.tuple = (props) => (0, check_union_array_like_1.check_union_array_like)({
        transform: (x) => x,
        element: (x) => x,
        size: null,
        front: (input) => input,
        array: (input) => input,
        name: (t) => t.type.name,
    })(props);
    UnionExplorer.array = (props) => (0, check_union_array_like_1.check_union_array_like)({
        transform: (x) => x,
        element: (x) => x.type.value,
        size: (input) => IdentifierFactory_1.IdentifierFactory.access(input)("length"),
        front: (input) => typescript_1.default.factory.createElementAccessExpression(input, 0),
        array: (input) => input,
        name: (t) => t.type.name,
    })(props);
    UnionExplorer.array_or_tuple = (props) => (0, check_union_array_like_1.check_union_array_like)({
        transform: (x) => x,
        element: (x) => (x instanceof MetadataArray_1.MetadataArray ? x.type.value : x),
        size: (input) => IdentifierFactory_1.IdentifierFactory.access(input)("length"),
        front: (input) => typescript_1.default.factory.createElementAccessExpression(input, 0),
        array: (input) => input,
        name: (m) => m.type.name,
    })(props);
    UnionExplorer.set = (props) => (0, check_union_array_like_1.check_union_array_like)({
        transform: (value) => MetadataArray_1.MetadataArray.create({
            tags: [],
            type: MetadataArrayType_1.MetadataArrayType.create({
                name: `Set<${value.getName()}>`,
                index: null,
                recursive: false,
                nullables: [],
                value,
            }),
        }),
        element: (array) => array.type.value,
        size: (input) => IdentifierFactory_1.IdentifierFactory.access(input)("size"),
        front: (input) => IdentifierFactory_1.IdentifierFactory.access(typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(input)("values"), undefined, undefined))("next"), undefined, undefined))("value"),
        array: (input) => typescript_1.default.factory.createArrayLiteralExpression([typescript_1.default.factory.createSpreadElement(input)], false),
        name: (_m, e) => `Set<${e.getName()}>`,
    })(props);
    UnionExplorer.map = (props) => (0, check_union_array_like_1.check_union_array_like)({
        element: (array) => array.type.value.tuples[0].type.elements,
        size: (input) => IdentifierFactory_1.IdentifierFactory.access(input)("size"),
        front: (input) => IdentifierFactory_1.IdentifierFactory.access(typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(input)("entries"), undefined, undefined))("next"), undefined, undefined))("value"),
        array: (input) => typescript_1.default.factory.createArrayLiteralExpression([typescript_1.default.factory.createSpreadElement(input)], false),
        name: (_m, [k, v]) => `Map<${k.getName()}, ${v.getName()}>`,
        transform: (m) => MetadataArray_1.MetadataArray.create({
            tags: [],
            type: MetadataArrayType_1.MetadataArrayType.create({
                name: `Map<${m.key.getName()}, ${m.value.getName()}>`,
                index: null,
                recursive: false,
                nullables: [],
                value: Metadata_1.Metadata.create({
                    ...Metadata_1.Metadata.initialize(),
                    tuples: [
                        (() => {
                            const tuple = MetadataTuple_1.MetadataTuple.create({
                                tags: [],
                                type: MetadataTupleType_1.MetadataTupleType.create({
                                    name: `[${m.key.getName()}, ${m.value.getName()}]`,
                                    index: null,
                                    recursive: false,
                                    nullables: [],
                                    elements: [m.key, m.value],
                                }),
                            });
                            tuple.type.of_map = true;
                            return tuple;
                        })(),
                    ],
                }),
            }),
        }),
    })(props);
})(UnionExplorer || (exports.UnionExplorer = UnionExplorer = {}));
