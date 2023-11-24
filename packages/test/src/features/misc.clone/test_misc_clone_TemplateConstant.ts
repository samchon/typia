import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_misc_clone_TemplateConstant = _test_misc_clone(
  "TemplateConstant",
)<TemplateConstant>(TemplateConstant)((input) =>
  typia.misc.clone<TemplateConstant>(input),
);
