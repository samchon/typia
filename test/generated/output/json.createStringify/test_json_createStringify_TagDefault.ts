import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TagDefault } from "../../../structures/TagDefault";

export const test_json_stringify_TagDefault = _test_json_stringify(
    "TagDefault",
)<TagDefault>(TagDefault)((input: TagDefault): string => {
    const $number = (typia.json.createStringify as any).number;
    const $string = (typia.json.createStringify as any).string;
    const $throws = (typia.json.createStringify as any).throws;
    const $is_custom = (typia.json.createStringify as any).is_custom;
    const $so0 = (input: any): any =>
        `{"boolean":${input.boolean},"number":${$number(
            input.number,
        )},"string":${$string(input.string)},"text":${$string(
            input.text,
        )},"template":${$string(
            input.template,
        )},"boolean_and_number_and_string":${(() => {
            if ("string" === typeof input.boolean_and_number_and_string)
                return $string(input.boolean_and_number_and_string);
            if ("number" === typeof input.boolean_and_number_and_string)
                return $number(input.boolean_and_number_and_string);
            if ("boolean" === typeof input.boolean_and_number_and_string)
                return input.boolean_and_number_and_string;
            $throws({
                expected: "(boolean | number | string)",
                value: input.boolean_and_number_and_string,
            });
        })()},"union_but_boolean":${(() => {
            if ("string" === typeof input.union_but_boolean)
                return $string(input.union_but_boolean);
            if ("number" === typeof input.union_but_boolean)
                return $number(input.union_but_boolean);
            if ("boolean" === typeof input.union_but_boolean)
                return input.union_but_boolean;
            $throws({
                expected: "(boolean | number | string)",
                value: input.union_but_boolean,
            });
        })()},"union_but_number":${(() => {
            if ("string" === typeof input.union_but_number)
                return $string(input.union_but_number);
            if ("number" === typeof input.union_but_number)
                return $number(input.union_but_number);
            if ("boolean" === typeof input.union_but_number)
                return input.union_but_number;
            $throws({
                expected: "(boolean | number | string)",
                value: input.union_but_number,
            });
        })()},"union_but_string":${(() => {
            if ("string" === typeof input.union_but_string)
                return $string(input.union_but_string);
            if ("number" === typeof input.union_but_string)
                return $number(input.union_but_string);
            if ("boolean" === typeof input.union_but_string)
                return input.union_but_string;
            $throws({
                expected: "(boolean | number | string)",
                value: input.union_but_string,
            });
        })()},"vulnerable_range":${$number(
            input.vulnerable_range,
        )},"vulnerable_template":${$string(
            input.vulnerable_template,
        )},"boolean_and_number_and_template":${(() => {
            if ("string" === typeof input.boolean_and_number_and_template)
                return $string(input.boolean_and_number_and_template);
            if ("number" === typeof input.boolean_and_number_and_template)
                return $number(input.boolean_and_number_and_template);
            if ("boolean" === typeof input.boolean_and_number_and_template)
                return input.boolean_and_number_and_template;
            $throws({
                expected: "(`prefix_${string}` | boolean | number)",
                value: input.boolean_and_number_and_template,
            });
        })()}}`;
    return $so0(input);
});
