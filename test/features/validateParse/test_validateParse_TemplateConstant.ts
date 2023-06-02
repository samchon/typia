import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_validateParse_TemplateConstant = _test_validateParse(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) => typia.validateParse<TemplateConstant>(input),
    TemplateConstant.SPOILERS,
);
