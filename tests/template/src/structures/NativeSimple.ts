import { Spoiler } from "../utils/Spoiler";

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
  arrayBuffer: ArrayBuffer;
  sharedArrayBuffer: SharedArrayBuffer;
  dataView: DataView;
  blob: Blob;
  file: File;
  regexp: RegExp;
}
export namespace NativeSimple {
  export const ADDABLE = false;
  export const BINARABLE = false;
  export const JSONABLE = false;
  export const PRIMITIVE = false;

  export function generate(): NativeSimple {
    const sharedArrayBuffer = new SharedArrayBuffer(4);
    new Uint8Array(sharedArrayBuffer).set([4, 3, 2, 1]);
    return {
      date: new Date("2026-07-16T00:00:00.000Z"),
      uint8Array: new Uint8Array([1, 2]),
      uint8ClampedArray: new Uint8ClampedArray([3, 4]),
      uint16Array: new Uint16Array([5, 6]),
      uint32Array: new Uint32Array([7, 8]),
      bigUint64Array: new BigUint64Array([9n, 10n]),
      int8Array: new Int8Array([-1, 1]),
      int16Array: new Int16Array([-2, 2]),
      int32Array: new Int32Array([-3, 3]),
      bigInt64Array: new BigInt64Array([-4n, 4n]),
      float32Array: new Float32Array([-1.5, 1.5]),
      float64Array: new Float64Array([-2.5, 2.5]),
      arrayBuffer: Uint8Array.from([1, 2, 3, 4]).buffer,
      sharedArrayBuffer,
      dataView: new DataView(Uint8Array.from([9, 1, 2, 8]).buffer, 1, 2),
      blob: new Blob([Uint8Array.from([1, 2, 3])], {
        type: "application/x-typia",
      }),
      file: new File([Uint8Array.from([3, 2, 1])], "native.bin", {
        type: "application/octet-stream",
        lastModified: 123_456_789,
      }),
      regexp: /plain\s+native/giu,
    };
  }

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
      input.blob = {} as any;
      return ["$input.blob"];
    },
    (input) => {
      input.file = new Blob() as any;
      return ["$input.file"];
    },
    (input) => {
      input.regexp = {} as any;
      return ["$input.regexp"];
    },
  ];
}
