import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_misc_createPrune_TemplateUnion = _test_misc_prune(
  "TemplateUnion",
)<TemplateUnion>(TemplateUnion)(typia.misc.createPrune<TemplateUnion>());
