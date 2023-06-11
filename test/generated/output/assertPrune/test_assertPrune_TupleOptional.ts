import typia from "../../../../src";
import { TupleOptional } from "../../../structures/TupleOptional";
import { _test_assertPrune } from "../../../internal/_test_assertPrune";
export const test_assertPrune_TupleOptional = _test_assertPrune("TupleOptional", TupleOptional.generate, (input) => ((input: any): Array<[number, boolean, string, (number | null | undefined)?, (string | null | undefined)?]> => { const assert = (input: any): Array<[number, boolean, string, (number | null | undefined)?, (string | null | undefined)?]> => {
    const __is = (input: any): input is Array<[number, boolean, string, (number | null | undefined)?, (string | null | undefined)?]> => {
        return Array.isArray(input) && input.every((elem: any) => Array.isArray(elem) && (3 <= elem.length && 5 >= elem.length && ("number" === typeof elem[0] && Number.isFinite(elem[0])) && "boolean" === typeof elem[1] && "string" === typeof elem[2] && (null === elem[3] || undefined === elem[3] || "number" === typeof elem[3] && Number.isFinite(elem[3])) && (null === elem[4] || undefined === elem[4] || "string" === typeof elem[4])));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is Array<[number, boolean, string, (number | null | undefined)?, (string | null | undefined)?]> => {
            const $guard = (typia.assertPrune as any).guard;
            return (Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "TupleOptional",
                value: input
            })) && input.every((elem: any, _index1: number) => (Array.isArray(elem) || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "[number, boolean, string, (number | null | undefined)?, (string | null | undefined)?]",
                value: elem
            })) && ((3 <= elem.length && 5 >= elem.length || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "[number, boolean, string, (null | number | undefined), (null | string | undefined)]",
                value: elem
            })) && ("number" === typeof elem[0] && Number.isFinite(elem[0]) || $guard(true, {
                path: _path + "[" + _index1 + "][0]",
                expected: "number",
                value: elem[0]
            })) && ("boolean" === typeof elem[1] || $guard(true, {
                path: _path + "[" + _index1 + "][1]",
                expected: "boolean",
                value: elem[1]
            })) && ("string" === typeof elem[2] || $guard(true, {
                path: _path + "[" + _index1 + "][2]",
                expected: "string",
                value: elem[2]
            })) && (null === elem[3] || undefined === elem[3] || "number" === typeof elem[3] && Number.isFinite(elem[3]) || $guard(true, {
                path: _path + "[" + _index1 + "][3]",
                expected: "(null | number | undefined)",
                value: elem[3]
            })) && (null === elem[4] || undefined === elem[4] || "string" === typeof elem[4] || $guard(true, {
                path: _path + "[" + _index1 + "][4]",
                expected: "(null | string | undefined)",
                value: elem[4]
            }))) || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "[number, boolean, string, (number | null | undefined)?, (string | null | undefined)?]",
                value: elem
            })) || $guard(true, {
                path: _path + "",
                expected: "TupleOptional",
                value: input
            });
        })(input, "$input", true);
    return input;
}; const prune = (input: Array<[number, boolean, string, (number | null | undefined)?, (string | null | undefined)?]>): void => {
}; assert(input); prune(input); return input; })(input), TupleOptional.SPOILERS);
