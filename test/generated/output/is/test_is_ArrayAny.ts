import typia from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_is } from "../internal/_test_is";
export const test_is_ArrayAny = _test_is("ArrayAny", ArrayAny.generate, (input) => ((input: any): input is ArrayAny => {
    const $io0 = (input: any) => Array.isArray(input.anys) && Array.isArray(input.undefindable1) && Array.isArray(input.undefindable2) && Array.isArray(input.nullables1) && Array.isArray(input.nullables2) && Array.isArray(input.both1) && Array.isArray(input.both2) && Array.isArray(input.both3) && Array.isArray(input.union);
    return "object" === typeof input && null !== input && $io0(input);
})(input), ArrayAny.SPOILERS);
