import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TemplateUnion } from "../../structures/TemplateUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_TemplateUnion = _test_assertGuard(
  CustomGuardError,
)("TemplateUnion")<TemplateUnion>(TemplateUnion)(
  typia.createAssertGuard<TemplateUnion>((p) => new CustomGuardError(p)),
);
