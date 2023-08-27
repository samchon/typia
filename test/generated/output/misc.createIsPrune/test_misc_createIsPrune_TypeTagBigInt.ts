import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { TypeTagBigInt } from "../../../structures/TypeTagBigInt";

export const test_misc_isPrune_TypeTagBigInt = _test_misc_isPrune(
    "TypeTagBigInt",
)<TypeTagBigInt>(TypeTagBigInt)((input: any): input is TypeTagBigInt => {
    const is = (input: any): input is TypeTagBigInt => {
        return (
            "object" === typeof input &&
            null !== input &&
            "bigint" === typeof (input as any).value &&
            "bigint" === typeof (input as any).ranged &&
            BigInt(0) <= (input as any).ranged &&
            (input as any).ranged <= BigInt(100) &&
            "bigint" === typeof (input as any).minimum &&
            BigInt(0) <= (input as any).minimum &&
            "bigint" === typeof (input as any).maximum &&
            (input as any).maximum <= BigInt(100) &&
            "bigint" === typeof (input as any).multipleOf &&
            (input as any).multipleOf % BigInt(3) === BigInt(0)
        );
    };
    const prune = (input: TypeTagBigInt): void => {
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
});
