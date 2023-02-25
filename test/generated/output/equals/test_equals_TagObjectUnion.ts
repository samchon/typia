import typia from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_equals } from "../internal/_test_equals";
export const test_equals_TagObjectUnion = _test_equals("TagObjectUnion", TagObjectUnion.generate, (input) => ((input: any, _exceptionable: boolean): input is TagObjectUnion => {
    const $io0 = (input: any, _exceptionable: boolean) => "number" === typeof input.value && 3 <= input.value && (1 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["value"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $io1 = (input: any, _exceptionable: boolean) => "string" === typeof input.value && 3 <= input.value.length && 7 >= input.value.length && (1 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["value"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $iu0 = (input: any, _exceptionable: boolean) => (() => {
        if ("number" === typeof input.value)
            return $io0(input, true && _exceptionable);
        if ("string" === typeof input.value)
            return $io1(input, true && _exceptionable);
        return false;
    })();
    return Array.isArray(input) && input.every((elem: any, _index1: number) => "object" === typeof elem && null !== elem && $iu0(elem, true));
})(input));
