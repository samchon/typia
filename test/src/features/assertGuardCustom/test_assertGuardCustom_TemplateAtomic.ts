import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_assertGuardCustom_TemplateAtomic = (): void =>
  _test_assertGuard(CustomGuardError)("TemplateAtomic")<TemplateAtomic>(
    TemplateAtomic,
  )((input) =>
    typia.assertGuard<TemplateAtomic>(input, (p) => new CustomGuardError(p)),
  );
