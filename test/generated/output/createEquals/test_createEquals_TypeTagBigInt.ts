import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { TypeTagBigInt } from "../../../structures/TypeTagBigInt";

export const test_createEquals_TypeTagBigInt = _test_equals(
    "TypeTagBigInt",
)<TypeTagBigInt>(TypeTagBigInt)(
    (input: any, _exceptionable: boolean = true): input is TypeTagBigInt => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "bigint" === typeof input.value &&
            "bigint" === typeof input.ranged &&
            BigInt(0) <= input.ranged &&
            input.ranged <= BigInt(100) &&
            "bigint" === typeof input.minimum &&
            BigInt(0) <= input.minimum &&
            "bigint" === typeof input.maximum &&
            input.maximum <= BigInt(100) &&
            "bigint" === typeof input.multipleOf &&
            input.multipleOf % BigInt(3) === BigInt(0) &&
            (5 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (
                        [
                            "value",
                            "ranged",
                            "minimum",
                            "maximum",
                            "multipleOf",
                        ].some((prop: any) => key === prop)
                    )
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        return "object" === typeof input && null !== input && $io0(input, true);
    },
);
