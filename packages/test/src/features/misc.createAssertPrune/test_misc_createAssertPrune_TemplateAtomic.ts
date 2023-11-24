import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_misc_createAssertPrune_TemplateAtomic =
  _test_misc_assertPrune("TemplateAtomic")<TemplateAtomic>(TemplateAtomic)(
    typia.misc.createAssertPrune<TemplateAtomic>(),
  );
