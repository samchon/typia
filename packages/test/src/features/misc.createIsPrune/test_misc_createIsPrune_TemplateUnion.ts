import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_misc_createIsPrune_TemplateUnion = _test_misc_isPrune(
  "TemplateUnion",
)<TemplateUnion>(TemplateUnion)(typia.misc.createIsPrune<TemplateUnion>());
