import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_assert_TemplateConstant = _test_assert(TypeGuardError)(
  "TemplateConstant",
)<TemplateConstant>(TemplateConstant)((input) =>
  typia.assert<TemplateConstant>(input),
);
