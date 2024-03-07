import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TemplateConstant } from "../../structures/TemplateConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_TemplateConstant =
  _test_misc_assertClone(CustomGuardError)(
    "TemplateConstant",
  )<TemplateConstant>(TemplateConstant)(
    typia.misc.createAssertClone<TemplateConstant>(
      (p) => new CustomGuardError(p),
    ),
  );
