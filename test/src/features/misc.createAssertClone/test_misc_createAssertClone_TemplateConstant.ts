import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_misc_createAssertClone_TemplateConstant = (): void =>
  _test_misc_assertClone(TypeGuardError)("TemplateConstant")<TemplateConstant>(
    TemplateConstant,
  )(typia.misc.createAssertClone<TemplateConstant>());
