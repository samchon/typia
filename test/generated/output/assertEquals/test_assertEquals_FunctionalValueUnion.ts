import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { FunctionalValueUnion } from "../../../structures/FunctionalValueUnion";
export const test_assertEquals_FunctionalValueUnion = _test_assertEquals("FunctionalValueUnion", FunctionalValueUnion.generate, (input) => ((input: any): Array<FunctionalValueUnion.Union> => {
    const $guard = (typia.assertEquals as any).guard;
    const __is = (input: any, _exceptionable: boolean = true): input is Array<FunctionalValueUnion.Union> => {
        return Array.isArray(input) && input.every((elem: any, _index1: number) => undefined !== elem && (null === elem || "function" === typeof elem || "string" === typeof elem || "number" === typeof elem && Number.isFinite(elem)));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is Array<FunctionalValueUnion.Union> => {
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
})(input));
