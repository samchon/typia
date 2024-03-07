import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

import { TypeGuardError } from "typia";

export const test_assertEquals_TemplateAtomic = _test_assertEquals(
  TypeGuardError,
)("TemplateAtomic")<TemplateAtomic>(TemplateAtomic)((input) =>
  typia.assertEquals<TemplateAtomic>(input),
);
