import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ObjectHttpNullable } from "../../../structures/ObjectHttpNullable";

export const test_is_ObjectHttpNullable = _test_is(
    "ObjectHttpNullable",
)<ObjectHttpNullable>(ObjectHttpNullable)((input) =>
    ((input: any): input is ObjectHttpNullable => {
        const $io0 = (input: any): boolean =>
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
                "one" === input.constantString);
        return "object" === typeof input && null !== input && $io0(input);
    })(input),
);
