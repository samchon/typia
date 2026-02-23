import { TestStructure } from "@typia/template";
import typia from "typia";

import { _test_protobuf_decode } from "./_test_protobuf_decode";

export const _test_protobuf_assertDecode =
  (_ErrorClass: Function) =>
  (name: string) =>
  <T extends object>(factory: TestStructure<T>) =>
  (functor: {
    decode: (input: Uint8Array) => typia.Resolved<T>;
    encode: (input: T) => Uint8Array;
  }): void => {
    _test_protobuf_decode(name)(factory)({
      decode: functor.decode,
      encode: functor.encode,
    }) satisfies void;
  };
