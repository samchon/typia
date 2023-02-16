import typia from "typia";

import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_TemplateConstant = _test_validateParse(
    "TemplateConstant",
    TemplateConstant.generate,
    typia.createValidateParse<TemplateConstant>(),
    TemplateConstant.SPOILERS,
);
