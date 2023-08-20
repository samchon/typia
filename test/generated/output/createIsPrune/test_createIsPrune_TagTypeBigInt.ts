import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { TagTypeBigInt } from "../../../structures/TagTypeBigInt";

export const test_createIsPrune_TagTypeBigInt = _test_isPrune(
    "TagTypeBigInt",
    TagTypeBigInt.generate,
    (input: any): input is TagTypeBigInt => {
        const is = (input: any): input is TagTypeBigInt => {
            return (
                "object" === typeof input &&
                null !== input &&
                "bigint" === typeof (input as any).in64 &&
                "bigint" === typeof (input as any).uint64 &&
                BigInt(0) <= (input as any).uint64
            );
        };
        const prune = (input: TagTypeBigInt): void => {
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("in64" === key || "uint64" === key) continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        };
        if (!is(input)) return false;
        prune(input);
        return true;
    },
    TagTypeBigInt.SPOILERS,
);
