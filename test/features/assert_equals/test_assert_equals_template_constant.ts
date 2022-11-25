import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_assert_equals } from "../internal/_test_assert_equals";

export const test_assert_equals_template_constant = _test_assert_equals(
    "template constant",
    TemplateConstant.generate,
    (input) => TSON.assertEquals(input),
);
