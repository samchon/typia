import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { TagBigInt } from "../../../structures/TagBigInt";

export const test_createIsPrune_TagBigInt = _test_isPrune(
    "TagBigInt",
    TagBigInt.generate,
    (input: any): input is TagBigInt => {
        const is = (input: any): input is TagBigInt => {
            return (
                "object" === typeof input &&
                null !== input &&
                "bigint" === typeof (input as any).value &&
                "bigint" === typeof (input as any).ranged &&
                0n <= (input as any).ranged &&
                100n >= (input as any).ranged &&
                "bigint" === typeof (input as any).minimum &&
                0n <= (input as any).minimum &&
                "bigint" === typeof (input as any).maximum &&
                100n >= (input as any).maximum &&
                "bigint" === typeof (input as any).multipleOf &&
                0n === (input as any).multipleOf % 3n
            );
        };
        const prune = (input: TagBigInt): void => {
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
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
