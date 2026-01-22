import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_misc_createValidateClone_TemplateUnion = (): void =>
  _test_misc_validateClone("TemplateUnion")<TemplateUnion>(TemplateUnion)(
    typia.misc.createValidateClone<TemplateUnion>(),
  );
