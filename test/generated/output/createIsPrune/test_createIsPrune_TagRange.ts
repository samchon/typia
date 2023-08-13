import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { TagRange } from "../../../structures/TagRange";

export const test_createIsPrune_TagRange = _test_isPrune(
    "TagRange",
    TagRange.generate,
    (input: any): input is TagRange => {
        const is = (input: any): input is TagRange => {
            const $io0 = (input: any): boolean =>
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
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                )
            );
        };
        const prune = (input: TagRange): void => {
            const $pp0 = (input: any) =>
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po0(elem);
                });
            const $po0 = (input: any): any => {
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
            if (Array.isArray(input)) $pp0(input);
        };
        if (!is(input)) return false;
        prune(input);
        return true;
    },
    TagRange.SPOILERS,
);
