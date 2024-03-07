import typia from "typia";
import { _test_functional_isReturn } from "../../../internal/_test_functional_isReturn";
import { ObjectSimpleProtobufOptional } from "../../../structures/ObjectSimpleProtobufOptional";
export const test_functional_isReturn_ObjectSimpleProtobufOptional =
  _test_functional_isReturn("ObjectSimpleProtobufOptional")(
    ObjectSimpleProtobufOptional,
  )(
    (
        p: (
          input: ObjectSimpleProtobufOptional,
        ) => ObjectSimpleProtobufOptional,
      ) =>
      (
        input: ObjectSimpleProtobufOptional,
      ): ObjectSimpleProtobufOptional | null => {
        const result = p(input);
        return ((input: any): input is ObjectSimpleProtobufOptional => {
          const $io0 = (input: any): boolean =>
            (undefined === input.bool || "boolean" === typeof input.bool) &&
            (undefined === input.int32 ||
              ("number" === typeof input.int32 &&
                Math.floor(input.int32) === input.int32 &&
                -2147483648 <= input.int32 &&
                input.int32 <= 2147483647)) &&
            (undefined === input.uint32 ||
              ("number" === typeof input.uint32 &&
                Math.floor(input.uint32) === input.uint32 &&
                0 <= input.uint32 &&
                input.uint32 <= 4294967295)) &&
            (undefined === input.int64 || "bigint" === typeof input.int64) &&
            (undefined === input.uint64 ||
              ("bigint" === typeof input.uint64 &&
                BigInt(0) <= input.uint64)) &&
            (undefined === input.float ||
              ("number" === typeof input.float &&
                -1.175494351e38 <= input.float &&
                input.float <= 3.4028235e38)) &&
            (undefined === input.double ||
              ("number" === typeof input.double &&
                Number.isFinite(input.double) &&
                true)) &&
            (undefined === input.string || "string" === typeof input.string) &&
            (undefined === input.bytes || input.bytes instanceof Uint8Array);
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
