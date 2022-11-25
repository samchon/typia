import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_template_constant = _test_is_stringify(
    "template constant",
    TemplateConstant.generate,
    (input) => TSON.isStringify(input),
    TemplateConstant.SPOILERS,
);
