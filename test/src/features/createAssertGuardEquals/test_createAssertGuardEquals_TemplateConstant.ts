import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_createAssertGuardEquals_TemplateConstant = (): void =>
  _test_assertGuardEquals(TypeGuardError)("TemplateConstant")<TemplateConstant>(
    TemplateConstant,
  )(typia.createAssertGuardEquals<TemplateConstant>());
