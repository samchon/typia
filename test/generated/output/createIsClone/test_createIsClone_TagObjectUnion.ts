import typia from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_isClone } from "../internal/_test_isClone";
export const test_createIsClone_TagObjectUnion = _test_isClone("TagObjectUnion", TagObjectUnion.generate, (input: any): typia.Primitive<TagObjectUnion> | null => { const is = (input: any): input is TagObjectUnion => {
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
}; const clone = (input: TagObjectUnion): typia.Primitive<TagObjectUnion> => {
    const $throws = (typia.createIsClone as any).throws;
    const $io0 = (input: any) => "number" === typeof input.value && 3 <= input.value;
    const $io1 = (input: any) => "string" === typeof input.value && 3 <= input.value.length && 7 >= input.value.length;
    const $iu0 = (input: any) => (() => {
        if ("number" === typeof input.value)
            return $io0(input);
        if ("string" === typeof input.value)
            return $io1(input);
        return false;
    })();
    const $co0 = (input: any) => ({
        value: input.value
    });
    const $co1 = (input: any) => ({
        value: input.value
    });
    const $cu0 = (input: any) => (() => {
        if ("number" === typeof input.value)
            return $co0(input);
        if ("string" === typeof input.value)
            return $co1(input);
        $throws({
            expected: "(TagObjectUnion.Numeric | TagObjectUnion.Literal)",
            value: input
        });
    })();
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $cu0(elem) : elem) : input;
}; if (!is(input))
    return null; const output = clone(input); return output; }, TagObjectUnion.SPOILERS);
