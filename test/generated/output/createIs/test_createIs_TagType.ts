import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { TagType } from "../../../structures/TagType";

export const test_createIs_TagType = _test_is(
    "TagType",
    TagType.generate,
    (input: any): input is TagType => {
        const $io0 = (input: any): boolean =>
            Array.isArray(input.value) &&
            input.value.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io1(elem),
            );
        const $io1 = (input: any): boolean =>
            "number" === typeof input.int &&
            Number.isFinite(input.int) &&
            Math.floor(input.int) === input.int &&
            -2147483648 <= input.int &&
            input.int <= 2147483647 &&
            "number" === typeof input.uint &&
            Number.isFinite(input.uint) &&
            Math.floor(input.uint) === input.uint &&
            0 <= input.uint &&
            input.uint <= 4294967295 &&
            "number" === typeof input.int32 &&
            Number.isFinite(input.int32) &&
            Math.floor(input.int32) === input.int32 &&
            -2147483648 <= input.int32 &&
            input.int32 <= 2147483647 &&
            "number" === typeof input.uint32 &&
            Number.isFinite(input.uint32) &&
            Math.floor(input.uint32) === input.uint32 &&
            0 <= input.uint32 &&
            input.uint32 <= 4294967295 &&
            "number" === typeof input.int64 &&
            Number.isFinite(input.int64) &&
            Math.floor(input.int64) === input.int64 &&
            -9223372036854776000 <= input.int64 &&
            input.int64 <= 9223372036854776000 &&
            "number" === typeof input.uint64 &&
            Number.isFinite(input.uint64) &&
            Math.floor(input.uint64) === input.uint64 &&
            0 <= input.uint64 &&
            input.uint64 <= 18446744073709552000 &&
            "number" === typeof input.float &&
            Number.isFinite(input.float) &&
            -1.175494351e38 <= input.float &&
            input.float <= 3.4028235e38;
        return "object" === typeof input && null !== input && $io0(input);
    },
    TagType.SPOILERS,
);
