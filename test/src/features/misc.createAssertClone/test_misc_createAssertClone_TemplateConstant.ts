import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TemplateConstant } from "../../structures/TemplateConstant";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_TemplateConstant =
  _test_misc_assertClone(TypeGuardError)("TemplateConstant")<TemplateConstant>(
    TemplateConstant,
  )(typia.misc.createAssertClone<TemplateConstant>());
