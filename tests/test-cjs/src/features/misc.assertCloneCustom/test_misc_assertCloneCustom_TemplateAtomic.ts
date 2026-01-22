import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_misc_assertCloneCustom_TemplateAtomic = (): void =>
  _test_misc_assertClone(CustomGuardError)("TemplateAtomic")<TemplateAtomic>(
    TemplateAtomic,
  )((input) =>
    typia.misc.assertClone<TemplateAtomic>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
