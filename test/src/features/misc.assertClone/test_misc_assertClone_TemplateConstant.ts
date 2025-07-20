import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_misc_assertClone_TemplateConstant = (): void =>
  _test_misc_assertClone(TypeGuardError)("TemplateConstant")<TemplateConstant>(
    TemplateConstant,
  )((input) => typia.misc.assertClone<TemplateConstant>(input));
