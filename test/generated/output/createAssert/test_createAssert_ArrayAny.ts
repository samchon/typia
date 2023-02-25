import typia from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_assert } from "../internal/_test_assert";
export const test_createAssert_ArrayAny = _test_assert("ArrayAny", ArrayAny.generate, (input: any) => {
    const $guard = (typia.createAssert as any).guard;
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
}, ArrayAny.SPOILERS);
