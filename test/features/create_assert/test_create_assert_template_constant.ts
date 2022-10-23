import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_template_constant = _test_assert(
    "template constant",
    TemplateConstant.generate,
    TSON.createAssertType<TemplateConstant>(),
    TemplateConstant.SPOILERS,
);
