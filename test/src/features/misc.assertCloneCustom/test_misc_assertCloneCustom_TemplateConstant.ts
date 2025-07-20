import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_misc_assertCloneCustom_TemplateConstant = (): void =>
  _test_misc_assertClone(CustomGuardError)(
    "TemplateConstant",
  )<TemplateConstant>(TemplateConstant)((input) =>
    typia.misc.assertClone<TemplateConstant>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
