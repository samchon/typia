import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { TagNaN } from "../../../structures/TagNaN";

export const test_isPrune_TagNaN = _test_isPrune(
    "TagNaN",
    TagNaN.generate,
    (input) =>
        ((input: any): input is TagNaN => {
            const is: any = (input: any): input is TagNaN => {
                const $io0: any = (input: any): boolean =>
                    "number" === typeof input.value &&
                    Number.isFinite(input.value) &&
                    "number" === typeof input.ranged &&
                    0 <= input.ranged &&
                    100 >= input.ranged &&
                    "number" === typeof input.minimum &&
                    Number.isFinite(input.minimum) &&
                    0 <= input.minimum &&
                    "number" === typeof input.maximum &&
                    Number.isFinite(input.maximum) &&
                    100 >= input.maximum &&
                    "number" === typeof input.multipleOf &&
                    0 === input.multipleOf % 3 &&
                    "number" === typeof input.typed &&
                    Number.isFinite(input.typed) &&
                    parseInt(input.typed) === input.typed;
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const prune: any = (input: TagNaN): void => {
                const $po0: any = (input: any): any => {
                    for (const key: any of Object.keys(input)) {
                        if (
                            "value" === key ||
                            "ranged" === key ||
                            "minimum" === key ||
                            "maximum" === key ||
                            "multipleOf" === key ||
                            "typed" === key
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
        })(input),
    TagNaN.SPOILERS,
);
