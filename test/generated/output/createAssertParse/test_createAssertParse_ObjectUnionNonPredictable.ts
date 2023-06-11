import typia from "../../../../src";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";
import { _test_assertParse } from "../../../internal/_test_assertParse";
export const test_createAssertParse_ObjectUnionNonPredictable = _test_assertParse("ObjectUnionNonPredictable", ObjectUnionNonPredictable.generate, (input: string): typia.Primitive<ObjectUnionNonPredictable> => { const assert = (input: any): ObjectUnionNonPredictable => {
    const __is = (input: any): input is ObjectUnionNonPredictable => {
        const $io0 = (input: any): boolean => "object" === typeof input.value && null !== input.value && $io1(input.value);
        const $io1 = (input: any): boolean => "object" === typeof input.value && null !== input.value && $iu0(input.value);
        const $io2 = (input: any): boolean => "object" === typeof input.value && null !== input.value && "boolean" === typeof (input.value as any).value;
        const $io4 = (input: any): boolean => "object" === typeof input.value && null !== input.value && ("number" === typeof (input.value as any).value && Number.isFinite((input.value as any).value));
        const $io6 = (input: any): boolean => "object" === typeof input.value && null !== input.value && "string" === typeof (input.value as any).value;
        const $iu0 = (input: any): any => (() => {
            if ($io6(input))
                return $io6(input);
            if ($io4(input))
                return $io4(input);
            if ($io2(input))
                return $io2(input);
            return false;
        })();
        return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ObjectUnionNonPredictable => {
            const $guard = (typia.createAssertParse as any).guard;
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("object" === typeof input.value && null !== input.value || $guard(_exceptionable, {
                path: _path + ".value",
                expected: "ObjectUnionNonPredictable.IPointer<ObjectUnionNonPredictable.IUnion>",
                value: input.value
            })) && $ao1(input.value, _path + ".value", true && _exceptionable) || $guard(_exceptionable, {
                path: _path + ".value",
                expected: "ObjectUnionNonPredictable.IPointer<ObjectUnionNonPredictable.IUnion>",
                value: input.value
            });
            const $ao1 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("object" === typeof input.value && null !== input.value || $guard(_exceptionable, {
                path: _path + ".value",
                expected: "(ObjectUnionNonPredictable.IWrapper<boolean> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<string>)",
                value: input.value
            })) && $au0(input.value, _path + ".value", true && _exceptionable) || $guard(_exceptionable, {
                path: _path + ".value",
                expected: "(ObjectUnionNonPredictable.IWrapper<boolean> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<string>)",
                value: input.value
            });
            const $ao2 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("object" === typeof input.value && null !== input.value || $guard(_exceptionable, {
                path: _path + ".value",
                expected: "ObjectUnionNonPredictable.IPointer<boolean>",
                value: input.value
            })) && $ao3(input.value, _path + ".value", true && _exceptionable) || $guard(_exceptionable, {
                path: _path + ".value",
                expected: "ObjectUnionNonPredictable.IPointer<boolean>",
                value: input.value
            });
            const $ao3 = (input: any, _path: string, _exceptionable: boolean = true): boolean => "boolean" === typeof input.value || $guard(_exceptionable, {
                path: _path + ".value",
                expected: "boolean",
                value: input.value
            });
            const $ao4 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("object" === typeof input.value && null !== input.value || $guard(_exceptionable, {
                path: _path + ".value",
                expected: "ObjectUnionNonPredictable.IPointer<number>",
                value: input.value
            })) && $ao5(input.value, _path + ".value", true && _exceptionable) || $guard(_exceptionable, {
                path: _path + ".value",
                expected: "ObjectUnionNonPredictable.IPointer<number>",
                value: input.value
            });
            const $ao5 = (input: any, _path: string, _exceptionable: boolean = true): boolean => "number" === typeof input.value && Number.isFinite(input.value) || $guard(_exceptionable, {
                path: _path + ".value",
                expected: "number",
                value: input.value
            });
            const $ao6 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("object" === typeof input.value && null !== input.value || $guard(_exceptionable, {
                path: _path + ".value",
                expected: "ObjectUnionNonPredictable.IPointer<string>",
                value: input.value
            })) && $ao7(input.value, _path + ".value", true && _exceptionable) || $guard(_exceptionable, {
                path: _path + ".value",
                expected: "ObjectUnionNonPredictable.IPointer<string>",
                value: input.value
            });
            const $ao7 = (input: any, _path: string, _exceptionable: boolean = true): boolean => "string" === typeof input.value || $guard(_exceptionable, {
                path: _path + ".value",
                expected: "string",
                value: input.value
            });
            const $au0 = (input: any, _path: string, _exceptionable: boolean = true): any => $ao6(input, _path, false && _exceptionable) || $ao4(input, _path, false && _exceptionable) || $ao2(input, _path, false && _exceptionable) || $guard(_exceptionable, {
                path: _path,
                expected: "(ObjectUnionNonPredictable.IWrapper<string> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<boolean>)",
                value: input
            });
            return (Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "ObjectUnionNonPredictable",
                value: input
            })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>",
                value: elem
            })) && $ao0(elem, _path + "[" + _index1 + "]", true) || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>",
                value: elem
            })) || $guard(true, {
                path: _path + "",
                expected: "ObjectUnionNonPredictable",
                value: input
            });
        })(input, "$input", true);
    return input;
}; input = JSON.parse(input); return assert(input) as any; }, ObjectUnionNonPredictable.SPOILERS);
