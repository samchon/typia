import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { TagRange } from "../../../structures/TagRange";

export const test_equals_TagRange = _test_equals<TagRange>(TagRange)(
    (input: any, _exceptionable: boolean = true): input is TagRange => {
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
            "number" === typeof input.greater &&
            Number.isFinite(input.greater) &&
            3 < input.greater &&
            "number" === typeof input.greater_equal &&
            Number.isFinite(input.greater_equal) &&
            3 <= input.greater_equal &&
            "number" === typeof input.less &&
            Number.isFinite(input.less) &&
            7 > input.less &&
            "number" === typeof input.less_equal &&
            Number.isFinite(input.less_equal) &&
            7 >= input.less_equal &&
            "number" === typeof input.greater_less &&
            3 < input.greater_less &&
            7 > input.greater_less &&
            "number" === typeof input.greater_equal_less &&
            3 <= input.greater_equal_less &&
            7 > input.greater_equal_less &&
            "number" === typeof input.greater_less_equal &&
            3 < input.greater_less_equal &&
            7 >= input.greater_less_equal &&
            "number" === typeof input.greater_equal_less_equal &&
            3 <= input.greater_equal_less_equal &&
            7 >= input.greater_equal_less_equal &&
            "number" === typeof input.equal &&
            10 <= input.equal &&
            10 >= input.equal &&
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
    },
);
