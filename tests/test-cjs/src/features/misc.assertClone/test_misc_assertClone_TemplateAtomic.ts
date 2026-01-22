import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_misc_assertClone_TemplateAtomic = (): void =>
  _test_misc_assertClone(TypeGuardError)("TemplateAtomic")<TemplateAtomic>(
    TemplateAtomic,
  )((input) => typia.misc.assertClone<TemplateAtomic>(input));
