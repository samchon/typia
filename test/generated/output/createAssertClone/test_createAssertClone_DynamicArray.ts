import typia from "../../../src";
import { DynamicArray } from "../../structures/DynamicArray";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_createAssertClone_DynamicArray = _test_assertClone("DynamicArray", DynamicArray.generate, (input: any): typia.Primitive<DynamicArray> => { const assert = (input: any) => {
    const $guard = (typia.createAssertClone as any).guard;
    const $join = (typia.createAssertClone as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is DynamicArray => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => false === _exceptionable || Object.keys(input).every(key => {
            const value = input[key];
            if (undefined === value)
                return true;
            if (RegExp(/(.*)/).test(key))
                return (Array.isArray(value) || $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "Array<string>",
                    value: value
                })) && value.every((elem: any, _index1: number) => "string" === typeof elem || $guard(_exceptionable, {
                    path: _path + $join(key) + "[" + _index1 + "]",
                    expected: "string",
                    value: elem
                }));
            return true;
        });
        return ("object" === typeof input && null !== input && false === Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Resolve<DynamicArray>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as DynamicArray;
}; const clone = (input: DynamicArray): typia.Primitive<DynamicArray> => {
    const $join = (typia.createAssertClone as any).join;
    const $co0 = (input: any) => { const output = {}; for (const [key, value] of Object.entries(input)) {
        if (RegExp(/(.*)/).test(key)) {
            output[key] = Array.isArray(value) ? value.map((elem: any) => elem) : value;
            continue;
        }
    } return output; };
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; assert(input); const output = clone(input); /* DynamicArray */; return output as DynamicArray; }, DynamicArray.SPOILERS);
