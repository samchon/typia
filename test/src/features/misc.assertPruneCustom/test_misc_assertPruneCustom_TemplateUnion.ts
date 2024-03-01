import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_misc_assertPruneCustom_TemplateUnion = _test_misc_assertPrune(
  CustomGuardError,
)("TemplateUnion")<TemplateUnion>(TemplateUnion)((input) =>
  typia.misc.assertPrune<TemplateUnion>(input, (p) => new CustomGuardError(p)),
);
