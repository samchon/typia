import typia from "typia";

import { _test_functional_isReturnAsync } from "../../../internal/_test_functional_isReturnAsync";
import { ArraySimpleProtobufNullable } from "../../../structures/ArraySimpleProtobufNullable";

export const test_functional_isReturnAsync_ArraySimpleProtobufNullable =
  _test_functional_isReturnAsync("ArraySimpleProtobufNullable")(
    ArraySimpleProtobufNullable,
  )(
    (
      p: (
        input: ArraySimpleProtobufNullable,
      ) => Promise<ArraySimpleProtobufNullable>,
    ) =>
      async (
        input: ArraySimpleProtobufNullable,
      ): Promise<ArraySimpleProtobufNullable | null> => {
        const result = await p(input);
        return ((input: any): input is ArraySimpleProtobufNullable => {
          const $io0 = (input: any): boolean =>
            (null === input.boolean ||
              (Array.isArray(input.boolean) &&
                input.boolean.every(
                  (elem: any) => "boolean" === typeof elem,
                ))) &&
            (null === input.int32 ||
              (Array.isArray(input.int32) &&
                input.int32.every(
                  (elem: any) =>
                    "number" === typeof elem &&
                    Math.floor(elem) === elem &&
                    -2147483648 <= elem &&
                    elem <= 2147483647,
                ))) &&
            (null === input.uint32 ||
              (Array.isArray(input.uint32) &&
                input.uint32.every(
                  (elem: any) =>
                    "number" === typeof elem &&
                    Math.floor(elem) === elem &&
                    0 <= elem &&
                    elem <= 4294967295,
                ))) &&
            (null === input.int64 ||
              (Array.isArray(input.int64) &&
                input.int64.every(
                  (elem: any) => "bigint" === typeof elem && true,
                ))) &&
            (null === input.uint64 ||
              (Array.isArray(input.uint64) &&
                input.uint64.every(
                  (elem: any) => "bigint" === typeof elem && BigInt(0) <= elem,
                ))) &&
            (null === input.float ||
              (Array.isArray(input.float) &&
                input.float.every(
                  (elem: any) =>
                    "number" === typeof elem &&
                    -1.175494351e38 <= elem &&
                    elem <= 3.4028235e38,
                ))) &&
            (null === input.double ||
              (Array.isArray(input.double) &&
                input.double.every(
                  (elem: any) =>
                    "number" === typeof elem && Number.isFinite(elem) && true,
                ))) &&
            (null === input.string ||
              (Array.isArray(input.string) &&
                input.string.every((elem: any) => "string" === typeof elem))) &&
            (null === input.bytes ||
              (Array.isArray(input.bytes) &&
                input.bytes.every(
                  (elem: any) => elem instanceof Uint8Array,
                ))) &&
            (null === input.object ||
              (Array.isArray(input.object) &&
                input.object.every(
                  (elem: any) =>
                    "object" === typeof elem && null !== elem && $io0(elem),
                )));
          return "object" === typeof input && null !== input && $io0(input);
        })(result)
          ? result
          : null;
      },
  );
