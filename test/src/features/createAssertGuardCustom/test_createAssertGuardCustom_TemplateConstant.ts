import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_createAssertGuardCustom_TemplateConstant = (): void =>
  _test_assertGuard(CustomGuardError)("TemplateConstant")<TemplateConstant>(
    TemplateConstant,
  )(typia.createAssertGuard<TemplateConstant>((p) => new CustomGuardError(p)));
