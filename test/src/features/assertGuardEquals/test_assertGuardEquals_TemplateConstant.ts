import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_assertGuardEquals_TemplateConstant = _test_assertGuardEquals(
  TypeGuardError,
)("TemplateConstant")<TemplateConstant>(TemplateConstant)((input) =>
  typia.assertGuardEquals<TemplateConstant>(input),
);
