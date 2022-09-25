import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_assert } from "./_test_assert";

export const test_assert_template_constant = _test_assert(
    "template constant",
    TemplateConstant.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            input[0].prefix = "prefix_1" as any;
            return "$input[0].prefix";
        },
        (input) => {
            input[0].postfix = "first_postfix" as any;
            return "$input[0].postfix";
        },
        (input) => {
            input[0].combined = "the_first_value_with_label_1" as any;
            return "$input[0].combined";
        },
    ],
);
