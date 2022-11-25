import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_template_constant = _test_assert(
    "template constant",
    TemplateConstant.generate,
    (input) => TSON.assert(input),
    TemplateConstant.SPOILERS,
);
