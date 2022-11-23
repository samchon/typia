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
        if (SIMPLE.has(name) === true) {
            ArrayUtil.set(meta.natives, name, (str) => str);
            return true;
        } else if (COMPLICATE.has(name) === true) {
            ArrayUtil.set(
                meta.natives,
                COMPLICATE.get(name)!.name,
                (str) => str,
            );
            return true;
        }
        return false;
    };

const SIMPLE: Set<string> = new Set([
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
const COMPLICATE: Map<string, IComplicate> = new Map([
    [`'buffer'.global.Buffer`, { name: "Buffer" }],
]);

interface IComplicate {
    name: string;
}
