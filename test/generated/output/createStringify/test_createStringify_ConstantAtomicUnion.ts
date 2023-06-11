import typia from "../../../../src";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";
import { _test_stringify } from "../../../internal/_test_stringify";
export const test_createStringify_ConstantAtomicUnion = _test_stringify("ConstantAtomicUnion", ConstantAtomicUnion.generate, (input: ConstantAtomicUnion): string => {
    const $string = (typia.createStringify as any).string;
    const $number = (typia.createStringify as any).number;
    const $throws = (typia.createStringify as any).throws;
    const $so0 = (input: any): any => `{"key":${(() => {
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
            return $number(elem);
        if ("string" === typeof elem)
            return "\"" + elem + "\"";
        if ("object" === typeof elem && null !== elem)
            return $so0(elem);
        $throws({
            expected: "(\"four\" | \"three\" | 1 | 2 | __type | false)",
            value: elem
        });
    })()).join(",")}]`;
});
