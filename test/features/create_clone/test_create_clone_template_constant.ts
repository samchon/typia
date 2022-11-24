import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_template_constant = _test_clone(
    "template constant",
    TemplateConstant.generate,
    TSON.createClone<TemplateConstant>(),
);
