import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { TagObjectUnion } from "../../../structures/TagObjectUnion";

export const test_stringify_TagObjectUnion = _test_stringify(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) =>
        ((input: Array<TagObjectUnion.Type>): string => {
            const $io0: any = (input: any): boolean =>
                "number" === typeof input.value && 3 <= input.value;
            const $io1: any = (input: any): boolean =>
                "string" === typeof input.value &&
                3 <= input.value.length &&
                7 >= input.value.length;
            const $number: any = (typia.stringify as any).number;
            const $string: any = (typia.stringify as any).string;
            const $throws: any = (typia.stringify as any).throws;
            const $so0: any = (input: any): any =>
                `{"value":${$number(input.value)}}`;
            const $so1: any = (input: any): any =>
                `{"value":${$string(input.value)}}`;
            const $su0: any = (input: any): any =>
                (() => {
                    if ("string" === typeof input.value) return $so1(input);
                    if ("number" === typeof input.value) return $so0(input);
                    $throws({
                        expected:
                            "(TagObjectUnion.Literal | TagObjectUnion.Numeric)",
                        value: input,
                    });
                })();
            return (() =>
                `[${input.map((elem: any) => $su0(elem)).join(",")}]`)();
        })(input),
);
