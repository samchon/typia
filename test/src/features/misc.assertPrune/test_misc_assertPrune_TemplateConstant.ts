import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TemplateConstant } from "../../structures/TemplateConstant";

import { TypeGuardError } from "typia";

export const test_misc_assertPrune_TemplateConstant = _test_misc_assertPrune(
  TypeGuardError,
)("TemplateConstant")<TemplateConstant>(TemplateConstant)((input) =>
  typia.misc.assertPrune<TemplateConstant>(input),
);
