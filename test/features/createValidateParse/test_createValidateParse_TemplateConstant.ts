import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_createValidateParse_TemplateConstant = _test_validateParse(
    "TemplateConstant",
    TemplateConstant.generate,
    typia.createValidateParse<TemplateConstant>(),
    TemplateConstant.SPOILERS,
);
