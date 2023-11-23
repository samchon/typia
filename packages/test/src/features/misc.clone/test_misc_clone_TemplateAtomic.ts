import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_misc_clone_TemplateAtomic = _test_misc_clone(
  "TemplateAtomic",
)<TemplateAtomic>(TemplateAtomic)((input) =>
  typia.misc.clone<TemplateAtomic>(input),
);
