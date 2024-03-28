import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_assertGuardEquals_TemplateUnion = _test_assertGuardEquals(
  TypeGuardError,
)("TemplateUnion")<TemplateUnion>(TemplateUnion)((input) =>
  typia.assertGuardEquals<TemplateUnion>(input),
);
