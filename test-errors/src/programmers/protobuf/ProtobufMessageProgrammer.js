"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtobufMessageProgrammer = void 0;
const typescript_1 = __importDefault(require("typescript"));
const MetadataCollection_1 = require("../../factories/MetadataCollection");
const ProtobufFactory_1 = require("../../factories/ProtobufFactory");
const MapUtil_1 = require("../../utils/MapUtil");
const NameEncoder_1 = require("../../utils/NameEncoder");
const ProtobufUtil_1 = require("../helpers/ProtobufUtil");
var ProtobufMessageProgrammer;
(function (ProtobufMessageProgrammer) {
    ProtobufMessageProgrammer.write = ({ checker }) => (type) => {
        // PARSE TARGET TYPE
        const collection = new MetadataCollection_1.MetadataCollection();
        ProtobufFactory_1.ProtobufFactory.metadata("message")(checker)(collection)(type);
        // STRINGIFY
        const hierarchies = new Map();
        for (const obj of collection.objects())
            if (is_dynamic_object(obj) === false)
                emplace(hierarchies)(obj);
        const content = `syntax = "proto3";\n\n` +
            [...hierarchies.values()]
                .map((hier) => write_hierarchy(hier))
                .join("\n\n");
        // RETURNS
        return typescript_1.default.factory.createStringLiteral(content);
    };
    const emplace = (dict) => (obj) => {
        const accessors = obj.name.split(".");
        accessors.forEach((access, i) => {
            const hierarchy = MapUtil_1.MapUtil.take(dict)(access, () => ({
                key: access,
                object: null,
                children: new Map(),
            }));
            dict = hierarchy.children;
            if (i === accessors.length - 1)
                hierarchy.object = obj;
        });
    };
    const is_dynamic_object = (obj) => obj.properties.length === 1 &&
        obj.properties[0].key.isSoleLiteral() === false;
    const write_hierarchy = (hierarchy) => {
        const elements = [
            `message ${NameEncoder_1.NameEncoder.encode(hierarchy.key)} {`,
        ];
        if (hierarchy.object !== null) {
            const text = write_object(hierarchy.object);
            elements.push(...text.split("\n").map((str) => `${TAB}${str}`));
        }
        if (hierarchy.children.size)
            elements.push([...hierarchy.children.values()]
                .map((child) => write_hierarchy(child))
                .map((body) => body
                .split("\n")
                .map((line) => `${TAB}${line}`)
                .join("\n"))
                .join("\n\n"));
        elements.push("}");
        return elements.join("\n");
    };
    const write_object = (obj) => {
        const ptr = { value: 0 };
        return obj.properties
            .map((prop) => {
            const key = prop.key.getSoleLiteral();
            const type = decode(ptr)(prop.value);
            return type.indexOf("${name}") !== -1
                ? type.replace("${name}", key)
                : `${prop.value.arrays.length || type.startsWith("map<")
                    ? ""
                    : !prop.value.isRequired() || prop.value.nullable
                        ? "optional "
                        : "required "}${type} ${key} = ${++ptr.value};`;
        })
            .join("\n");
    };
    /* -----------------------------------------------------------
        DECODERS
    ----------------------------------------------------------- */
    const decode = (ptr) => (meta) => {
        const elements = new Set();
        if (meta.natives.length)
            elements.add("bytes");
        for (const atomic of ProtobufUtil_1.ProtobufUtil.getAtomics(meta))
            elements.add(atomic);
        for (const array of meta.arrays)
            elements.add(`repeated ${decode(ptr)(array.type.value)}`);
        for (const obj of meta.objects)
            elements.add(is_dynamic_object(obj)
                ? decode_map(ptr)(obj.properties[0])
                : NameEncoder_1.NameEncoder.encode(obj.name));
        for (const map of meta.maps)
            elements.add(decode_map(ptr)(map));
        return elements.size === 1
            ? [...elements][0]
            : [
                "oneof ${name} {",
                ...[...elements].map((str) => `${TAB}${str} v${ptr.value + 1} = ${++ptr.value};`),
                "}",
            ].join("\n");
    };
    const decode_map = (ptr) => (prop) => `map<${decode(ptr)(prop.key)}, ${decode(ptr)(prop.value)}>`;
})(ProtobufMessageProgrammer || (exports.ProtobufMessageProgrammer = ProtobufMessageProgrammer = {}));
const TAB = " ".repeat(4);
