import typia from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_equals } from "../internal/_test_equals";
export const test_equals_ArrayRecursive = _test_equals("ArrayRecursive", ArrayRecursive.generate, (input) => ((input: any, _exceptionable: boolean): input is ICategory => {
    const $io0 = (input: any, _exceptionable: boolean) => Array.isArray(input.children) && input.children.every((elem: any, _index1: number) => "object" === typeof elem && null !== elem && $io0(elem, true && _exceptionable)) && "number" === typeof input.id && "string" === typeof input.code && "number" === typeof input.sequence && ("object" === typeof input.created_at && null !== input.created_at && $io1(input.created_at, true && _exceptionable)) && (5 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["children", "id", "code", "sequence", "created_at"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $io1 = (input: any, _exceptionable: boolean) => "number" === typeof input.time && "number" === typeof input.zone && (2 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["time", "zone"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    return "object" === typeof input && null !== input && $io0(input, true);
})(input));
