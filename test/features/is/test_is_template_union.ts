import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_is } from "./_test_is";

export const test_is_template_union = _test_is(
    "template union",
    TemplateUnion.generate,
    (input) => TSON.is(input),
    [
        (input) => (input[0].prefix = "prefix-1" as any),
        (input) => (input[0].postfix = "first-postfix" as any),
        (input) => (input[0].middle = "the_middle_value" as any),
        (input) => (input[0].mixed = "the_C_value" as any),
    ],
);
