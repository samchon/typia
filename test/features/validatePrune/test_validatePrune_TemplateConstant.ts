import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_validatePrune_TemplateConstant = _test_validatePrune(
    "TemplateConstant",
    TemplateConstant.generate,
    (input) => typia.validatePrune(input),
    TemplateConstant.SPOILERS,
);
