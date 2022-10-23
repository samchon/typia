import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_validate_equals } from "./../validate_equals/_test_validate_equals";

export const test_create_validate_equals_template_constant =
    _test_validate_equals(
        "template constant",
        TemplateConstant.generate,
        TSON.createValidateEquals<TemplateConstant>(),
    );
