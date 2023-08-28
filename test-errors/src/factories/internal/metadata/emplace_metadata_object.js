"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emplace_metadata_object = void 0;
const typescript_1 = __importDefault(require("typescript"));
const MetadataProperty_1 = require("../../../schemas/metadata/MetadataProperty");
const Writable_1 = require("../../../typings/Writable");
const ArrayUtil_1 = require("../../../utils/ArrayUtil");
const CommentFactory_1 = require("../../CommentFactory");
const MetadataHelper_1 = require("./MetadataHelper");
const explore_metadata_1 = require("./explore_metadata");
const emplace_metadata_object = (checker) => (options) => (collection) => (errors) => (parent, nullable) => {
    // EMPLACE OBJECT
    const [obj, newbie] = collection.emplace(checker, parent);
    ArrayUtil_1.ArrayUtil.add(obj.nullables, nullable, (elem) => elem === nullable);
    if (newbie === false)
        return obj;
    // PREPARE ASSETS
    const isClass = parent.isClass();
    const pred = isClass
        ? (node) => {
            const kind = node
                .getChildren()[0]
                ?.getChildren()[0]?.kind;
            return (kind !== typescript_1.default.SyntaxKind.PrivateKeyword &&
                kind !== typescript_1.default.SyntaxKind.ProtectedKeyword &&
                (typescript_1.default.isParameter(node) || isProperty(node)));
        }
        : (node) => isProperty(node);
    const insert = (key) => (value) => (symbol, filter) => {
        // COMMENTS AND TAGS
        const description = symbol
            ? CommentFactory_1.CommentFactory.description(symbol) ?? null
            : null;
        const jsDocTags = (symbol?.getJsDocTags() ?? []).filter(filter ?? (() => true));
        // THE PROPERTY
        const property = MetadataProperty_1.MetadataProperty.create({
            key,
            value,
            description,
            jsDocTags,
        });
        obj.properties.push(property);
        return property;
    };
    //----
    // REGULAR PROPERTIES
    //----
    for (const prop of parent.getApparentProperties()) {
        // CHECK INTERNAL TAG
        if ((prop.getJsDocTags(checker) ?? []).find((tag) => tag.name === "internal") !== undefined)
            continue;
        // CHECK NODE IS A FORMAL PROPERTY
        const [node, type] = (() => {
            const node = (prop.getDeclarations() ?? [])[0];
            const type = node
                ? checker.getTypeOfSymbolAtLocation(prop, node)
                : "getTypeOfPropertyOfType" in checker
                    ? checker.getTypeOfPropertyOfType(parent, prop.name)
                    : undefined;
            return [node, type];
        })();
        if ((node && pred(node) === false) || type === undefined)
            continue;
        // GET EXACT TYPE
        const key = MetadataHelper_1.MetadataHelper.literal_to_metadata(prop.name);
        const value = (0, explore_metadata_1.explore_metadata)(checker)(options)(collection)(errors)(type, {
            top: false,
            object: obj,
            property: prop.name,
            nested: null,
            escaped: false,
            aliased: false,
        });
        // OPTIONAL, BUT CAN BE RQUIRED BY `Required<T>` TYPE
        if (node?.questionToken)
            (0, Writable_1.Writable)(value).optional = true;
        insert(key)(value)(prop);
    }
    //----
    // DYNAMIC PROPERTIES
    //----
    for (const index of checker.getIndexInfosOfType(parent)) {
        // GET EXACT TYPE
        const analyzer = (type) => (property) => (0, explore_metadata_1.explore_metadata)(checker)(options)(collection)(errors)(type, {
            top: false,
            object: obj,
            property,
            nested: null,
            escaped: false,
            aliased: false,
        });
        const key = analyzer(index.keyType)(null);
        const value = analyzer(index.type)({});
        // INSERT WITH REQUIRED CONFIGURATION
        insert(key)(value)(index.declaration?.parent
            ? checker.getSymbolAtLocation(index.declaration.parent)
            : undefined, (doc) => doc.name !== "default");
    }
    return obj;
};
exports.emplace_metadata_object = emplace_metadata_object;
const isProperty = (node) => typescript_1.default.isPropertyDeclaration(node) ||
    typescript_1.default.isPropertyAssignment(node) ||
    typescript_1.default.isPropertySignature(node) ||
    typescript_1.default.isTypeLiteralNode(node);
