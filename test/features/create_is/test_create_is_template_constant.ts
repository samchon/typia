import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_is } from "../internal/_test_is";

export const test_create_is_template_constant = _test_is(
    "template constant",
    TemplateConstant.generate,
    TSON.createIs<TemplateConstant>(),
    TemplateConstant.SPOILERS,
);
