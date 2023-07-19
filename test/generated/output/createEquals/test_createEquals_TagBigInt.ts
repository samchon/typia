import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { TagBigInt } from "../../../structures/TagBigInt";

export const test_equals_TagBigInt = _test_equals<TagBigInt>(TagBigInt)(
    (input: any, _exceptionable: boolean = true): input is TagBigInt => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "bigint" === typeof input.value &&
            "bigint" === typeof input.ranged &&
            0n <= input.ranged &&
            100n >= input.ranged &&
            "bigint" === typeof input.minimum &&
            0n <= input.minimum &&
            "bigint" === typeof input.maximum &&
            100n >= input.maximum &&
            "bigint" === typeof input.multipleOf &&
            0n === input.multipleOf % 3n &&
            (5 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (
                        [
                            "value",
                            "ranged",
                            "minimum",
                            "maximum",
                            "multipleOf",
                        ].some((prop: any) => key === prop)
                    )
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        return "object" === typeof input && null !== input && $io0(input, true);
    },
);
