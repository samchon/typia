import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TemplateConstant } from "../../structures/TemplateConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_TemplateConstant =
  _test_misc_assertClone(CustomGuardError)(
    "TemplateConstant",
  )<TemplateConstant>(TemplateConstant)((input) =>
    typia.misc.assertClone<TemplateConstant>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
