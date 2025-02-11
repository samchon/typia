import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_assertGuard_TemplateAtomic = _test_assertGuard(
  TypeGuardError,
)("TemplateAtomic")<TemplateAtomic>(TemplateAtomic)((input) =>
  typia.assertGuard<TemplateAtomic>(input),
);
