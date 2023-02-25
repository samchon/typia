import typia from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_is } from "../internal/_test_is";
export const test_is_TagObjectUnion = _test_is("TagObjectUnion", TagObjectUnion.generate, (input) => ((input: any): input is TagObjectUnion => {
    const $io0 = (input: any) => "number" === typeof input.value && 3 <= input.value;
    const $io1 = (input: any) => "string" === typeof input.value && 3 <= input.value.length && 7 >= input.value.length;
    const $iu0 = (input: any) => (() => {
        if ("number" === typeof input.value)
            return $io0(input);
        if ("string" === typeof input.value)
            return $io1(input);
        return false;
    })();
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $iu0(elem));
})(input), TagObjectUnion.SPOILERS);
