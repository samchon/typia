import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_assertGuardEqualsCustom_TemplateConstant = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "TemplateConstant",
  )<TemplateConstant>(TemplateConstant)((input) =>
    typia.assertGuardEquals<TemplateConstant>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
