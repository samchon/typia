import typia from "../../../../src";
import { ArrayAny } from "../../../structures/ArrayAny";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
export const test_createAssertStringify_ArrayAny = _test_assertStringify("ArrayAny", ArrayAny.generate, (input: any): string => { const assert = (input: any): ArrayAny => {
    const __is = (input: any): input is ArrayAny => {
        const $io0 = (input: any): boolean => Array.isArray(input.anys) && (undefined === input.undefindable1 || Array.isArray(input.undefindable1)) && (undefined === input.undefindable2 || Array.isArray(input.undefindable2)) && (null === input.nullables1 || Array.isArray(input.nullables1)) && (null === input.nullables2 || Array.isArray(input.nullables2)) && (null === input.both1 || undefined === input.both1 || Array.isArray(input.both1)) && (null === input.both2 || undefined === input.both2 || Array.isArray(input.both2)) && (null === input.both3 || undefined === input.both3 || Array.isArray(input.both3)) && Array.isArray(input.union);
        return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ArrayAny => {
            const $guard = (typia.createAssertStringify as any).guard;
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => (Array.isArray(input.anys) || $guard(_exceptionable, {
                path: _path + ".anys",
                expected: "Array<any>",
                value: input.anys
            })) && (undefined === input.undefindable1 || Array.isArray(input.undefindable1) || $guard(_exceptionable, {
                path: _path + ".undefindable1",
                expected: "(Array<any> | undefined)",
                value: input.undefindable1
            })) && (undefined === input.undefindable2 || Array.isArray(input.undefindable2) || $guard(_exceptionable, {
                path: _path + ".undefindable2",
                expected: "(Array<any> | undefined)",
                value: input.undefindable2
            })) && (null === input.nullables1 || Array.isArray(input.nullables1) || $guard(_exceptionable, {
                path: _path + ".nullables1",
                expected: "(Array<any> | null)",
                value: input.nullables1
            })) && (null === input.nullables2 || Array.isArray(input.nullables2) || $guard(_exceptionable, {
                path: _path + ".nullables2",
                expected: "(Array<any> | null)",
                value: input.nullables2
            })) && (null === input.both1 || undefined === input.both1 || Array.isArray(input.both1) || $guard(_exceptionable, {
                path: _path + ".both1",
                expected: "(Array<any> | null | undefined)",
                value: input.both1
            })) && (null === input.both2 || undefined === input.both2 || Array.isArray(input.both2) || $guard(_exceptionable, {
                path: _path + ".both2",
                expected: "(Array<any> | null | undefined)",
                value: input.both2
            })) && (null === input.both3 || undefined === input.both3 || Array.isArray(input.both3) || $guard(_exceptionable, {
                path: _path + ".both3",
                expected: "(Array<any> | null | undefined)",
                value: input.both3
            })) && (Array.isArray(input.union) || $guard(_exceptionable, {
                path: _path + ".union",
                expected: "Array<any>",
                value: input.union
            }));
            return ("object" === typeof input && null !== input || $guard(true, {
                path: _path + "",
                expected: "ArrayAny",
                value: input
            })) && $ao0(input, _path + "", true) || $guard(true, {
                path: _path + "",
                expected: "ArrayAny",
                value: input
            });
        })(input, "$input", true);
    return input;
}; const stringify = (input: ArrayAny): string => {
    const $so0 = (input: any): any => `{${undefined === input.undefindable1 ? "" : `"undefindable1":${undefined !== input.undefindable1 ? `[${input.undefindable1.map((elem: any) => undefined !== elem ? JSON.stringify(elem) : "null").join(",")}]` : undefined},`}${undefined === input.undefindable2 ? "" : `"undefindable2":${undefined !== input.undefindable2 ? `[${input.undefindable2.map((elem: any) => undefined !== elem ? JSON.stringify(elem) : "null").join(",")}]` : undefined},`}${undefined === input.both1 ? "" : `"both1":${undefined !== input.both1 ? null !== input.both1 ? `[${input.both1.map((elem: any) => undefined !== elem ? JSON.stringify(elem) : "null").join(",")}]` : "null" : undefined},`}${undefined === input.both2 ? "" : `"both2":${undefined !== input.both2 ? null !== input.both2 ? `[${input.both2.map((elem: any) => undefined !== elem ? JSON.stringify(elem) : "null").join(",")}]` : "null" : undefined},`}${undefined === input.both3 ? "" : `"both3":${undefined !== input.both3 ? null !== input.both3 ? `[${input.both3.map((elem: any) => undefined !== elem ? JSON.stringify(elem) : "null").join(",")}]` : "null" : undefined},`}"anys":${`[${input.anys.map((elem: any) => undefined !== elem ? JSON.stringify(elem) : "null").join(",")}]`},"nullables1":${null !== input.nullables1 ? `[${input.nullables1.map((elem: any) => undefined !== elem ? JSON.stringify(elem) : "null").join(",")}]` : "null"},"nullables2":${null !== input.nullables2 ? `[${input.nullables2.map((elem: any) => undefined !== elem ? JSON.stringify(elem) : "null").join(",")}]` : "null"},"union":${`[${input.union.map((elem: any) => undefined !== elem ? JSON.stringify(elem) : "null").join(",")}]`}}`;
    return $so0(input);
}; return stringify(assert(input)); }, ArrayAny.SPOILERS);
