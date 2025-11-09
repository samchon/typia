import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_createAssert_TemplateConstant = (): void =>
  _test_assert(TypeGuardError)("TemplateConstant")<TemplateConstant>(
    TemplateConstant,
  )(typia.createAssert<TemplateConstant>());
