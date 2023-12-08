import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_misc_isPrune_TemplateAtomic = _test_misc_isPrune(
  "TemplateAtomic",
)<TemplateAtomic>(TemplateAtomic)((input) =>
  typia.misc.isPrune<TemplateAtomic>(input),
);
