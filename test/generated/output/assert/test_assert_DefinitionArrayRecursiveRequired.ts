import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { DefinitionArrayRecursiveRequired } from "../../../structures/DefinitionArrayRecursiveRequired";
export const test_assert_DefinitionArrayRecursiveRequired = _test_assert("DefinitionArrayRecursiveRequired", DefinitionArrayRecursiveRequired.generate, (input) => ((input: any): string | number | Array<DefinitionArrayRecursiveRequired> => {
    const $guard = (typia.assert as any).guard;
    const __is = (input: any): input is string | number | Array<DefinitionArrayRecursiveRequired> => {
        const $id0 = (input: any): any => null !== input && undefined !== input && ("string" === typeof input || "number" === typeof input && Number.isFinite(input) || Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)));
        return null !== input && undefined !== input && ("string" === typeof input || "number" === typeof input && Number.isFinite(input) || Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)) || $id0(input));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is string | number | Array<DefinitionArrayRecursiveRequired> => {
            const $ad0 = (input: any, _path: string, _exceptionable: boolean = true): any => (null !== input || $guard(_exceptionable, {
                path: _path,
                expected: "(Array<DefinitionArrayRecursiveRequired> | number | string)",
                value: input
            })) && (undefined !== input || $guard(_exceptionable, {
                path: _path,
                expected: "(Array<DefinitionArrayRecursiveRequired> | number | string)",
                value: input
            })) && ("string" === typeof input || "number" === typeof input && Number.isFinite(input) || (Array.isArray(input) || $guard(_exceptionable, {
                path: _path,
                expected: "(Array<DefinitionArrayRecursiveRequired> | number | string)",
                value: input
            })) && input.every((elem: any, _index2: number) => (null !== elem || $guard(_exceptionable, {
                path: _path + "[" + _index2 + "]",
                expected: "DefinitionArrayRecursiveRequired",
                value: elem
            })) && (undefined !== elem || $guard(_exceptionable, {
                path: _path + "[" + _index2 + "]",
                expected: "DefinitionArrayRecursiveRequired",
                value: elem
            })) && $ad0(elem, _path + "[" + _index2 + "]", true && _exceptionable)));
            return (null !== input || $guard(true, {
                path: _path + "",
                expected: "(Array<DefinitionArrayRecursiveRequired> | DefinitionArrayRecursiveRequired | number | string)",
                value: input
            })) && (undefined !== input || $guard(true, {
                path: _path + "",
                expected: "(Array<DefinitionArrayRecursiveRequired> | DefinitionArrayRecursiveRequired | number | string)",
                value: input
            })) && ("string" === typeof input || "number" === typeof input && Number.isFinite(input) || (Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "(Array<DefinitionArrayRecursiveRequired> | DefinitionArrayRecursiveRequired | number | string)",
                value: input
            })) && input.every((elem: any, _index1: number) => (null !== elem || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "DefinitionArrayRecursiveRequired",
                value: elem
            })) && (undefined !== elem || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "DefinitionArrayRecursiveRequired",
                value: elem
            })) && $ad0(elem, _path + "[" + _index1 + "]", true)) || $ad0(input, _path + "", true));
        })(input, "$input", true);
    return input;
})(input), DefinitionArrayRecursiveRequired.SPOILERS);
