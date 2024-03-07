import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_TemplateAtomic = _test_assertEquals(
  CustomGuardError,
)("TemplateAtomic")<TemplateAtomic>(TemplateAtomic)((input) =>
  typia.assertEquals<TemplateAtomic>(input, (p) => new CustomGuardError(p)),
);
