import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_assertCustom_TemplateUnion = _test_assert(CustomGuardError)(
  "TemplateUnion",
)<TemplateUnion>(TemplateUnion)((input) =>
  typia.assert<TemplateUnion>(input, (p) => new CustomGuardError(p)),
);
