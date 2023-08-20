import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { TagBigInt } from "../../../structures/TagBigInt";

export const test_is_TagBigInt = _test_is(
    "TagBigInt",
    TagBigInt.generate,
    (input) =>
        ((input: any): input is TagBigInt => {
            return (
                "object" === typeof input &&
                null !== input &&
                "bigint" === typeof (input as any).value &&
                "bigint" === typeof (input as any).ranged &&
                BigInt(0) <= (input as any).ranged &&
                BigInt(100) >= (input as any).ranged &&
                "bigint" === typeof (input as any).minimum &&
                BigInt(0) <= (input as any).minimum &&
                "bigint" === typeof (input as any).maximum &&
                BigInt(100) >= (input as any).maximum &&
                "bigint" === typeof (input as any).multipleOf &&
                BigInt(0) === (input as any).multipleOf % BigInt(3)
            );
        })(input),
    TagBigInt.SPOILERS,
);
