import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { TypeTagTypeBigInt } from "../../../structures/TypeTagTypeBigInt";

export const test_misc_createIsPrune_TypeTagTypeBigInt = _test_misc_isPrune(
    "TypeTagTypeBigInt",
)<TypeTagTypeBigInt>(TypeTagTypeBigInt)(
    (input: any): input is TypeTagTypeBigInt => {
        const is = (input: any): input is TypeTagTypeBigInt => {
            return (
                "object" === typeof input &&
                null !== input &&
                "bigint" === typeof (input as any).in64 &&
                "bigint" === typeof (input as any).uint64 &&
                BigInt(0) <= (input as any).uint64
            );
        };
        const prune = (input: TypeTagTypeBigInt): void => {
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
);
