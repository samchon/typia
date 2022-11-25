import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_validate_equals } from "../internal/_test_validate_equals";

export const test_validate_equals_template_constant = _test_validate_equals(
    "template constant",
    TemplateConstant.generate,
    (input) => TSON.validateEquals(input),
);
