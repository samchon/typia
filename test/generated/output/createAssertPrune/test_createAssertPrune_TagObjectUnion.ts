import typia from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_assertPrune } from "../internal/_test_assertPrune";
export const test_createAssertPrune_TagObjectUnion = _test_assertPrune("TagObjectUnion", TagObjectUnion.generate, (input: any): TagObjectUnion => { const assert = (input: any) => {
    const $guard = (typia.createAssertPrune as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is TagObjectUnion => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => "number" === typeof input.value && 3 <= input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "number",
            value: input.value
        });
        const $ao1 = (input: any, _path: string, _exceptionable: boolean) => "string" === typeof input.value && 3 <= input.value.length && 7 >= input.value.length || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "string",
            value: input.value
        });
        const $au0 = (input: any, _path: string, _exceptionable: boolean) => (() => {
            if ("number" === typeof input.value)
                return $ao0(input, _path, true && _exceptionable);
            if ("string" === typeof input.value)
                return $ao1(input, _path, true && _exceptionable);
            return $guard(_exceptionable, {
                path: _path,
                expected: "(TagObjectUnion.Numeric | TagObjectUnion.Literal)",
                value: input
            });
        })();
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<(Resolve<TagObjectUnion.Literal> | Resolve<TagObjectUnion.Numeric>)>",
            value: input
        })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Resolve<TagObjectUnion.Literal> | Resolve<TagObjectUnion.Numeric>)",
            value: elem
        })) && $au0(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as TagObjectUnion;
}; const prune = (input: TagObjectUnion): void => {
    const $throws = (typia.createAssertPrune as any).throws;
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
}; assert(input); prune(input); return input; }, TagObjectUnion.SPOILERS);
