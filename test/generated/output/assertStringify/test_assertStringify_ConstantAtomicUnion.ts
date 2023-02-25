import typia from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_assertStringify } from "../internal/_test_assertStringify";
export const test_assertStringify_ConstantAtomicUnion = _test_assertStringify("ConstantAtomicUnion", ConstantAtomicUnion.generate, (input) => ((input: ConstantAtomicUnion): string => { const assert = (input: any) => {
    const $guard = (typia.assertStringify as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ConstantAtomicUnion => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => "key" === input.key || $guard(_exceptionable, {
            path: _path + ".key",
            expected: "\"key\"",
            value: input.key
        });
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<(\"four\" | \"three\" | 1 | 2 | Resolve<__type> | false)>",
            value: input
        })) && input.every((elem: any, _index1: number) => false === elem || 1 === elem || 2 === elem || "three" === elem || "four" === elem || ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(\"four\" | \"three\" | 1 | 2 | Resolve<__type> | false)",
            value: elem
        })) && $ao0(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as ConstantAtomicUnion;
}; const stringify = (input: ConstantAtomicUnion): string => {
    const $string = (typia.assertStringify as any).string;
    const $throws = (typia.assertStringify as any).throws;
    const $so0 = (input: any) => `{"key":${(() => {
        if ("string" === typeof input.key)
            return $string(input.key);
        if ("string" === typeof input.key)
            return "\"" + input.key + "\"";
        $throws({
            expected: "\"key\"",
            value: input.key
        });
    })()}}`;
    return `[${input.map((elem: any) => (() => {
        if ("string" === typeof elem)
            return $string(elem);
        if ("boolean" === typeof elem)
            return elem;
        if ("number" === typeof elem)
            return elem;
        if ("string" === typeof elem)
            return "\"" + elem + "\"";
        if ("object" === typeof elem && null !== elem)
            return $so0(elem);
        $throws({
            expected: "(\"four\" | \"three\" | 1 | 2 | Resolve<__type> | false)",
            value: elem
        });
    })()).join(",")}]`;
}; return stringify(assert(input)); })(input), ConstantAtomicUnion.SPOILERS);
