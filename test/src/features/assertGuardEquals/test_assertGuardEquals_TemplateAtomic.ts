import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_assertGuardEquals_TemplateAtomic = (): void =>
  _test_assertGuardEquals(TypeGuardError)("TemplateAtomic")<TemplateAtomic>(
    TemplateAtomic,
  )((input) => typia.assertGuardEquals<TemplateAtomic>(input));
