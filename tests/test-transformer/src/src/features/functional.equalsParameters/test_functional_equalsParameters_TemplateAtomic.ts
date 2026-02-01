import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_equalsParameters_TemplateAtomic = (): void => _test_functional_equalsParameters(
  "TemplateAtomic"
)(TemplateAtomic)(
  (p: (input: TemplateAtomic) => TemplateAtomic) => typia.functional.equalsParameters(p),
)