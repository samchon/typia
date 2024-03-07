import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_TemplateAtomic =
  _test_assertGuardEquals(TypeGuardError)("TemplateAtomic")<TemplateAtomic>(
    TemplateAtomic,
  )(typia.createAssertGuardEquals<TemplateAtomic>());
