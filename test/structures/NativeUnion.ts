import { Spoiler } from "../internal/Spoiler";

export type NativeUnion = NativeUnion.Union[];
export namespace NativeUnion {
    export const PRIMITIVE = false;

    export interface Union {
        date: Date | null;
        unsigned:
            | Uint8Array
            | Uint8ClampedArray
            | Uint16Array
            | Uint32Array
            | BigUint64Array;
        signed: Int8Array | Int16Array | Int32Array | BigInt64Array;
        float: Float32Array | Float64Array;
        buffer: Buffer | ArrayBuffer | SharedArrayBuffer | DataView;
        weak: WeakSet<any> | WeakMap<any, any>;
    }

    export const ADDABLE = false;

    // prettier-ignore
    export function generate(): NativeUnion {
        const output: NativeUnion = [];
        for (const date of [new Date(), null])
        for (const unsigned of [new Uint8Array(), new Uint8ClampedArray(), new Uint16Array(), new Uint32Array(), new BigUint64Array()])
        for (const signed of [new Int8Array(), new Int16Array(), new Int32Array(), new BigInt64Array()])
        for (const float of [new Float32Array(), new Float64Array()])
        for (const buffer of [Buffer.alloc(0), new ArrayBuffer(0), new SharedArrayBuffer(0), new DataView(new ArrayBuffer(0))])
        for (const weak of [new WeakSet(), new WeakMap()])
            output.push({ 
                date, 
                unsigned, 
                signed, 
                float, 
                buffer, 
                weak 
            });
        return output;
    }

    export const SPOILERS: Spoiler<NativeUnion>[] = [
        (input) => {
            input[0].date = {} as any;
            return ["$input[0].date"];
        },
        (input) => {
            input[1].unsigned = [] as any;
            return ["$input[1].unsigned"];
        },
        (input) => {
            input[2].unsigned = new Int8Array() as any;
            return ["$input[2].unsigned"];
        },
        (input) => {
            input[3].unsigned = null!;
            return ["$input[3].unsigned"];
        },
        (input) => {
            input[4].signed = new Uint8Array() as any;
            return ["$input[4].signed"];
        },
        (input) => {
            input[5].float = new Uint8Array() as any;
            return ["$input[5].float"];
        },
        (input) => {
            input[6].buffer = new Uint8Array() as any;
            return ["$input[6].buffer"];
        },
        (input) => {
            input[7].weak = new Map() as any;
            return ["$input[7].weak"];
        },
    ];
}
