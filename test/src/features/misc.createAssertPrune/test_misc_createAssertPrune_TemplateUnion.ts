import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_misc_createAssertPrune_TemplateUnion = _test_misc_assertPrune(
  TypeGuardError,
)("TemplateUnion")<TemplateUnion>(TemplateUnion)(
  typia.misc.createAssertPrune<TemplateUnion>(),
);
