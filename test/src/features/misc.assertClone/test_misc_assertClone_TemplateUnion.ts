import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TemplateUnion } from "../../structures/TemplateUnion";

import { TypeGuardError } from "typia";

export const test_misc_assertClone_TemplateUnion = _test_misc_assertClone(
  TypeGuardError,
)("TemplateUnion")<TemplateUnion>(TemplateUnion)((input) =>
  typia.misc.assertClone<TemplateUnion>(input),
);
