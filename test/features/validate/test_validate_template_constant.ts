import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_validate } from "./_test_validate";

export const test_validate_template_constant = _test_validate(
    "template constant",
    TemplateConstant.generate,
    (input) => TSON.validate(input),
    TemplateConstant.SPOILERS,
);
