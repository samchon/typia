import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_createAssertGuardEqualsCustom_TemplateAtomic =
  _test_assertGuardEquals(CustomGuardError)("TemplateAtomic")<TemplateAtomic>(
    TemplateAtomic,
  )(
    typia.createAssertGuardEquals<TemplateAtomic>(
      (p) => new CustomGuardError(p),
    ),
  );
