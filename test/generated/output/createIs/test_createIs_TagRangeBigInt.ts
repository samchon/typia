import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { TagRangeBigInt } from "../../../structures/TagRangeBigInt";

export const test_createIs_TagRangeBigInt = _test_is(
    "TagRangeBigInt",
    TagRangeBigInt.generate,
    (input: any): input is TagRangeBigInt => {
        const $io0 = (input: any): boolean =>
            Array.isArray(input.value) &&
            input.value.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io1(elem),
            );
        const $io1 = (input: any): boolean =>
            "bigint" === typeof input.greater &&
            BigInt(3) < input.greater &&
            "bigint" === typeof input.greater_equal &&
            BigInt(3) <= input.greater_equal &&
            "bigint" === typeof input.less &&
            BigInt(7) > input.less &&
            "bigint" === typeof input.less_equal &&
            BigInt(7) >= input.less_equal &&
            "bigint" === typeof input.greater_less &&
            BigInt(3) < input.greater_less &&
            BigInt(7) > input.greater_less &&
            "bigint" === typeof input.greater_equal_less &&
            BigInt(3) <= input.greater_equal_less &&
            BigInt(7) > input.greater_equal_less &&
            "bigint" === typeof input.greater_less_equal &&
            BigInt(3) < input.greater_less_equal &&
            BigInt(7) >= input.greater_less_equal &&
            "bigint" === typeof input.greater_equal_less_equal &&
            BigInt(3) <= input.greater_equal_less_equal &&
            BigInt(7) >= input.greater_equal_less_equal &&
            "bigint" === typeof input.equal &&
            BigInt(10) <= input.equal &&
            BigInt(10) >= input.equal;
        return "object" === typeof input && null !== input && $io0(input);
    },
    TagRangeBigInt.SPOILERS,
);
