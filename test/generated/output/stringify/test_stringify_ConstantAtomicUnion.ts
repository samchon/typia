import typia from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_stringify } from "../internal/_test_stringify";
export const test_stringify_ConstantAtomicUnion = _test_stringify("ConstantAtomicUnion", ConstantAtomicUnion.generate, (input) => ((input: ConstantAtomicUnion): string => {
    const $string = (typia.stringify as any).string;
    const $number = (typia.stringify as any).number;
    const $throws = (typia.stringify as any).throws;
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
            return $number(elem);
        if ("string" === typeof elem)
            return "\"" + elem + "\"";
        if ("object" === typeof elem && null !== elem)
            return $so0(elem);
        $throws({
            expected: "(\"four\" | \"three\" | 1 | 2 | Resolve<__type> | false)",
            value: elem
        });
    })()).join(",")}]`;
})(input));
