import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_equals } from "./../equals/_test_equals";

export const test_create_equals_template_constant = _test_equals(
    "template constant",
    TemplateConstant.generate,
    TSON.createEquals<TemplateConstant>(),
);
