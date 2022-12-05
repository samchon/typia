import TSON from "../../../src";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_TemplateConstant = _test_validateParse(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) => TSON.validateParse<TemplateConstant>(input),
    TemplateConstant.SPOILERS,
);
