import typia from "typia";
import { _test_functional_isReturn } from "../../../internal/_test_functional_isReturn";
import { ObjectSimpleProtobuf } from "../../../structures/ObjectSimpleProtobuf";
export const test_functional_isReturn_ObjectSimpleProtobuf =
  _test_functional_isReturn("ObjectSimpleProtobuf")(ObjectSimpleProtobuf)(
    (p: (input: ObjectSimpleProtobuf) => ObjectSimpleProtobuf) =>
      (input: ObjectSimpleProtobuf): ObjectSimpleProtobuf | null => {
        const result = p(input);
        return ((input: any): input is ObjectSimpleProtobuf => {
          const $io0 = (input: any): boolean =>
            "boolean" === typeof input.bool &&
            "number" === typeof input.int32 &&
            Math.floor(input.int32) === input.int32 &&
            -2147483648 <= input.int32 &&
            input.int32 <= 2147483647 &&
            "number" === typeof input.uint32 &&
            Math.floor(input.uint32) === input.uint32 &&
            0 <= input.uint32 &&
            input.uint32 <= 4294967295 &&
            "bigint" === typeof input.int64 &&
            "bigint" === typeof input.uint64 &&
            BigInt(0) <= input.uint64 &&
            "number" === typeof input.float &&
            -1.175494351e38 <= input.float &&
            input.float <= 3.4028235e38 &&
            "number" === typeof input.double &&
            Number.isFinite(input.double) &&
            true &&
            "string" === typeof input.string &&
            input.bytes instanceof Uint8Array;
          return "object" === typeof input && null !== input && $io0(input);
        })(result)
          ? result
          : null;
      },
  );
