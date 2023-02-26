import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_createValidatePrune_TemplateConstant = _test_validatePrune(
    "TemplateConstant",
    TemplateConstant.generate,
    typia.createValidatePrune<TemplateConstant>(),
    TemplateConstant.SPOILERS,
);
