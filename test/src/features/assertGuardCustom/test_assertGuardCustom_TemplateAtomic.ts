import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_TemplateAtomic = _test_assertGuard(
  CustomGuardError,
)("TemplateAtomic")<TemplateAtomic>(TemplateAtomic)((input) =>
  typia.assertGuard<TemplateAtomic>(input, (p) => new CustomGuardError(p)),
);
