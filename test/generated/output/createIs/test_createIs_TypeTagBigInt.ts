import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { TypeTagBigInt } from "../../../structures/TypeTagBigInt";

export const test_createIs_TypeTagBigInt = _test_is(
    "TypeTagBigInt",
)<TypeTagBigInt>(TypeTagBigInt)((input: any): input is TypeTagBigInt => {
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
});
