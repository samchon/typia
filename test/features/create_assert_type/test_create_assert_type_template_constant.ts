import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_create_assert_type_template_constant = _test_assert_type(
    "template constant",
    TemplateConstant.generate,
    TSON.createAssertType<TemplateConstant>(),
    TemplateConstant.SPOILERS,
);
