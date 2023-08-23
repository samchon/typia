import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { TypeFactory } from "../../TypeFactory";

export const iterate_metadata_native =
    (checker: ts.TypeChecker) =>
    (meta: Metadata, type: ts.Type): boolean => {
        const validator = validate(checker)(type);
        const name: string = TypeFactory.getFullName(checker)(
            type,
            type.getSymbol(),
        );

        const simple = SIMPLES.get(name);
        if (simple && validator(simple)) {
            ArrayUtil.set(meta.natives, name, (str) => str);
            return true;
        }

        for (const generic of GENERICS)
            if (
                name.substring(0, generic.name.length) === generic.name &&
                validator(generic)
            ) {
                ArrayUtil.set(meta.natives, generic.name ?? name, (str) => str);
                return true;
            }
        return false;
    };

const validate =
    (checker: ts.TypeChecker) => (type: ts.Type) => (info: IClassInfo) =>
        (info.methods ?? []).every((method) => {
            const returnType = TypeFactory.getReturnType(checker)(type)(
                method.name,
            );
            return (
                returnType !== null &&
                checker.typeToString(returnType) === method.return
            );
        }) &&
        (info.properties ?? []).every((property) => {
            const prop = checker.getPropertyOfType(type, property.name);
            const propType = prop?.valueDeclaration
                ? checker.getTypeAtLocation(prop?.valueDeclaration)
                : undefined;
            return (
                propType !== undefined &&
                checker.typeToString(propType) === property.type
            );
        });

const getBinaryProps = (className: string): IClassInfo => ({
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
    properties: ["BYTES_PER_ELEMENT", "length", "byteLength", "byteOffset"].map(
        (name) => ({
            name,
            type: "number",
        }),
    ),
});
const SIMPLES: Map<string, IClassInfo> = new Map([
    [
        "Date",
        {
            methods: ["getTime", "getFullYear", "getMonth", "getMinutes"].map(
                (name) => ({
                    name,
                    return: "number",
                }),
            ),
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
    ].map((name) => [name, getBinaryProps(name)] as const),
    ...["ArrayBuffer", "SharedArrayBuffer"].map((className) => {
        const info: IClassInfo = {
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
        return [className, info] as const;
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
const GENERICS: Array<IClassInfo & { name: string }> = [
    "WeakMap",
    "WeakSet",
].map((name) => ({
    name,
    methods: ["has", "delete"].map((name) => ({
        name,
        return: "boolean",
    })),
}));

interface IClassInfo {
    name?: string;
    methods?: IMethod[];
    properties?: IProperty[];
}
interface IProperty {
    name: string;
    type: string;
}
interface IMethod {
    name: string;
    return: string;
}
