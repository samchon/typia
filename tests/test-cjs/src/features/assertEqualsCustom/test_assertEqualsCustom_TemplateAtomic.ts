import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_assertEqualsCustom_TemplateAtomic = (): void =>
  _test_assertEquals(CustomGuardError)("TemplateAtomic")<TemplateAtomic>(
    TemplateAtomic,
  )((input) =>
    typia.assertEquals<TemplateAtomic>(input, (p) => new CustomGuardError(p)),
  );
