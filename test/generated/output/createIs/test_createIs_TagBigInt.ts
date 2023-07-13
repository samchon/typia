import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { TagBigInt } from "../../../structures/TagBigInt";

export const test_is_TagBigInt = _test_is(
    "TagBigInt",
    TagBigInt.generate,
    (input: any): input is TagBigInt => {
        return (
            "object" === typeof input &&
            null !== input &&
            "bigint" === typeof (input as any).value &&
            "bigint" === typeof (input as any).ranged &&
            0n <= (input as any).ranged &&
            100n >= (input as any).ranged &&
            "bigint" === typeof (input as any).minimum &&
            0n <= (input as any).minimum &&
            "bigint" === typeof (input as any).maximum &&
            100n >= (input as any).maximum &&
            "bigint" === typeof (input as any).multipleOf &&
            0n === (input as any).multipleOf % 3n
        );
    },
    TagBigInt.SPOILERS,
);
