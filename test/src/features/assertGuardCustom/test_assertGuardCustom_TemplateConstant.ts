import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_assertGuardCustom_TemplateConstant = (): void =>
  _test_assertGuard(CustomGuardError)("TemplateConstant")<TemplateConstant>(
    TemplateConstant,
  )((input) =>
    typia.assertGuard<TemplateConstant>(input, (p) => new CustomGuardError(p)),
  );
