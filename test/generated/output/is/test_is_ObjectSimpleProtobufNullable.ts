import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ObjectSimpleProtobufNullable } from "../../../structures/ObjectSimpleProtobufNullable";

export const test_is_ObjectSimpleProtobufNullable = _test_is(
    "ObjectSimpleProtobufNullable",
)<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)((input) =>
    ((input: any): input is ObjectSimpleProtobufNullable => {
        const $io0 = (input: any): boolean =>
            (null === input.bool || "boolean" === typeof input.bool) &&
            (null === input.int32 ||
                ("number" === typeof input.int32 &&
                    Number.isFinite(input.int32) &&
                    Math.floor(input.int32) === input.int32 &&
                    -2147483648 <= input.int32 &&
                    input.int32 <= 2147483647)) &&
            (null === input.uint32 ||
                ("number" === typeof input.uint32 &&
                    Number.isFinite(input.uint32) &&
                    Math.floor(input.uint32) === input.uint32 &&
                    0 <= input.uint32 &&
                    input.uint32 <= 4294967295)) &&
            (null === input.int64 || "bigint" === typeof input.int64) &&
            (null === input.uint64 ||
                ("bigint" === typeof input.uint64 &&
                    BigInt(0) <= input.uint64)) &&
            (null === input.float ||
                ("number" === typeof input.float &&
                    Number.isFinite(input.float) &&
                    -1.175494351e38 <= input.float &&
                    input.float <= 3.4028235e38)) &&
            (null === input.double ||
                ("number" === typeof input.double &&
                    Number.isFinite(input.double))) &&
            (null === input.string || "string" === typeof input.string) &&
            (null === input.bytes || input.bytes instanceof Uint8Array);
        return "object" === typeof input && null !== input && $io0(input);
    })(input),
);
