import typia from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_assertClone_ArrayAny = _test_assertClone("ArrayAny", ArrayAny.generate, (input) => ((input: any): typia.Primitive<ArrayAny> => { const assert = (input: any) => {
    const $guard = (typia.assertClone as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ArrayAny => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => (Array.isArray(input.anys) || $guard(_exceptionable, {
            path: _path + ".anys",
            expected: "Array<any>",
            value: input.anys
        })) && (Array.isArray(input.undefindable1) || $guard(_exceptionable, {
            path: _path + ".undefindable1",
            expected: "Array<any>",
            value: input.undefindable1
        })) && (Array.isArray(input.undefindable2) || $guard(_exceptionable, {
            path: _path + ".undefindable2",
            expected: "Array<any>",
            value: input.undefindable2
        })) && (Array.isArray(input.nullables1) || $guard(_exceptionable, {
            path: _path + ".nullables1",
            expected: "Array<any>",
            value: input.nullables1
        })) && (Array.isArray(input.nullables2) || $guard(_exceptionable, {
            path: _path + ".nullables2",
            expected: "Array<any>",
            value: input.nullables2
        })) && (Array.isArray(input.both1) || $guard(_exceptionable, {
            path: _path + ".both1",
            expected: "Array<any>",
            value: input.both1
        })) && (Array.isArray(input.both2) || $guard(_exceptionable, {
            path: _path + ".both2",
            expected: "Array<any>",
            value: input.both2
        })) && (Array.isArray(input.both3) || $guard(_exceptionable, {
            path: _path + ".both3",
            expected: "Array<any>",
            value: input.both3
        })) && (Array.isArray(input.union) || $guard(_exceptionable, {
            path: _path + ".union",
            expected: "Array<any>",
            value: input.union
        }));
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<ArrayAny>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as ArrayAny;
}; const clone = (input: ArrayAny): typia.Primitive<ArrayAny> => {
    const $any = (typia.assertClone as any).any;
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
}; assert(input); const output = clone(input); /* ArrayAny */; return output as ArrayAny; })(input), ArrayAny.SPOILERS);
