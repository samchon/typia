import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

import { TypeGuardError } from "typia";

export const test_misc_assertClone_TemplateAtomic = _test_misc_assertClone(
  TypeGuardError,
)("TemplateAtomic")<TemplateAtomic>(TemplateAtomic)((input) =>
  typia.misc.assertClone<TemplateAtomic>(input),
);
