import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_createAssertCustom_TemplateAtomic = (): void =>
  _test_assert(CustomGuardError)("TemplateAtomic")<TemplateAtomic>(
    TemplateAtomic,
  )(typia.createAssert<TemplateAtomic>((p) => new CustomGuardError(p)));
