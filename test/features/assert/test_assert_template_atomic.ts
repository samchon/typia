import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_assert } from "./_test_assert";

export const test_assert_template_atomic = _test_assert(
    "template atomic",
    TemplateAtomic.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            input.prefix = "prefix-something-wrong" as any;
            return "$input.prefix";
        },
        (input) => {
            input.postfix = "something-wrong-postfix" as any;
            return "$input.postfix";
        },
        (input) => {
            input.middle_string = "the-middle-value" as any;
            return "$input.middle_string";
        },
        (input) => {
            input.middle_string_empty = "the--value" as any;
            return "$input.middle_string_empty";
        },
        (input) => {
            input.middle_numeric = "the-0-value" as any;
            return "$input.middle_numeric";
        },
        (input) => {
            input.middle_boolean = "the-false-value" as any;
            return "$input.middle_boolean";
        },
        (input) => {
            input.ipv4 = "a.b.c.d" as any;
            return "$input.ipv4";
        },
        (input) => {
            input.email = "samchon_github.com" as any;
            return "$input.email";
        },
    ],
);
