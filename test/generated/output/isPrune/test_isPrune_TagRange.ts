import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { TagRange } from "../../../structures/TagRange";

export const test_isPrune_TagRange = _test_isPrune(
    "TagRange",
    TagRange.generate,
    (input) =>
        ((input: any): input is Array<TagRange.Type> => {
            const is: any = (input: any): input is Array<TagRange.Type> => {
                const $io0: any = (input: any): boolean =>
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
                    7 >= input.greater_equal_less_equal;
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    )
                );
            };
            const prune: any = (input: Array<TagRange.Type>): void => {
                const $po0: any = (input: any): any => {
                    for (const key: any of Object.keys(input)) {
                        if (
                            "greater" === key ||
                            "greater_equal" === key ||
                            "less" === key ||
                            "less_equal" === key ||
                            "greater_less" === key ||
                            "greater_equal_less" === key ||
                            "greater_less_equal" === key ||
                            "greater_equal_less_equal" === key
                        )
                            continue;
                        delete input[key];
                    }
                };
                if (Array.isArray(input))
                    (() =>
                        input.forEach((elem: any) => {
                            if ("object" === typeof elem && null !== elem)
                                $po0(elem);
                        }))();
            };
            if (!is(input)) return false;
            prune(input);
            return true;
        })(input),
    TagRange.SPOILERS,
);
