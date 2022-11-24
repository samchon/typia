import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_create_is_stringify_template_constant = _test_is_stringify(
    "template constant",
    TemplateConstant.generate,
    TSON.createIsStringify<TemplateConstant>(),
    TemplateConstant.SPOILERS,
);
