import typia from "../../../../src";
import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { ArrayAny } from "../../../structures/ArrayAny";

export const test_misc_createAssertClone_ArrayAny = _test_misc_assertClone(
    "ArrayAny",
)<ArrayAny>(ArrayAny)((input: any): typia.Resolved<ArrayAny> => {
    const assert = (input: any): ArrayAny => {
        const __is = (input: any): input is ArrayAny => {
            const $io0 = (input: any): boolean =>
                Array.isArray(input.anys) &&
                (undefined === input.undefindable1 ||
                    Array.isArray(input.undefindable1)) &&
                (undefined === input.undefindable2 ||
                    Array.isArray(input.undefindable2)) &&
                (null === input.nullables1 ||
                    Array.isArray(input.nullables1)) &&
                (null === input.nullables2 ||
                    Array.isArray(input.nullables2)) &&
                (null === input.both1 ||
                    undefined === input.both1 ||
                    Array.isArray(input.both1)) &&
                (null === input.both2 ||
                    undefined === input.both2 ||
                    Array.isArray(input.both2)) &&
                (null === input.both3 ||
                    undefined === input.both3 ||
                    Array.isArray(input.both3)) &&
                Array.isArray(input.union);
            return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ArrayAny => {
                const $guard = (typia.misc.createAssertClone as any).guard;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (Array.isArray(input.anys) ||
                        $guard(_exceptionable, {
                            path: _path + ".anys",
                            expected: "Array<any>",
                            value: input.anys,
                        })) &&
                    (undefined === input.undefindable1 ||
                        Array.isArray(input.undefindable1) ||
                        $guard(_exceptionable, {
                            path: _path + ".undefindable1",
                            expected: "(Array<any> | undefined)",
                            value: input.undefindable1,
                        })) &&
                    (undefined === input.undefindable2 ||
                        Array.isArray(input.undefindable2) ||
                        $guard(_exceptionable, {
                            path: _path + ".undefindable2",
                            expected: "(Array<any> | undefined)",
                            value: input.undefindable2,
                        })) &&
                    (null === input.nullables1 ||
                        Array.isArray(input.nullables1) ||
                        $guard(_exceptionable, {
                            path: _path + ".nullables1",
                            expected: "(Array<any> | null)",
                            value: input.nullables1,
                        })) &&
                    (null === input.nullables2 ||
                        Array.isArray(input.nullables2) ||
                        $guard(_exceptionable, {
                            path: _path + ".nullables2",
                            expected: "(Array<any> | null)",
                            value: input.nullables2,
                        })) &&
                    (null === input.both1 ||
                        undefined === input.both1 ||
                        Array.isArray(input.both1) ||
                        $guard(_exceptionable, {
                            path: _path + ".both1",
                            expected: "(Array<any> | null | undefined)",
                            value: input.both1,
                        })) &&
                    (null === input.both2 ||
                        undefined === input.both2 ||
                        Array.isArray(input.both2) ||
                        $guard(_exceptionable, {
                            path: _path + ".both2",
                            expected: "(Array<any> | null | undefined)",
                            value: input.both2,
                        })) &&
                    (null === input.both3 ||
                        undefined === input.both3 ||
                        Array.isArray(input.both3) ||
                        $guard(_exceptionable, {
                            path: _path + ".both3",
                            expected: "(Array<any> | null | undefined)",
                            value: input.both3,
                        })) &&
                    (Array.isArray(input.union) ||
                        $guard(_exceptionable, {
                            path: _path + ".union",
                            expected: "Array<any>",
                            value: input.union,
                        }));
                return (
                    ((("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ArrayAny",
                            value: input,
                        })) &&
                        $ao0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "ArrayAny",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    };
    const clone = (input: ArrayAny): typia.Resolved<ArrayAny> => {
        const $any = (typia.misc.createAssertClone as any).any;
        const $co0 = (input: any): any => ({
            anys: $any(input.anys),
            undefindable1: $any(input.undefindable1),
            undefindable2: $any(input.undefindable2),
            nullables1: $any(input.nullables1),
            nullables2: $any(input.nullables2),
            both1: $any(input.both1),
            both2: $any(input.both2),
            both3: $any(input.both3),
            union: $any(input.union),
        });
        return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
    };
    assert(input);
    const output = clone(input);
    return output;
});
