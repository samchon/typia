"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iterate_metadata_native = void 0;
const ArrayUtil_1 = require("../../../utils/ArrayUtil");
const TypeFactory_1 = require("../../TypeFactory");
const iterate_metadata_native = (checker) => (meta, type) => {
    const validator = validate(checker)(type);
    const name = TypeFactory_1.TypeFactory.getFullName(checker)(type, type.getSymbol());
    const simple = SIMPLES.get(name);
    if (simple && validator(simple)) {
        ArrayUtil_1.ArrayUtil.set(meta.natives, name, (str) => str);
        return true;
    }
    for (const generic of GENERICS)
        if (name.substring(0, generic.name.length) === generic.name &&
            validator(generic)) {
            ArrayUtil_1.ArrayUtil.set(meta.natives, generic.name ?? name, (str) => str);
            return true;
        }
    return false;
};
exports.iterate_metadata_native = iterate_metadata_native;
const validate = (checker) => (type) => (info) => (info.methods ?? []).every((method) => {
    const returnType = TypeFactory_1.TypeFactory.getReturnType(checker)(type)(method.name);
    return (returnType !== null &&
        checker.typeToString(returnType) === method.return);
}) &&
    (info.properties ?? []).every((property) => {
        const prop = checker.getPropertyOfType(type, property.name);
        const propType = prop?.valueDeclaration
            ? checker.getTypeAtLocation(prop?.valueDeclaration)
            : undefined;
        return (propType !== undefined &&
            checker.typeToString(propType) === property.type);
    });
const getBinaryProps = (className) => ({
    name: className,
    methods: [
        ...["indexOf", "lastIndexOf"].map((name) => ({
            name,
            return: "number",
        })),
        ...["some", "every"].map((name) => ({
            name,
            return: "boolean",
        })),
        ...["join", "toLocaleString"].map((name) => ({
            name,
            return: "string",
        })),
        ...["reverse", "slice", "subarray"].map((name) => ({
            name,
            return: className,
        })),
    ],
    properties: ["BYTES_PER_ELEMENT", "length", "byteLength", "byteOffset"].map((name) => ({
        name,
        type: "number",
    })),
});
const SIMPLES = new Map([
    [
        "Date",
        {
            methods: ["getTime", "getFullYear", "getMonth", "getMinutes"].map((name) => ({
                name,
                return: "number",
            })),
        },
    ],
    [
        "Boolean",
        {
            methods: [
                {
                    name: "valueOf",
                    return: "boolean",
                },
            ],
        },
    ],
    [
        "Number",
        {
            methods: [
                ...["toFixed", "toExponential", "toPrecision"].map((name) => ({
                    name,
                    return: "string",
                })),
                {
                    name: "valueOf",
                    return: "number",
                },
            ],
        },
    ],
    [
        "String",
        {
            methods: [
                "charAt",
                "concat",
                "valueOf",
                "trim",
                "replace",
                "substring",
            ].map((name) => ({
                name,
                return: "string",
            })),
        },
    ],
    ...[
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "BigUint64Array",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "BigInt64Array",
        "Float32Array",
        "Float64Array",
    ].map((name) => [name, getBinaryProps(name)]),
    ...["ArrayBuffer", "SharedArrayBuffer"].map((className) => {
        const info = {
            methods: [
                {
                    name: "slice",
                    return: className,
                },
            ],
            properties: [
                {
                    name: "byteLength",
                    type: "number",
                },
            ],
        };
        return [className, info];
    }),
    [
        "DataView",
        {
            methods: [
                "getFloat32",
                "getFloat64",
                "getInt8",
                "getInt16",
                "getInt32",
                "getUint8",
                "getUint16",
                "getUint32",
            ].map((name) => ({
                name,
                return: "number",
            })),
        },
    ],
]);
const GENERICS = [
    "WeakMap",
    "WeakSet",
].map((name) => ({
    name,
    methods: ["has", "delete"].map((name) => ({
        name,
        return: "boolean",
    })),
}));
