import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";
export const test_createIsStringify_ConstantConstEnumeration = _test_isStringify("ConstantConstEnumeration", ConstantConstEnumeration.generate, (input: ConstantConstEnumeration): string | null => { const is = (input: any): input is ConstantConstEnumeration => {
    return Array.isArray(input) && input.every((elem: any) => 0 === elem || 1 === elem || 2 === elem || "Three" === elem || "Four" === elem);
}; const stringify = (input: ConstantConstEnumeration): string => {
    const $string = (typia.createIsStringify as any).string;
    const $number = (typia.createIsStringify as any).number;
    const $throws = (typia.createIsStringify as any).throws;
    return `[${input.map((elem: any) => (() => {
        if ("string" === typeof elem)
            return $string(elem);
        if ("number" === typeof elem)
            return $number(elem);
        if ("string" === typeof elem)
            return "\"" + elem + "\"";
        $throws({
            expected: "(\"Four\" | \"Three\" | 0 | 1 | 2)",
            value: elem
        });
    })()).join(",")}]`;
}; return is(input) ? stringify(input) : null; }, ConstantConstEnumeration.SPOILERS);
