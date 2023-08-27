import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { TypeTagRange } from "../../../structures/TypeTagRange";

export const test_misc_prune_TypeTagRange = _test_misc_prune(
    "TypeTagRange",
)<TypeTagRange>(TypeTagRange)((input) =>
    ((input: TypeTagRange): void => {
        const $io1 = (input: any): boolean =>
            "number" === typeof input.greater &&
            Math.floor(input.greater) === input.greater &&
            -2147483648 <= input.greater &&
            input.greater <= 2147483647 &&
            3 < input.greater &&
            "number" === typeof input.greater_equal &&
            Math.floor(input.greater_equal) === input.greater_equal &&
            -2147483648 <= input.greater_equal &&
            input.greater_equal <= 2147483647 &&
            3 <= input.greater_equal &&
            "number" === typeof input.less &&
            Math.floor(input.less) === input.less &&
            -2147483648 <= input.less &&
            input.less <= 2147483647 &&
            input.less < 7 &&
            "number" === typeof input.less_equal &&
            Math.floor(input.less_equal) === input.less_equal &&
            -2147483648 <= input.less_equal &&
            input.less_equal <= 2147483647 &&
            input.less_equal <= 7 &&
            "number" === typeof input.greater_less &&
            Math.floor(input.greater_less) === input.greater_less &&
            -2147483648 <= input.greater_less &&
            input.greater_less <= 2147483647 &&
            3 < input.greater_less &&
            input.greater_less < 7 &&
            "number" === typeof input.greater_equal_less &&
            Math.floor(input.greater_equal_less) === input.greater_equal_less &&
            -2147483648 <= input.greater_equal_less &&
            input.greater_equal_less <= 2147483647 &&
            3 <= input.greater_equal_less &&
            input.greater_equal_less < 7 &&
            "number" === typeof input.greater_less_equal &&
            Math.floor(input.greater_less_equal) === input.greater_less_equal &&
            -2147483648 <= input.greater_less_equal &&
            input.greater_less_equal <= 2147483647 &&
            3 < input.greater_less_equal &&
            input.greater_less_equal <= 7 &&
            "number" === typeof input.greater_equal_less_equal &&
            Math.floor(input.greater_equal_less_equal) ===
                input.greater_equal_less_equal &&
            -2147483648 <= input.greater_equal_less_equal &&
            input.greater_equal_less_equal <= 2147483647 &&
            3 <= input.greater_equal_less_equal &&
            input.greater_equal_less_equal <= 7 &&
            "number" === typeof input.equal &&
            Math.floor(input.equal) === input.equal &&
            -2147483648 <= input.equal &&
            input.equal <= 2147483647 &&
            10 <= input.equal &&
            input.equal <= 10;
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
    })(input),
);
