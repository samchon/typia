import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_template_constant = _test_is_clone(
    "template constant",
    TemplateConstant.generate,
    (input) => TSON.isClone(input),
    TemplateConstant.SPOILERS,
);
