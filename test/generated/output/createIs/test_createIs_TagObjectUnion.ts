import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { TagObjectUnion } from "../../../structures/TagObjectUnion";
export const test_createIs_TagObjectUnion = _test_is("TagObjectUnion", TagObjectUnion.generate, (input: any): input is TagObjectUnion => {
    const $io0 = (input: any): boolean => "number" === typeof input.value && Number.isFinite(input.value) && 3 <= input.value;
    const $io1 = (input: any): boolean => "string" === typeof input.value && 3 <= input.value.length && 7 >= input.value.length;
    const $iu0 = (input: any): any => (() => {
        if ("string" === typeof input.value)
            return $io1(input);
        if ("number" === typeof input.value && Number.isFinite(input.value))
            return $io0(input);
        return false;
    })();
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $iu0(elem));
}, TagObjectUnion.SPOILERS);
