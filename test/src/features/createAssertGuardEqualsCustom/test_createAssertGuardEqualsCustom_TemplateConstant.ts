import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TemplateConstant } from "../../structures/TemplateConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_TemplateConstant =
  _test_assertGuardEquals(CustomGuardError)(
    "TemplateConstant",
  )<TemplateConstant>(TemplateConstant)(
    typia.createAssertGuardEquals<TemplateConstant>(
      (p) => new CustomGuardError(p),
    ),
  );
