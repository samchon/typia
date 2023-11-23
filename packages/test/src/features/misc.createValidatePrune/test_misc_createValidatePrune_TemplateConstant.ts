import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_misc_createValidatePrune_TemplateConstant =
  _test_misc_validatePrune("TemplateConstant")<TemplateConstant>(
    TemplateConstant,
  )(typia.misc.createValidatePrune<TemplateConstant>());
