import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_createAssertGuard_TemplateUnion = _test_assertGuard(
  TypeGuardError,
)("TemplateUnion")<TemplateUnion>(TemplateUnion)(
  typia.createAssertGuard<TemplateUnion>(),
);
