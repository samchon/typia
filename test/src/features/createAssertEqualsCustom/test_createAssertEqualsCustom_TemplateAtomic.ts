import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_createAssertEqualsCustom_TemplateAtomic = (): void =>
  _test_assertEquals(CustomGuardError)("TemplateAtomic")<TemplateAtomic>(
    TemplateAtomic,
  )(typia.createAssertEquals<TemplateAtomic>((p) => new CustomGuardError(p)));
