import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_misc_createAssertClone_TemplateAtomic = (): void =>
  _test_misc_assertClone(TypeGuardError)("TemplateAtomic")<TemplateAtomic>(
    TemplateAtomic,
  )(typia.misc.createAssertClone<TemplateAtomic>());
