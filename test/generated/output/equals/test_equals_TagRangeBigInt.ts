import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { TagRangeBigInt } from "../../../structures/TagRangeBigInt";

export const test_equals_TagRangeBigInt = _test_equals(
    "TagRangeBigInt",
)<TagRangeBigInt>(TagRangeBigInt)((input) =>
    ((input: any, _exceptionable: boolean = true): input is TagRangeBigInt => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            Array.isArray(input.value) &&
            input.value.every(
                (elem: any, _index1: number) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    $io1(elem, true && _exceptionable),
            ) &&
            (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (["value"].some((prop: any) => key === prop))
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
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
            BigInt(10) >= input.equal &&
            (9 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (
                        [
                            "greater",
                            "greater_equal",
                            "less",
                            "less_equal",
                            "greater_less",
                            "greater_equal_less",
                            "greater_less_equal",
                            "greater_equal_less_equal",
                            "equal",
                        ].some((prop: any) => key === prop)
                    )
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        return "object" === typeof input && null !== input && $io0(input, true);
    })(input),
);
