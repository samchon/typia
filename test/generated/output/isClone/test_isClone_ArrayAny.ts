import typia from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_isClone } from "../internal/_test_isClone";
export const test_isClone_ArrayAny = _test_isClone("ArrayAny", ArrayAny.generate, (input) => ((input: any): typia.Primitive<ArrayAny> | null => { const is = (input: any): input is ArrayAny => {
    const $io0 = (input: any) => Array.isArray(input.anys) && Array.isArray(input.undefindable1) && Array.isArray(input.undefindable2) && Array.isArray(input.nullables1) && Array.isArray(input.nullables2) && Array.isArray(input.both1) && Array.isArray(input.both2) && Array.isArray(input.both3) && Array.isArray(input.union);
    return "object" === typeof input && null !== input && $io0(input);
}; const clone = (input: ArrayAny): typia.Primitive<ArrayAny> => {
    const $any = (typia.isClone as any).any;
    const $co0 = (input: any) => ({
        anys: $any(input.anys),
        undefindable1: $any(input.undefindable1),
        undefindable2: $any(input.undefindable2),
        nullables1: $any(input.nullables1),
        nullables2: $any(input.nullables2),
        both1: $any(input.both1),
        both2: $any(input.both2),
        both3: $any(input.both3),
        union: $any(input.union)
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; if (!is(input))
    return null; const output = clone(input); return output; })(input), ArrayAny.SPOILERS);
