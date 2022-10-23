import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_assert_equals } from "./../assert_equals/_test_assert_equals";

export const test_create_assert_equals_template_constant = _test_assert_equals(
    "template constant",
    TemplateConstant.generate,
    TSON.createAssertEquals<TemplateConstant>(),
);
