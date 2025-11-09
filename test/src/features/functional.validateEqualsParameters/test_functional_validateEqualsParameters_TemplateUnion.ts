import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_validateEqualsParameters_TemplateUnion = (): void => _test_functional_validateEqualsParameters(
  "TemplateUnion"
)(TemplateUnion)(
  (p: (input: TemplateUnion) => TemplateUnion) => typia.functional.validateEqualsParameters(p),
)