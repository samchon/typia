import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_assert_stringify_template_constant = _test_assert_stringify(
    "template constant",
    TemplateConstant.generate,
    (input) => TSON.assertStringify(input),
    TemplateConstant.SPOILERS,
);
