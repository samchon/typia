import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_misc_validateClone_TemplateUnion = _test_misc_validateClone(
  "TemplateUnion",
)<TemplateUnion>(TemplateUnion)((input) =>
  typia.misc.validateClone<TemplateUnion>(input),
);
