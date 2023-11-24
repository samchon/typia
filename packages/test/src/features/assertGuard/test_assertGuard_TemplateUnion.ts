import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_assertGuard_TemplateUnion = _test_assertGuard(
  "TemplateUnion",
)<TemplateUnion>(TemplateUnion)((input) =>
  typia.assertGuard<TemplateUnion>(input),
);
