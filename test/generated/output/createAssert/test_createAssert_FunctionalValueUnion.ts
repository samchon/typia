import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { FunctionalValueUnion } from "../../../structures/FunctionalValueUnion";
export const test_createAssert_FunctionalValueUnion = _test_assert("FunctionalValueUnion", FunctionalValueUnion.generate, (input: any): FunctionalValueUnion => {
    const $guard = (typia.createAssert as any).guard;
    const __is = (input: any): input is FunctionalValueUnion => {
        return Array.isArray(input) && input.every((elem: any) => undefined !== elem && (null === elem || "function" === typeof elem || "string" === typeof elem || "number" === typeof elem && Number.isFinite(elem)));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is FunctionalValueUnion => {
            return (Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "Array<(null | number | string)>",
                value: input
            })) && input.every((elem: any, _index1: number) => (undefined !== elem || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "(null | number | string)",
                value: elem
            })) && (null === elem || "function" === typeof elem || "string" === typeof elem || "number" === typeof elem && Number.isFinite(elem) || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "(null | number | string)",
                value: elem
            })));
        })(input, "$input", true);
    return input;
}, FunctionalValueUnion.SPOILERS);
