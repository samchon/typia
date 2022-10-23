import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_template_constant = _test_validate(
    "template constant",
    TemplateConstant.generate,
    TSON.createValidate<TemplateConstant>(),
    TemplateConstant.SPOILERS,
);
