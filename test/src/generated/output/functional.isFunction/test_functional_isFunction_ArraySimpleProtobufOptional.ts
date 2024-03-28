import typia from "typia";

import { _test_functional_isFunction } from "../../../internal/_test_functional_isFunction";
import { ArraySimpleProtobufOptional } from "../../../structures/ArraySimpleProtobufOptional";

export const test_functional_isFunction_ArraySimpleProtobufOptional =
  _test_functional_isFunction("ArraySimpleProtobufOptional")(
    ArraySimpleProtobufOptional,
  )(
    (p: (input: ArraySimpleProtobufOptional) => ArraySimpleProtobufOptional) =>
      (
        input: ArraySimpleProtobufOptional,
      ): ArraySimpleProtobufOptional | null => {
        if (
          false ===
          ((input: any): input is ArraySimpleProtobufOptional => {
            const $io0 = (input: any): boolean =>
              (undefined === input.boolean ||
                (Array.isArray(input.boolean) &&
                  input.boolean.every(
                    (elem: any) => "boolean" === typeof elem,
                  ))) &&
              (undefined === input.int32 ||
                (Array.isArray(input.int32) &&
                  input.int32.every(
                    (elem: any) =>
                      "number" === typeof elem &&
                      Math.floor(elem) === elem &&
                      -2147483648 <= elem &&
                      elem <= 2147483647,
                  ))) &&
              (undefined === input.uint32 ||
                (Array.isArray(input.uint32) &&
                  input.uint32.every(
                    (elem: any) =>
                      "number" === typeof elem &&
                      Math.floor(elem) === elem &&
                      0 <= elem &&
                      elem <= 4294967295,
                  ))) &&
              (undefined === input.int64 ||
                (Array.isArray(input.int64) &&
                  input.int64.every(
                    (elem: any) => "bigint" === typeof elem && true,
                  ))) &&
              (undefined === input.uint64 ||
                (Array.isArray(input.uint64) &&
                  input.uint64.every(
                    (elem: any) =>
                      "bigint" === typeof elem && BigInt(0) <= elem,
                  ))) &&
              (undefined === input.float ||
                (Array.isArray(input.float) &&
                  input.float.every(
                    (elem: any) =>
                      "number" === typeof elem &&
                      -1.175494351e38 <= elem &&
                      elem <= 3.4028235e38,
                  ))) &&
              (undefined === input.double ||
                (Array.isArray(input.double) &&
                  input.double.every(
                    (elem: any) =>
                      "number" === typeof elem && Number.isFinite(elem) && true,
                  ))) &&
              (undefined === input.string ||
                (Array.isArray(input.string) &&
                  input.string.every(
                    (elem: any) => "string" === typeof elem,
                  ))) &&
              (undefined === input.bytes ||
                (Array.isArray(input.bytes) &&
                  input.bytes.every(
                    (elem: any) => elem instanceof Uint8Array,
                  ))) &&
              (undefined === input.object ||
                (Array.isArray(input.object) &&
                  input.object.every(
                    (elem: any) =>
                      "object" === typeof elem &&
                      null !== elem &&
                      false === Array.isArray(elem) &&
                      $io0(elem),
                  )));
            return (
              "object" === typeof input &&
              null !== input &&
              false === Array.isArray(input) &&
              $io0(input)
            );
          })(input)
        )
          return null;
        const result = p(input);
        return ((input: any): input is ArraySimpleProtobufOptional => {
          const $io0 = (input: any): boolean =>
            (undefined === input.boolean ||
              (Array.isArray(input.boolean) &&
                input.boolean.every(
                  (elem: any) => "boolean" === typeof elem,
                ))) &&
            (undefined === input.int32 ||
              (Array.isArray(input.int32) &&
                input.int32.every(
                  (elem: any) =>
                    "number" === typeof elem &&
                    Math.floor(elem) === elem &&
                    -2147483648 <= elem &&
                    elem <= 2147483647,
                ))) &&
            (undefined === input.uint32 ||
              (Array.isArray(input.uint32) &&
                input.uint32.every(
                  (elem: any) =>
                    "number" === typeof elem &&
                    Math.floor(elem) === elem &&
                    0 <= elem &&
                    elem <= 4294967295,
                ))) &&
            (undefined === input.int64 ||
              (Array.isArray(input.int64) &&
                input.int64.every(
                  (elem: any) => "bigint" === typeof elem && true,
                ))) &&
            (undefined === input.uint64 ||
              (Array.isArray(input.uint64) &&
                input.uint64.every(
                  (elem: any) => "bigint" === typeof elem && BigInt(0) <= elem,
                ))) &&
            (undefined === input.float ||
              (Array.isArray(input.float) &&
                input.float.every(
                  (elem: any) =>
                    "number" === typeof elem &&
                    -1.175494351e38 <= elem &&
                    elem <= 3.4028235e38,
                ))) &&
            (undefined === input.double ||
              (Array.isArray(input.double) &&
                input.double.every(
                  (elem: any) =>
                    "number" === typeof elem && Number.isFinite(elem) && true,
                ))) &&
            (undefined === input.string ||
              (Array.isArray(input.string) &&
                input.string.every((elem: any) => "string" === typeof elem))) &&
            (undefined === input.bytes ||
              (Array.isArray(input.bytes) &&
                input.bytes.every(
                  (elem: any) => elem instanceof Uint8Array,
                ))) &&
            (undefined === input.object ||
              (Array.isArray(input.object) &&
                input.object.every(
                  (elem: any) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    false === Array.isArray(elem) &&
                    $io0(elem),
                )));
          return (
            "object" === typeof input &&
            null !== input &&
            false === Array.isArray(input) &&
            $io0(input)
          );
        })(result)
          ? result
          : null;
      },
  );
