import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_misc_createAssertPruneCustom_TemplateAtomic =
  _test_misc_assertPrune(CustomGuardError)("TemplateAtomic")<TemplateAtomic>(
    TemplateAtomic,
  )(
    typia.misc.createAssertPrune<TemplateAtomic>(
      (p) => new CustomGuardError(p),
    ),
  );
