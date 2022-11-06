import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_is_clone } from "./../is_clone/_test_is_clone";

export const test_create_is_clone_template_constant = _test_is_clone(
    "template constant",
    TemplateConstant.generate,
    TSON.createIsClone<TemplateConstant>(),
    TemplateConstant.SPOILERS,
);
