import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_assertGuardCustom_TemplateUnion = _test_assertGuard(
  CustomGuardError,
)("TemplateUnion")<TemplateUnion>(TemplateUnion)((input) =>
  typia.assertGuard<TemplateUnion>(input, (p) => new CustomGuardError(p)),
);
