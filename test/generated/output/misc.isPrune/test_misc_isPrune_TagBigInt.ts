import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { TagBigInt } from "../../../structures/TagBigInt";

export const test_misc_isPrune_TagBigInt = _test_misc_isPrune(
    "TagBigInt",
)<TagBigInt>(TagBigInt)((input) =>
    ((input: any): input is TagBigInt => {
        const is = (input: any): input is TagBigInt => {
            return (
                "object" === typeof input &&
                null !== input &&
                "bigint" === typeof (input as any).value &&
                "bigint" === typeof (input as any).ranged &&
                BigInt(0) <= (input as any).ranged &&
                BigInt(100) >= (input as any).ranged &&
                "bigint" === typeof (input as any).minimum &&
                BigInt(0) <= (input as any).minimum &&
                "bigint" === typeof (input as any).maximum &&
                BigInt(100) >= (input as any).maximum &&
                "bigint" === typeof (input as any).multipleOf &&
                BigInt(0) === (input as any).multipleOf % BigInt(3)
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
    })(input),
);
