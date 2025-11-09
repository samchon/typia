import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_misc_createValidateClone_TemplateAtomic = (): void =>
  _test_misc_validateClone("TemplateAtomic")<TemplateAtomic>(TemplateAtomic)(
    typia.misc.createValidateClone<TemplateAtomic>(),
  );
