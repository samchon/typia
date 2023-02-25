import typia from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_isParse } from "../internal/_test_isParse";
export const test_isParse_ArrayAny = _test_isParse("ArrayAny", ArrayAny.generate, (input) => ((input: any): typia.Primitive<ArrayAny> => { const is = (input: any): input is ArrayAny => {
    const $io0 = (input: any) => Array.isArray(input.anys) && Array.isArray(input.undefindable1) && Array.isArray(input.undefindable2) && Array.isArray(input.nullables1) && Array.isArray(input.nullables2) && Array.isArray(input.both1) && Array.isArray(input.both2) && Array.isArray(input.both3) && Array.isArray(input.union);
    return "object" === typeof input && null !== input && $io0(input);
}; input = JSON.parse(input); return is(input) ? input as any : null; })(input), ArrayAny.SPOILERS);
