import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_template_constant = _test_stringify(
    "template constant",
    TemplateConstant.generate(),
    TSON.createStringify<TemplateConstant>(),
);
