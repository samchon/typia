import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TagObjectUnion } from "../../../structures/TagObjectUnion";

export const test_json_stringify_TagObjectUnion = _test_json_stringify(
    "TagObjectUnion",
)<TagObjectUnion>(TagObjectUnion)((input) =>
    ((input: TagObjectUnion): string => {
        const $io0 = (input: any): boolean =>
            "number" === typeof input.value && 3 <= input.value;
        const $io1 = (input: any): boolean =>
            "string" === typeof input.value &&
            3 <= input.value.length &&
            7 >= input.value.length;
        const $number = (typia.json.stringify as any).number;
        const $string = (typia.json.stringify as any).string;
        const $throws = (typia.json.stringify as any).throws;
        const $so0 = (input: any): any => `{"value":${$number(input.value)}}`;
        const $so1 = (input: any): any => `{"value":${$string(input.value)}}`;
        const $su0 = (input: any): any =>
            (() => {
                if ("string" === typeof input.value) return $so1(input);
                else if ("number" === typeof input.value) return $so0(input);
                else
                    $throws({
                        expected:
                            "(TagObjectUnion.Literal | TagObjectUnion.Numeric)",
                        value: input,
                    });
            })();
        return `[${input.map((elem: any) => $su0(elem)).join(",")}]`;
    })(input),
);
