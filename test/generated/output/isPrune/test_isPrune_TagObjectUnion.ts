import typia from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_isPrune } from "../internal/_test_isPrune";
export const test_isPrune_TagObjectUnion = _test_isPrune("TagObjectUnion", TagObjectUnion.generate, (input) => ((input: any): input is TagObjectUnion => { const is = (input: any): input is TagObjectUnion => {
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
}; const prune = (input: TagObjectUnion): void => {
    const $throws = (typia.isPrune as any).throws;
    const $io0 = (input: any) => "number" === typeof input.value && 3 <= input.value;
    const $io1 = (input: any) => "string" === typeof input.value && 3 <= input.value.length && 7 >= input.value.length;
    const $iu0 = (input: any) => (() => {
        if ("number" === typeof input.value)
            return $io0(input);
        if ("string" === typeof input.value)
            return $io1(input);
        return false;
    })();
    const $po0 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("value" === key)
                continue;
            delete input[key];
        }
    };
    const $po1 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("value" === key)
                continue;
            delete input[key];
        }
    };
    const $pu0 = (input: any) => (() => {
        if ("number" === typeof input.value)
            return $po0(input);
        if ("string" === typeof input.value)
            return $po1(input);
        $throws({
            expected: "(TagObjectUnion.Numeric | TagObjectUnion.Literal)",
            value: input
        });
    })();
    if (Array.isArray(input))
        input.forEach((elem: any) => {
            if ("object" === typeof elem && null !== elem)
                $pu0(elem);
        });
}; if (!is(input))
    return false; prune(input); return true; })(input), TagObjectUnion.SPOILERS);
