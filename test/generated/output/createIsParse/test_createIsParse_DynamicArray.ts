import typia from "../../../../src";
import { DynamicArray } from "../../../structures/DynamicArray";
import { _test_isParse } from "../../../internal/_test_isParse";
export const test_createIsParse_DynamicArray = _test_isParse("DynamicArray", DynamicArray.generate, (input: any): typia.Primitive<DynamicArray> => { const is = (input: any): input is DynamicArray => {
    const $join = (typia.createIsParse as any).join;
    const $io0 = (input: any): boolean => Object.keys(input).every((key: any) => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (RegExp(/(.*)/).test(key))
            return Array.isArray(value) && value.every((elem: any) => "string" === typeof elem);
        return true;
    });
    return "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input);
}; input = JSON.parse(input); return is(input) ? input as any : null; }, DynamicArray.SPOILERS);
