import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_template_constant = _test_assert_clone(
    "template constant",
    TemplateConstant.generate,
    (input) => TSON.assertClone(input),
    TemplateConstant.SPOILERS,
);
