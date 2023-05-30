import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ArrayAny } from "../../../structures/ArrayAny";
export const test_createClone_ArrayAny = _test_clone("ArrayAny", ArrayAny.generate, (input: ArrayAny): typia.Primitive<ArrayAny> => {
    const $any = (typia.createClone as any).any;
    const $co0 = (input: any): any => ({
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
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
});
