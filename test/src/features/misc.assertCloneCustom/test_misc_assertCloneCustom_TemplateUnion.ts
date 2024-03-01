import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_misc_assertCloneCustom_TemplateUnion = _test_misc_assertClone(
  CustomGuardError,
)("TemplateUnion")<TemplateUnion>(TemplateUnion)((input) =>
  typia.misc.assertClone<TemplateUnion>(input, (p) => new CustomGuardError(p)),
);
