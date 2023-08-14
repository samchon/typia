import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { TagRange } from "../../../structures/TagRange";

export const test_misc_isPrune_TagRange = _test_misc_isPrune<TagRange>(
    TagRange,
)((input: any): input is TagRange => {
    const is = (input: any): input is TagRange => {
        const $io0 = (input: any): boolean =>
            Array.isArray(input.value) &&
            input.value.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io1(elem),
            );
        const $io1 = (input: any): boolean =>
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
            10 >= input.equal;
        return "object" === typeof input && null !== input && $io0(input);
    };
    const prune = (input: TagRange): void => {
        const $io1 = (input: any): boolean =>
            "number" === typeof input.greater &&
            3 < input.greater &&
            "number" === typeof input.greater_equal &&
            3 <= input.greater_equal &&
            "number" === typeof input.less &&
            7 > input.less &&
            "number" === typeof input.less_equal &&
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
            10 >= input.equal;
        const $pp0 = (input: any) =>
            input.forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem) $po1(elem);
            });
        const $po0 = (input: any): any => {
            if (Array.isArray(input.value)) $pp0(input.value);
            for (const key of Object.keys(input)) {
                if ("value" === key) continue;
                delete input[key];
            }
        };
        const $po1 = (input: any): any => {
            for (const key of Object.keys(input)) {
                if (
                    "greater" === key ||
                    "greater_equal" === key ||
                    "less" === key ||
                    "less_equal" === key ||
                    "greater_less" === key ||
                    "greater_equal_less" === key ||
                    "greater_less_equal" === key ||
                    "greater_equal_less_equal" === key ||
                    "equal" === key
                )
                    continue;
                delete input[key];
            }
        };
        if ("object" === typeof input && null !== input) $po0(input);
    };
    if (!is(input)) return false;
    prune(input);
    return true;
});
