import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_assert_TemplateUnion = _test_assert(
  "TemplateUnion",
)<TemplateUnion>(TemplateUnion)((input) => typia.assert<TemplateUnion>(input));
