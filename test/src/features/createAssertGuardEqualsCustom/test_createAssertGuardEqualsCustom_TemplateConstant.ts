import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_createAssertGuardEqualsCustom_TemplateConstant = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "TemplateConstant",
  )<TemplateConstant>(TemplateConstant)(
    typia.createAssertGuardEquals<TemplateConstant>(
      (p) => new CustomGuardError(p),
    ),
  );
