import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_assert_TemplateUnion = _test_assert(TypeGuardError)(
  "TemplateUnion",
)<TemplateUnion>(TemplateUnion)((input) => typia.assert<TemplateUnion>(input));
