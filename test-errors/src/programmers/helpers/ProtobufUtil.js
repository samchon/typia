"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtobufUtil = void 0;
var ProtobufUtil;
(function (ProtobufUtil) {
    ProtobufUtil.isStaticObject = (obj) => obj.properties.length >= 1 &&
        obj.properties.every((p) => p.key.isSoleLiteral());
    ProtobufUtil.size = (meta) => ProtobufUtil.getAtomics(meta).length +
        meta.arrays.length +
        meta.tuples.length +
        meta.natives.length +
        meta.objects.length +
        meta.maps.length;
    ProtobufUtil.isUnion = (meta) => meta.arrays.length > 1;
    ProtobufUtil.getAtomics = (meta) => {
        const set = new Set();
        if (meta.templates.length)
            set.add("string");
        for (const c of meta.constants)
            if (c.type === "boolean")
                set.add("bool");
            else if (c.type === "bigint")
                set.add("uint64");
            else if (c.type === "number")
                set.add(deduce_numeric_type(c.values));
            else if (c.type === "string")
                set.add("string");
        for (const atomic of meta.atomics)
            if (atomic.type === "boolean")
                set.add("bool");
            else if (atomic.type === "bigint")
                decode_bigint(atomic.tags).forEach((t) => set.add(t));
            else if (atomic.type === "number")
                decode_number(atomic.tags).forEach((t) => set.add(t));
            else if (atomic.type === "string")
                set.add("string");
        return [...set].sort(compare);
    };
    ProtobufUtil.getNumbers = (meta) => {
        const set = new Set();
        for (const c of meta.constants)
            if (c.type === "number")
                set.add(deduce_numeric_type(c.values));
        for (const atomic of meta.atomics)
            if (atomic.type === "number")
                decode_number(atomic.tags).forEach((t) => set.add(t));
        return [...set].sort(compare);
    };
    ProtobufUtil.getBigints = (meta) => {
        const set = new Set();
        for (const c of meta.constants)
            if (c.type === "bigint")
                set.add("uint64");
        for (const atomic of meta.atomics)
            if (atomic.type === "bigint")
                decode_bigint(atomic.tags).forEach((t) => set.add(t));
        return [...set].sort(compare);
    };
    const compare = (x, y) => ATOMIC_ORDER.get(x) - ATOMIC_ORDER.get(y);
})(ProtobufUtil || (exports.ProtobufUtil = ProtobufUtil = {}));
const ATOMIC_ORDER = new Map([
    "bool",
    "int32",
    "uint32",
    "int64",
    "uint64",
    "float",
    "double",
    "string",
].map((str, i) => [str, i]));
const deduce_numeric_type = (values) => values.every((v) => Math.floor(v) === v)
    ? values.every((v) => -2147483648 <= v && v <= 2147483647)
        ? "int32"
        : "int64"
    : "double";
const decode_bigint = (typeTags) => {
    if (typeTags.length === 0)
        return ["int64"];
    const types = new Set();
    for (const row of typeTags) {
        const value = row.find((tag) => tag.kind === "type" &&
            (tag.value === "int64" || tag.value === "uint64"))?.value;
        types.add(value ?? "int64");
    }
    return [...types];
};
const decode_number = (typeTags) => {
    if (typeTags.length === 0)
        return ["double"];
    const types = new Set();
    for (const row of typeTags) {
        const value = row.find((tag) => tag.kind === "type" &&
            (tag.value === "int32" ||
                tag.value === "uint32" ||
                tag.value === "int64" ||
                tag.value === "uint64" ||
                tag.value === "float" ||
                tag.value === "double"))?.value;
        types.add(value ?? "double");
    }
    return [...types];
};
