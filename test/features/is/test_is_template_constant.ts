import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_is } from "./_test_is";

export const test_is_template_constant = _test_is(
    "template constant",
    TemplateConstant.generate,
    (input) => TSON.is(input),
    [
        (input) => (input[0].prefix = "prefix_1" as any),
        (input) => (input[0].postfix = "first_postfix" as any),
        (input) => (input[0].combined = "the_first_value_with_label_1" as any),
    ],
);
