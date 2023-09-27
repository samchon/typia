import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { CommentTagDefault } from "../../../structures/CommentTagDefault";

export const test_json_isStringify_CommentTagDefault = _test_json_isStringify(
    "CommentTagDefault",
)<CommentTagDefault>(CommentTagDefault)((input) =>
    ((input: CommentTagDefault): string | null => {
        const is = (input: any): input is CommentTagDefault => {
            const $io0 = (input: any): boolean =>
                "boolean" === typeof input.boolean &&
                "number" === typeof input.number &&
                Number.isFinite(input.number) &&
                "string" === typeof input.string &&
                "string" === typeof input.text &&
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
                3 <= input.vulnerable_range &&
                input.vulnerable_range <= 5 &&
                null !== input.boolean_and_number_and_template &&
                undefined !== input.boolean_and_number_and_template &&
                (("number" === typeof input.boolean_and_number_and_template &&
                    Number.isFinite(input.boolean_and_number_and_template)) ||
                    "boolean" ===
                        typeof input.boolean_and_number_and_template ||
                    ("string" ===
                        typeof input.boolean_and_number_and_template &&
                        RegExp(/^prefix_(.*)/).test(
                            input.boolean_and_number_and_template,
                        )));
            return "object" === typeof input && null !== input && $io0(input);
        };
        const stringify = (input: CommentTagDefault): string => {
            const $number = (typia.json.isStringify as any).number;
            const $string = (typia.json.isStringify as any).string;
            const $throws = (typia.json.isStringify as any).throws;
            const $so0 = (input: any): any =>
                `{"boolean":${input.boolean},"number":${$number(
                    input.number,
                )},"string":${$string(input.string)},"text":${$string(
                    input.text,
                )},"boolean_and_number_and_string":${(() => {
                    if ("string" === typeof input.boolean_and_number_and_string)
                        return $string(input.boolean_and_number_and_string);
                    if ("number" === typeof input.boolean_and_number_and_string)
                        return $number(input.boolean_and_number_and_string);
                    if (
                        "boolean" === typeof input.boolean_and_number_and_string
                    )
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
                )},"boolean_and_number_and_template":${(() => {
                    if (
                        "string" ===
                        typeof input.boolean_and_number_and_template
                    )
                        return $string(input.boolean_and_number_and_template);
                    if (
                        "number" ===
                        typeof input.boolean_and_number_and_template
                    )
                        return $number(input.boolean_and_number_and_template);
                    if (
                        "boolean" ===
                        typeof input.boolean_and_number_and_template
                    )
                        return input.boolean_and_number_and_template;
                    $throws({
                        expected: "(`prefix_${string}` | boolean | number)",
                        value: input.boolean_and_number_and_template,
                    });
                })()}}`;
            return $so0(input);
        };
        return is(input) ? stringify(input) : null;
    })(input),
);
