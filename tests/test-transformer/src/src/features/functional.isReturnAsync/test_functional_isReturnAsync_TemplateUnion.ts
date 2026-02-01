import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_isReturnAsync_TemplateUnion = (): Promise<void> => _test_functional_isReturnAsync(
  "TemplateUnion"
)(TemplateUnion)(
  (p: (input: TemplateUnion) => Promise<TemplateUnion>) =>
    typia.functional.isReturn(p),
)