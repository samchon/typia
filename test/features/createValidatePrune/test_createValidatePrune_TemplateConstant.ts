import typia from "typia";

import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_TemplateConstant = _test_validatePrune(
    "TemplateConstant",
    TemplateConstant.generate,
    typia.createValidatePrune<TemplateConstant>(),
    TemplateConstant.SPOILERS,
);
