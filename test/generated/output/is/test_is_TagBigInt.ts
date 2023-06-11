import typia from "../../../../src";
import { TagBigInt } from "../../../structures/TagBigInt";
import { _test_is } from "../../../internal/_test_is";
export const test_is_TagBigInt = _test_is("TagBigInt", TagBigInt.generate, (input) => ((input: any): input is TagBigInt => {
    const $io0 = (input: any): boolean => "bigint" === typeof input.value && ("bigint" === typeof input.ranged && 0n <= input.ranged && 100n >= input.ranged) && ("bigint" === typeof input.minimum && 0n <= input.minimum) && ("bigint" === typeof input.maximum && 100n >= input.maximum) && ("bigint" === typeof input.multipleOf && 0n === input.multipleOf % 3n);
    return "object" === typeof input && null !== input && $io0(input);
})(input), TagBigInt.SPOILERS);
