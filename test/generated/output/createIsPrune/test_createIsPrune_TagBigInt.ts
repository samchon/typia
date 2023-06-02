import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { TagBigInt } from "../../../structures/TagBigInt";

export const test_createIsPrune_TagBigInt = _test_isPrune(
    "TagBigInt",
    TagBigInt.generate,
    (input: any): input is TagBigInt => {
        const is: any = (input: any): input is TagBigInt => {
            const $io0: any = (input: any): boolean =>
                "bigint" === typeof input.value &&
                "bigint" === typeof input.ranged &&
                0n <= input.ranged &&
                100n >= input.ranged &&
                "bigint" === typeof input.minimum &&
                0n <= input.minimum &&
                "bigint" === typeof input.maximum &&
                100n >= input.maximum &&
                "bigint" === typeof input.multipleOf &&
                0n === input.multipleOf % 3n;
            return "object" === typeof input && null !== input && $io0(input);
        };
        const prune: any = (input: TagBigInt): void => {
            const $po0: any = (input: any): any => {
                for (const key: any of Object.keys(input)) {
                    if (
                        "value" === key ||
                        "ranged" === key ||
                        "minimum" === key ||
                        "maximum" === key ||
                        "multipleOf" === key
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
    },
    TagBigInt.SPOILERS,
);
