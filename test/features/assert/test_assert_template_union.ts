import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_assert } from "./_test_assert";

export const test_assert_template_union = _test_assert(
    "template union",
    TemplateUnion.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            input[0].prefix = "prefix-1" as any;
            return "$input[0].prefix";
        },
        (input) => {
            input[0].postfix = "first-postfix" as any;
            return "$input[0].postfix";
        },
        (input) => {
            input[0].middle = "the_middle_value" as any;
            return "$input[0].middle";
        },
        (input) => {
            input[0].mixed = "the_C_value" as any;
            return "$input[0].mixed";
        },
    ],
);
