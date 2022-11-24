import ts from "typescript";

import { Metadata } from "../../metadata/Metadata";

import { ArrayUtil } from "../../utils/ArrayUtil";

import { TypeFactory } from "../TypeFactory";

export const iterate_metadata_native =
    (checker: ts.TypeChecker) =>
    (meta: Metadata, type: ts.Type): boolean => {
        const name: string = TypeFactory.getFullName(
            checker,
            type,
            type.getSymbol(),
        );
        if (SIMPLES.has(name) === true) {
            ArrayUtil.set(meta.natives, name, (str) => str);
            return true;
        } else if (COMPLICATES.has(name) === true) {
            ArrayUtil.set(
                meta.natives,
                COMPLICATES.get(name)!.name,
                (str) => str,
            );
            return true;
        } else {
            for (const generic of GENERICS)
                if (name.substring(0, generic.name.length) === generic.name) {
                    ArrayUtil.set(meta.natives, generic.name, (str) => str);
                    return true;
                }
        }
        return false;
    };

const SIMPLES: Set<string> = new Set([
    "Date",
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
    "ArrayBuffer",
    "SharedArrayBuffer",
    "DataView",
]);
const COMPLICATES: Map<string, IClassInfo> = new Map([
    [`'buffer'.global.Buffer`, { name: "Buffer" }],
]);
const GENERICS: IClassInfo[] = [{ name: "WeakMap" }, { name: "WeakSet" }];

interface IClassInfo {
    name: string;
}
