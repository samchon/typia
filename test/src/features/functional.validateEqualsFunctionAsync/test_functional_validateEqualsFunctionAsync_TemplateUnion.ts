import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_validateEqualsFunctionAsync_TemplateUnion = _test_functional_validateEqualsFunctionAsync(
  "TemplateUnion"
)(TemplateUnion)(
  (p: (input: TemplateUnion) => Promise<TemplateUnion>) =>
    typia.functional.validateEqualsFunction(p),
)