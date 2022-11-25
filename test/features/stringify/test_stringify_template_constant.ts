import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_template_constant = _test_stringify(
    "template constant",
    TemplateConstant.generate,
    (input) => TSON.stringify(input),
);
