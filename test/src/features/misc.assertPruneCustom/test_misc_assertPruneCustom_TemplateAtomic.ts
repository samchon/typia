import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_misc_assertPruneCustom_TemplateAtomic = (): void =>
  _test_misc_assertPrune(CustomGuardError)("TemplateAtomic")<TemplateAtomic>(
    TemplateAtomic,
  )((input) =>
    typia.misc.assertPrune<TemplateAtomic>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
