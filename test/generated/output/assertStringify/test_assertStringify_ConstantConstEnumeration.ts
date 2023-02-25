import typia from "../../../src";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_assertStringify } from "../internal/_test_assertStringify";
export const test_assertStringify_ConstantConstEnumeration = _test_assertStringify("ConstantConstEnumeration", ConstantConstEnumeration.generate, (input) => ((input: ConstantConstEnumeration): string => { const assert = (input: any) => {
    const $guard = (typia.assertStringify as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ConstantConstEnumeration => {
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<(\"Four\" | \"Three\" | 0 | 1 | 2)>",
            value: input
        })) && input.every((elem: any, _index1: number) => 0 === elem || 1 === elem || 2 === elem || "Three" === elem || "Four" === elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(\"Four\" | \"Three\" | 0 | 1 | 2)",
            value: elem
        }));
    })(input, "$input", true);
    return input as ConstantConstEnumeration;
}; const stringify = (input: ConstantConstEnumeration): string => {
    const $string = (typia.assertStringify as any).string;
    const $throws = (typia.assertStringify as any).throws;
    return `[${input.map((elem: any) => (() => {
        if ("string" === typeof elem)
            return $string(elem);
        if ("number" === typeof elem)
            return elem;
        if ("string" === typeof elem)
            return "\"" + elem + "\"";
        $throws({
            expected: "(\"Four\" | \"Three\" | 0 | 1 | 2)",
            value: elem
        });
    })()).join(",")}]`;
}; return stringify(assert(input)); })(input), ConstantConstEnumeration.SPOILERS);
