import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { DefinitionArrayRecursiveNullable } from "../../../structures/DefinitionArrayRecursiveNullable";
export const test_assert_DefinitionArrayRecursiveNullable = _test_assert("DefinitionArrayRecursiveNullable", DefinitionArrayRecursiveNullable.generate, (input) => ((input: any): string | number | Array<DefinitionArrayRecursiveNullable> | null => {
    const $guard = (typia.assert as any).guard;
    const __is = (input: any): input is string | number | Array<DefinitionArrayRecursiveNullable> | null => {
        const $id0 = (input: any): any => undefined !== input && (null === input || "string" === typeof input || "number" === typeof input && Number.isFinite(input) || Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)));
        return undefined !== input && (null === input || "string" === typeof input || "number" === typeof input && Number.isFinite(input) || Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)) || $id0(input));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is string | number | Array<DefinitionArrayRecursiveNullable> | null => {
            const $ad0 = (input: any, _path: string, _exceptionable: boolean = true): any => (undefined !== input || $guard(_exceptionable, {
                path: _path,
                expected: "(Array<DefinitionArrayRecursiveNullable> | null | number | string)",
                value: input
            })) && (null === input || "string" === typeof input || "number" === typeof input && Number.isFinite(input) || (Array.isArray(input) || $guard(_exceptionable, {
                path: _path,
                expected: "(Array<DefinitionArrayRecursiveNullable> | null | number | string)",
                value: input
            })) && input.every((elem: any, _index2: number) => (null !== elem || $guard(_exceptionable, {
                path: _path + "[" + _index2 + "]",
                expected: "DefinitionArrayRecursiveNullable",
                value: elem
            })) && (undefined !== elem || $guard(_exceptionable, {
                path: _path + "[" + _index2 + "]",
                expected: "DefinitionArrayRecursiveNullable",
                value: elem
            })) && $ad0(elem, _path + "[" + _index2 + "]", true && _exceptionable)));
            return (undefined !== input || $guard(true, {
                path: _path + "",
                expected: "(Array<DefinitionArrayRecursiveNullable> | DefinitionArrayRecursiveNullable | null | number | string)",
                value: input
            })) && (null === input || "string" === typeof input || "number" === typeof input && Number.isFinite(input) || (Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "(Array<DefinitionArrayRecursiveNullable> | DefinitionArrayRecursiveNullable | null | number | string)",
                value: input
            })) && input.every((elem: any, _index1: number) => (null !== elem || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "DefinitionArrayRecursiveNullable",
                value: elem
            })) && (undefined !== elem || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "DefinitionArrayRecursiveNullable",
                value: elem
            })) && $ad0(elem, _path + "[" + _index1 + "]", true)) || $ad0(input, _path + "", true));
        })(input, "$input", true);
    return input;
})(input), DefinitionArrayRecursiveNullable.SPOILERS);
