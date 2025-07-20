import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_misc_createValidatePrune_TemplateAtomic = (): void =>
  _test_misc_validatePrune("TemplateAtomic")<TemplateAtomic>(TemplateAtomic)(
    typia.misc.createValidatePrune<TemplateAtomic>(),
  );
