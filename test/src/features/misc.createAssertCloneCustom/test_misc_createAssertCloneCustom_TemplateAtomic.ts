import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_misc_createAssertCloneCustom_TemplateAtomic =
  _test_misc_assertClone(CustomGuardError)("TemplateAtomic")<TemplateAtomic>(
    TemplateAtomic,
  )(
    typia.misc.createAssertClone<TemplateAtomic>(
      (p) => new CustomGuardError(p),
    ),
  );
