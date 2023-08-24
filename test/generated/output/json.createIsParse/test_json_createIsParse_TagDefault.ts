import typia from "../../../../src";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { TagDefault } from "../../../structures/TagDefault";

export const test_json_isParse_TagDefault = _test_json_isParse(
    "TagDefault",
)<TagDefault>(TagDefault)((input: any): typia.Primitive<TagDefault> => {
    const is = (input: any): input is TagDefault => {
        const $io0 = (input: any): boolean =>
            "boolean" === typeof input.boolean &&
            "number" === typeof input.number &&
            Number.isFinite(input.number) &&
            "string" === typeof input.string &&
            "string" === typeof input.text &&
            "string" === typeof input.template &&
            RegExp(/^prefix_(.*)/).test(input.template) &&
            ("string" === typeof input.boolean_and_number_and_string ||
                ("number" === typeof input.boolean_and_number_and_string &&
                    Number.isFinite(input.boolean_and_number_and_string)) ||
                "boolean" === typeof input.boolean_and_number_and_string) &&
            ("string" === typeof input.union_but_boolean ||
                ("number" === typeof input.union_but_boolean &&
                    Number.isFinite(input.union_but_boolean)) ||
                "boolean" === typeof input.union_but_boolean) &&
            ("string" === typeof input.union_but_number ||
                ("number" === typeof input.union_but_number &&
                    Number.isFinite(input.union_but_number)) ||
                "boolean" === typeof input.union_but_number) &&
            ("string" === typeof input.union_but_string ||
                ("number" === typeof input.union_but_string &&
                    Number.isFinite(input.union_but_string)) ||
                "boolean" === typeof input.union_but_string) &&
            "number" === typeof input.vulnerable_range &&
            Number.isFinite(input.vulnerable_range) &&
            3 <= input.vulnerable_range &&
            5 >= input.vulnerable_range &&
            "string" === typeof input.vulnerable_template &&
            RegExp(/^prefix_(.*)/).test(input.vulnerable_template) &&
            null !== input.boolean_and_number_and_template &&
            undefined !== input.boolean_and_number_and_template &&
            (("number" === typeof input.boolean_and_number_and_template &&
                Number.isFinite(input.boolean_and_number_and_template)) ||
                "boolean" === typeof input.boolean_and_number_and_template ||
                ("string" === typeof input.boolean_and_number_and_template &&
                    RegExp(/^prefix_(.*)/).test(
                        input.boolean_and_number_and_template,
                    )));
        return "object" === typeof input && null !== input && $io0(input);
    };
    input = JSON.parse(input);
    return is(input) ? (input as any) : null;
});
