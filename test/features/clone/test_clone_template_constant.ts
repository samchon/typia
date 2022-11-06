import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_clone } from "./_test_clone";

export const test_clone_template_constant = _test_clone(
    "template constant",
    TemplateConstant.generate,
    (input) => TSON.clone(input),
);
