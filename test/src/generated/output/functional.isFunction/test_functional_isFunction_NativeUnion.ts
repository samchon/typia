import typia from "typia";
import { _test_functional_isFunction } from "../../../internal/_test_functional_isFunction";
import { NativeUnion } from "../../../structures/NativeUnion";
export const test_functional_isFunction_NativeUnion =
  _test_functional_isFunction("NativeUnion")(NativeUnion)(
    (p: (input: NativeUnion) => NativeUnion) =>
      (input: NativeUnion): NativeUnion | null => {
        if (
          false ===
          ((input: any): input is NativeUnion => {
            const $io0 = (input: any): boolean =>
              (null === input.date || input.date instanceof Date) &&
              (input.unsigned instanceof Uint8Array ||
                input.unsigned instanceof Uint8ClampedArray ||
                input.unsigned instanceof Uint16Array ||
                input.unsigned instanceof Uint32Array ||
                input.unsigned instanceof BigUint64Array) &&
              (input.signed instanceof Int8Array ||
                input.signed instanceof Int16Array ||
                input.signed instanceof Int32Array ||
                input.signed instanceof BigInt64Array) &&
              (input.float instanceof Float32Array ||
                input.float instanceof Float64Array) &&
              (input.buffer instanceof ArrayBuffer ||
                input.buffer instanceof SharedArrayBuffer);
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io0(elem),
              )
            );
          })(input)
        )
          return null;
        const result = p(input);
        return ((input: any): input is NativeUnion => {
          const $io0 = (input: any): boolean =>
            (null === input.date || input.date instanceof Date) &&
            (input.unsigned instanceof Uint8Array ||
              input.unsigned instanceof Uint8ClampedArray ||
              input.unsigned instanceof Uint16Array ||
              input.unsigned instanceof Uint32Array ||
              input.unsigned instanceof BigUint64Array) &&
            (input.signed instanceof Int8Array ||
              input.signed instanceof Int16Array ||
              input.signed instanceof Int32Array ||
              input.signed instanceof BigInt64Array) &&
            (input.float instanceof Float32Array ||
              input.float instanceof Float64Array) &&
            (input.buffer instanceof ArrayBuffer ||
              input.buffer instanceof SharedArrayBuffer);
          return (
            Array.isArray(input) &&
            input.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io0(elem),
            )
          );
        })(result)
          ? result
          : null;
      },
  );
