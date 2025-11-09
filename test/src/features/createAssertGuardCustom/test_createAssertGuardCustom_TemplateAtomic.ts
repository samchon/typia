import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_createAssertGuardCustom_TemplateAtomic = (): void =>
  _test_assertGuard(CustomGuardError)("TemplateAtomic")<TemplateAtomic>(
    TemplateAtomic,
  )(typia.createAssertGuard<TemplateAtomic>((p) => new CustomGuardError(p)));
