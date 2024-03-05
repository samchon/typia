import typia from "typia";

import { _test_functional_isFunction } from "../../../internal/_test_functional_isFunction";
import { NativeSimple } from "../../../structures/NativeSimple";

export const test_functional_isFunction_NativeSimple =
  _test_functional_isFunction("NativeSimple")(NativeSimple)(
    (p: (input: NativeSimple) => NativeSimple) =>
      (input: NativeSimple): NativeSimple | null => {
        if (
          false ===
          ((input: any): input is NativeSimple => {
            const $io0 = (input: any): boolean =>
              input.date instanceof Date &&
              input.uint8Array instanceof Uint8Array &&
              input.uint8ClampedArray instanceof Uint8ClampedArray &&
              input.uint16Array instanceof Uint16Array &&
              input.uint32Array instanceof Uint32Array &&
              input.bigUint64Array instanceof BigUint64Array &&
              input.int8Array instanceof Int8Array &&
              input.int16Array instanceof Int16Array &&
              input.int32Array instanceof Int32Array &&
              input.bigInt64Array instanceof BigInt64Array &&
              input.float32Array instanceof Float32Array &&
              input.float64Array instanceof Float64Array &&
              input.arrayBuffer instanceof ArrayBuffer &&
              input.sharedArrayBuffer instanceof SharedArrayBuffer &&
              input.dataView instanceof DataView;
            return "object" === typeof input && null !== input && $io0(input);
          })(input)
        )
          return null;
        const result = p(input);
        return ((input: any): input is NativeSimple => {
          const $io0 = (input: any): boolean =>
            input.date instanceof Date &&
            input.uint8Array instanceof Uint8Array &&
            input.uint8ClampedArray instanceof Uint8ClampedArray &&
            input.uint16Array instanceof Uint16Array &&
            input.uint32Array instanceof Uint32Array &&
            input.bigUint64Array instanceof BigUint64Array &&
            input.int8Array instanceof Int8Array &&
            input.int16Array instanceof Int16Array &&
            input.int32Array instanceof Int32Array &&
            input.bigInt64Array instanceof BigInt64Array &&
            input.float32Array instanceof Float32Array &&
            input.float64Array instanceof Float64Array &&
            input.arrayBuffer instanceof ArrayBuffer &&
            input.sharedArrayBuffer instanceof SharedArrayBuffer &&
            input.dataView instanceof DataView;
          return "object" === typeof input && null !== input && $io0(input);
        })(result)
          ? result
          : null;
      },
  );
