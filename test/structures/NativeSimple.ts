import { Spoiler } from "../internal/Spoiler";

export interface NativeSimple {
    date: Date;
    uint8Array: Uint8Array;
    uint8ClampedArray: Uint8ClampedArray;
    uint16Array: Uint16Array;
    uint32Array: Uint32Array;
    bigUint64Array: BigUint64Array;
    int8Array: Int8Array;
    int16Array: Int16Array;
    int32Array: Int32Array;
    bigInt64Array: BigInt64Array;
    float32Array: Float32Array;
    float64Array: Float64Array;
    buffer: Buffer;
    arrayBuffer: ArrayBuffer;
    sharedArrayBuffer: SharedArrayBuffer;
    dataView: DataView;
    weakSet: WeakSet<any>;
    weakMap: WeakMap<any, any>;
}
export namespace NativeSimple {
    export const PRIMITIVE = false;

    export function generate(): NativeSimple {
        return {
            date: new Date(),
            uint8Array: new Uint8Array(),
            uint8ClampedArray: new Uint8ClampedArray(),
            uint16Array: new Uint16Array(),
            uint32Array: new Uint32Array(),
            bigUint64Array: new BigUint64Array(),
            int8Array: new Int8Array(),
            int16Array: new Int16Array(),
            int32Array: new Int32Array(),
            bigInt64Array: new BigInt64Array(),
            float32Array: new Float32Array(),
            float64Array: new Float64Array(),
            buffer: Buffer.alloc(0),
            arrayBuffer: new ArrayBuffer(0),
            sharedArrayBuffer: new SharedArrayBuffer(0),
            dataView: new DataView(new ArrayBuffer(0)),
            weakSet: new WeakSet(),
            weakMap: new WeakMap(),
        };
    }

    export const ADDABLE = false;

    export const SPOILERS: Spoiler<NativeSimple>[] = [
        (input) => {
            input.date = {} as any;
            return ["$input.date"];
        },
        (input) => {
            input.uint8Array = [] as any;
            return ["$input.uint8Array"];
        },
        (input) => {
            input.uint8ClampedArray = null!;
            return ["$input.uint8ClampedArray"];
        },
        (input) => {
            input.uint16Array = undefined!;
            return ["$input.uint16Array"];
        },
        (input) => {
            input.uint32Array = new Int32Array() as any;
            return ["$input.uint32Array"];
        },
        (input) => {
            input.bigUint64Array = new Set() as any;
            return ["$input.bigUint64Array"];
        },
        (input) => {
            input.int8Array = new Map() as any;
            return ["$input.int8Array"];
        },
        (input) => {
            input.int16Array = new WeakMap() as any;
            return ["$input.int16Array"];
        },
        (input) => {
            input.int32Array = new WeakSet() as any;
            return ["$input.int32Array"];
        },
        (input) => {
            input.bigInt64Array = new Date() as any;
            return ["$input.bigInt64Array"];
        },
        (input) => {
            input.float32Array = new RegExp("") as any;
            return ["$input.float32Array"];
        },
        (input) => {
            input.float64Array = new Error() as any;
            return ["$input.float64Array"];
        },
        (input) => {
            input.buffer = new ArrayBuffer(0) as any;
            return ["$input.buffer"];
        },
        (input) => {
            input.arrayBuffer = undefined! as any;
            return ["$input.arrayBuffer"];
        },
        (input) => {
            input.sharedArrayBuffer = null! as any;
            return ["$input.sharedArrayBuffer"];
        },
        (input) => {
            input.dataView = 0 as any;
            return ["$input.dataView"];
        },
        (input) => {
            input.weakSet = new Set() as any;
            return ["$input.weakSet"];
        },
        (input) => {
            input.weakMap = new Map() as any;
            return ["$input.weakMap"];
        },
    ];
}
