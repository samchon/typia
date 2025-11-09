import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_misc_createIsClone_TemplateUnion = (): void =>
  _test_misc_isClone("TemplateUnion")<TemplateUnion>(TemplateUnion)(
    typia.misc.createIsClone<TemplateUnion>(),
  );
