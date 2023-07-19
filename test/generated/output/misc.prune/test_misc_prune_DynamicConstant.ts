import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_misc_prune_DynamicConstant =
    _test_misc_prune<DynamicConstant>(DynamicConstant)((input) =>
        ((input: { a: number; b: number; c: number; d: number }): void => {
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if (
                        "a" === key ||
                        "b" === key ||
                        "c" === key ||
                        "d" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        })(input),
    );
