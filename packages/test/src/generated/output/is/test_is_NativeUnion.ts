import typia from "typia";

import { _test_is } from "../../../internal/_test_is";
import { NativeUnion } from "../../../structures/NativeUnion";

export const test_is_NativeUnion = _test_is("NativeUnion")<NativeUnion>(
  NativeUnion,
)((input) =>
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
        (elem: any) => "object" === typeof elem && null !== elem && $io0(elem),
      )
    );
  })(input),
);
