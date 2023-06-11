import typia from "../../../../src";
import { FunctionalPropertyUnion } from "../../../structures/FunctionalPropertyUnion";
import { _test_assert } from "../../../internal/_test_assert";
export const test_createAssert_FunctionalPropertyUnion = _test_assert("FunctionalPropertyUnion", FunctionalPropertyUnion.generate, (input: any): FunctionalPropertyUnion => {
    const __is = (input: any): input is FunctionalPropertyUnion => {
        const $io0 = (input: any): boolean => "string" === typeof input.name && (null === input.closure || undefined === input.closure || "function" === typeof input.closure || "string" === typeof input.closure || "number" === typeof input.closure && Number.isFinite(input.closure));
        return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is FunctionalPropertyUnion => {
            const $guard = (typia.createAssert as any).guard;
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("string" === typeof input.name || $guard(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            })) && (null === input.closure || undefined === input.closure || "function" === typeof input.closure || "string" === typeof input.closure || "number" === typeof input.closure && Number.isFinite(input.closure) || $guard(_exceptionable, {
                path: _path + ".closure",
                expected: "(null | number | string | undefined)",
                value: input.closure
            }));
            return (Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "FunctionalPropertyUnion",
                value: input
            })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "FunctionalPropertyUnion.IUnion",
                value: elem
            })) && $ao0(elem, _path + "[" + _index1 + "]", true) || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "FunctionalPropertyUnion.IUnion",
                value: elem
            })) || $guard(true, {
                path: _path + "",
                expected: "FunctionalPropertyUnion",
                value: input
            });
        })(input, "$input", true);
    return input;
}, FunctionalPropertyUnion.SPOILERS);
