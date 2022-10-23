import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_is } from "./_test_is";

export const test_is_template_constant = _test_is(
    "template constant",
    TemplateConstant.generate,
    (input) => TSON.is(input),
    TemplateConstant.SPOILERS,
);
