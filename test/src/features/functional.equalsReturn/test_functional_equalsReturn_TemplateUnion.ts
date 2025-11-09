import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_equalsReturn_TemplateUnion = (): void => _test_functional_equalsReturn(
  "TemplateUnion"
)(TemplateUnion)(
  (p: (input: TemplateUnion) => TemplateUnion) => typia.functional.equalsReturn(p),
)