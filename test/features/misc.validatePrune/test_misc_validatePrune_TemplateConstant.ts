import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_misc_validatePrune_TemplateConstant =
    _test_misc_validatePrune<TemplateConstant>(TemplateConstant)((input) =>
        typia.misc.validatePrune(input),
    );
