import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TemplateConstant } from "../../structures/TemplateConstant";

import { TypeGuardError } from "typia";

export const test_assertGuard_TemplateConstant = _test_assertGuard(
  TypeGuardError,
)("TemplateConstant")<TemplateConstant>(TemplateConstant)((input) =>
  typia.assertGuard<TemplateConstant>(input),
);
