import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_misc_createAssertCloneCustom_TemplateUnion =
  _test_misc_assertClone(CustomGuardError)("TemplateUnion")<TemplateUnion>(
    TemplateUnion,
  )(
    typia.misc.createAssertClone<TemplateUnion>((p) => new CustomGuardError(p)),
  );
