import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { ObjectHttpNullable } from "../../../structures/ObjectHttpNullable";

export const test_equals_ObjectHttpNullable = _test_equals(
    "ObjectHttpNullable",
)<ObjectHttpNullable>(ObjectHttpNullable)((input) =>
    ((
        input: any,
        _exceptionable: boolean = true,
    ): input is ObjectHttpNullable => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            (null === input.boolean || "boolean" === typeof input.boolean) &&
            (null === input.bigint || "bigint" === typeof input.bigint) &&
            (null === input.number ||
                ("number" === typeof input.number &&
                    Number.isFinite(input.number) &&
                    1 <= input.number)) &&
            (null === input.string || "string" === typeof input.string) &&
            (null === input.constantBoolean ||
                true === input.constantBoolean) &&
            (null === input.constantBigint ||
                BigInt(1) === input.constantBigint ||
                BigInt(2) === input.constantBigint ||
                BigInt(3) === input.constantBigint) &&
            (null === input.constantNumber ||
                3 === input.constantNumber ||
                2 === input.constantNumber ||
                1 === input.constantNumber) &&
            (null === input.constantString ||
                "three" === input.constantString ||
                "two" === input.constantString ||
                "one" === input.constantString) &&
            (8 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (
                        [
                            "boolean",
                            "bigint",
                            "number",
                            "string",
                            "constantBoolean",
                            "constantBigint",
                            "constantNumber",
                            "constantString",
                        ].some((prop: any) => key === prop)
                    )
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        return "object" === typeof input && null !== input && $io0(input, true);
    })(input),
);
