import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_misc_clone_TemplateUnion = _test_misc_clone(
  "TemplateUnion",
)<TemplateUnion>(TemplateUnion)((input) =>
  typia.misc.clone<TemplateUnion>(input),
);
