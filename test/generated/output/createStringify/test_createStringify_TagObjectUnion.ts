import typia from "../../../../src";
import { TagObjectUnion } from "../../../structures/TagObjectUnion";
import { _test_stringify } from "../../../internal/_test_stringify";
export const test_createStringify_TagObjectUnion = _test_stringify("TagObjectUnion", TagObjectUnion.generate, (input: TagObjectUnion): string => {
    const $io0 = (input: any): boolean => "number" === typeof input.value && 3 <= input.value;
    const $io1 = (input: any): boolean => "string" === typeof input.value && 3 <= input.value.length && 7 >= input.value.length;
    const $number = (typia.createStringify as any).number;
    const $string = (typia.createStringify as any).string;
    const $throws = (typia.createStringify as any).throws;
    const $so0 = (input: any): any => `{"value":${$number(input.value)}}`;
    const $so1 = (input: any): any => `{"value":${$string(input.value)}}`;
    const $su0 = (input: any): any => (() => {
        if ("string" === typeof input.value)
            return $so1(input);
        if ("number" === typeof input.value)
            return $so0(input);
        $throws({
            expected: "(TagObjectUnion.Literal | TagObjectUnion.Numeric)",
            value: input
        });
    })();
    return `[${input.map((elem: any) => $su0(elem)).join(",")}]`;
});
