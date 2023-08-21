import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { TagDefault } from "../../../structures/TagDefault";

export const test_misc_isClone_TagDefault = _test_misc_isClone(
    "TagDefault",
)<TagDefault>(TagDefault)((input: any): typia.Primitive<TagDefault> | null => {
    const is = (input: any): input is TagDefault => {
        const $is_custom = (typia.misc.createIsClone as any).is_custom;
        const $io0 = (input: any): boolean =>
            "boolean" === typeof input.boolean &&
            "number" === typeof input.number &&
            Number.isFinite(input.number) &&
            $is_custom("default", "number", "1", input.number) &&
            "string" === typeof input.string &&
            $is_custom("default", "string", "two", input.string) &&
            "string" === typeof input.text &&
            $is_custom(
                "default",
                "string",
                "Very long text, can you understand it?",
                input.text,
            ) &&
            "string" === typeof input.template &&
            RegExp(/^prefix_(.*)/).test(input.template) &&
            $is_custom("default", "string", "prefix_A", input.template) &&
            (("string" === typeof input.boolean_and_number_and_string &&
                $is_custom(
                    "default",
                    "string",
                    "false",
                    input.boolean_and_number_and_string,
                ) &&
                $is_custom(
                    "default",
                    "string",
                    "1",
                    input.boolean_and_number_and_string,
                ) &&
                $is_custom(
                    "default",
                    "string",
                    "two",
                    input.boolean_and_number_and_string,
                )) ||
                ("number" === typeof input.boolean_and_number_and_string &&
                    Number.isFinite(input.boolean_and_number_and_string) &&
                    $is_custom(
                        "default",
                        "number",
                        "false",
                        input.boolean_and_number_and_string,
                    ) &&
                    $is_custom(
                        "default",
                        "number",
                        "1",
                        input.boolean_and_number_and_string,
                    ) &&
                    $is_custom(
                        "default",
                        "number",
                        "two",
                        input.boolean_and_number_and_string,
                    )) ||
                "boolean" === typeof input.boolean_and_number_and_string) &&
            (("string" === typeof input.union_but_boolean &&
                $is_custom(
                    "default",
                    "string",
                    "false",
                    input.union_but_boolean,
                )) ||
                ("number" === typeof input.union_but_boolean &&
                    Number.isFinite(input.union_but_boolean) &&
                    $is_custom(
                        "default",
                        "number",
                        "false",
                        input.union_but_boolean,
                    )) ||
                "boolean" === typeof input.union_but_boolean) &&
            (("string" === typeof input.union_but_number &&
                $is_custom("default", "string", "1", input.union_but_number)) ||
                ("number" === typeof input.union_but_number &&
                    Number.isFinite(input.union_but_number) &&
                    $is_custom(
                        "default",
                        "number",
                        "1",
                        input.union_but_number,
                    )) ||
                "boolean" === typeof input.union_but_number) &&
            (("string" === typeof input.union_but_string &&
                $is_custom(
                    "default",
                    "string",
                    "two",
                    input.union_but_string,
                )) ||
                ("number" === typeof input.union_but_string &&
                    Number.isFinite(input.union_but_string) &&
                    $is_custom(
                        "default",
                        "number",
                        "two",
                        input.union_but_string,
                    )) ||
                "boolean" === typeof input.union_but_string) &&
            "number" === typeof input.vulnerable_range &&
            3 <= input.vulnerable_range &&
            5 >= input.vulnerable_range &&
            $is_custom("default", "number", "7", input.vulnerable_range) &&
            "string" === typeof input.vulnerable_template &&
            RegExp(/^prefix_(.*)/).test(input.vulnerable_template) &&
            $is_custom("default", "string", "two", input.vulnerable_template) &&
            null !== input.boolean_and_number_and_template &&
            undefined !== input.boolean_and_number_and_template &&
            (("number" === typeof input.boolean_and_number_and_template &&
                Number.isFinite(input.boolean_and_number_and_template) &&
                $is_custom(
                    "default",
                    "number",
                    "false",
                    input.boolean_and_number_and_template,
                ) &&
                $is_custom(
                    "default",
                    "number",
                    "1",
                    input.boolean_and_number_and_template,
                ) &&
                $is_custom(
                    "default",
                    "number",
                    "prefix_B",
                    input.boolean_and_number_and_template,
                )) ||
                "boolean" === typeof input.boolean_and_number_and_template ||
                ("string" === typeof input.boolean_and_number_and_template &&
                    RegExp(/^prefix_(.*)/).test(
                        input.boolean_and_number_and_template,
                    ) &&
                    $is_custom(
                        "default",
                        "string",
                        "false",
                        input.boolean_and_number_and_template,
                    ) &&
                    $is_custom(
                        "default",
                        "string",
                        "1",
                        input.boolean_and_number_and_template,
                    ) &&
                    $is_custom(
                        "default",
                        "string",
                        "prefix_B",
                        input.boolean_and_number_and_template,
                    )));
        return "object" === typeof input && null !== input && $io0(input);
    };
    const clone = (input: TagDefault): typia.Primitive<TagDefault> => {
        const $is_custom = (typia.misc.createIsClone as any).is_custom;
        const $co0 = (input: any): any => ({
            boolean: input.boolean as any,
            number: input.number as any,
            string: input.string as any,
            text: input.text as any,
            template: input.template as any,
            boolean_and_number_and_string:
                input.boolean_and_number_and_string as any,
            union_but_boolean: input.union_but_boolean as any,
            union_but_number: input.union_but_number as any,
            union_but_string: input.union_but_string as any,
            vulnerable_range: input.vulnerable_range as any,
            vulnerable_template: input.vulnerable_template as any,
            boolean_and_number_and_template:
                input.boolean_and_number_and_template as any,
        });
        return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
});
