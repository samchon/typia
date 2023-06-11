import typia from "../../../../src";
import { TagObjectUnion } from "../../../structures/TagObjectUnion";
import { _test_equals } from "../../../internal/_test_equals";
export const test_createEquals_TagObjectUnion = _test_equals("TagObjectUnion", TagObjectUnion.generate, (input: any, _exceptionable: boolean = true): input is TagObjectUnion => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean => "number" === typeof input.value && Number.isFinite(input.value) && 3 <= input.value && (1 === Object.keys(input).length || Object.keys(input).every((key: any) => {
        if (["value"].some((prop: any) => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $io1 = (input: any, _exceptionable: boolean = true): boolean => "string" === typeof input.value && 3 <= input.value.length && 7 >= input.value.length && (1 === Object.keys(input).length || Object.keys(input).every((key: any) => {
        if (["value"].some((prop: any) => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $iu0 = (input: any, _exceptionable: boolean = true): any => (() => {
        if ("string" === typeof input.value)
            return $io1(input, true && _exceptionable);
        if ("number" === typeof input.value && Number.isFinite(input.value))
            return $io0(input, true && _exceptionable);
        return false;
    })();
    return Array.isArray(input) && input.every((elem: any, _index1: number) => "object" === typeof elem && null !== elem && $iu0(elem, true));
});
