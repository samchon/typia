export const iterate_protocol_native =
    (adder: (type: string) => void) => (native: string) => {
        if (BINARIES.has(native)) adder("bytes");
        else if (native === "Date") adder("string");
    };

const BINARIES: Set<string> = new Set([
    "Uint8Array",
    "Uint16Array",
    "Uint32Array",
    "BigUint64Array",
    "Int8Array",
    "Int16Array",
    "Int32Array",
    "BigInt64Array",
    "Float32Array",
    "Float64Array",
    "Buffer",
    "ArrayBuffer",
    "DataView",
]);
