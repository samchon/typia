import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_assertGuardEqualsCustom_TemplateAtomic = (): void =>
  _test_assertGuardEquals(CustomGuardError)("TemplateAtomic")<TemplateAtomic>(
    TemplateAtomic,
  )((input) =>
    typia.assertGuardEquals<TemplateAtomic>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
