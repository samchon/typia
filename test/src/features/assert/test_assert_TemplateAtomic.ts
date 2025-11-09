import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_assert_TemplateAtomic = (): void =>
  _test_assert(TypeGuardError)("TemplateAtomic")<TemplateAtomic>(
    TemplateAtomic,
  )((input) => typia.assert<TemplateAtomic>(input));
