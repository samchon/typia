import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { TagNaN } from "../../../structures/TagNaN";

export const test_isPrune_TagNaN = _test_isPrune(
    "TagNaN",
    TagNaN.generate,
    (input) =>
        ((input: any): input is TagNaN => {
            const is = (input: any): input is TagNaN => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "number" === typeof (input as any).value &&
                    Number.isFinite((input as any).value) &&
                    "number" === typeof (input as any).ranged &&
                    0 <= (input as any).ranged &&
                    100 >= (input as any).ranged &&
                    "number" === typeof (input as any).minimum &&
                    Number.isFinite((input as any).minimum) &&
                    0 <= (input as any).minimum &&
                    "number" === typeof (input as any).maximum &&
                    Number.isFinite((input as any).maximum) &&
                    100 >= (input as any).maximum &&
                    "number" === typeof (input as any).multipleOf &&
                    0 === (input as any).multipleOf % 3 &&
                    "number" === typeof (input as any).typed &&
                    Number.isFinite((input as any).typed) &&
                    parseInt((input as any).typed) === (input as any).typed
                );
            };
            const prune = (input: TagNaN): void => {
                const $po0 = (input: any): any => {
                    for (const key of Object.keys(input)) {
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
