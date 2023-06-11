import typia from "../../../../src";
import { DynamicArray } from "../../../structures/DynamicArray";
import { _test_is } from "../../../internal/_test_is";
export const test_createIs_DynamicArray = _test_is("DynamicArray", DynamicArray.generate, (input: any): input is DynamicArray => {
    const $join = (typia.createIs as any).join;
    const $io0 = (input: any): boolean => Object.keys(input).every((key: any) => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (RegExp(/(.*)/).test(key))
            return Array.isArray(value) && value.every((elem: any) => "string" === typeof elem);
        return true;
    });
    return "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input);
}, DynamicArray.SPOILERS);
