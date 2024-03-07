import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_TemplateAtomic =
  _test_misc_assertClone(CustomGuardError)("TemplateAtomic")<TemplateAtomic>(
    TemplateAtomic,
  )((input) =>
    typia.misc.assertClone<TemplateAtomic>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
