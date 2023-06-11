import typia from "../../../../src";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";
import { _test_assertClone } from "../../../internal/_test_assertClone";
export const test_assertClone_ToJsonAtomicUnion = _test_assertClone("ToJsonAtomicUnion", ToJsonAtomicUnion.generate, (input) => ((input: any): typia.Primitive<Array<ToJsonAtomicUnion.IToJson>> => { const assert = (input: any): Array<ToJsonAtomicUnion.IToJson> => {
    const __is = (input: any): input is Array<ToJsonAtomicUnion.IToJson> => {
        const $io0 = (input: any): boolean => "function" === typeof input.toJSON;
        return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is Array<ToJsonAtomicUnion.IToJson> => {
            const $guard = (typia.assertClone as any).guard;
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => "function" === typeof input.toJSON || $guard(_exceptionable, {
                path: _path + ".toJSON",
                expected: "unknown",
                value: input.toJSON
            });
            return (Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "ToJsonAtomicUnion",
                value: input
            })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "ToJsonAtomicUnion.IToJson",
                value: elem
            })) && $ao0(elem, _path + "[" + _index1 + "]", true) || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "ToJsonAtomicUnion.IToJson",
                value: elem
            })) || $guard(true, {
                path: _path + "",
                expected: "ToJsonAtomicUnion",
                value: input
            });
        })(input, "$input", true);
    return input;
}; const clone = (input: Array<ToJsonAtomicUnion.IToJson>): typia.Primitive<Array<ToJsonAtomicUnion.IToJson>> => {
    const $cp0 = (input: any) => input.map((elem: any) => "object" === typeof elem && null !== elem && "function" === typeof elem.toJSON ? elem.toJSON() as any : elem as any);
    return Array.isArray(input) ? $cp0(input) : input as any;
}; assert(input); const output = clone(input); return output; })(input));
