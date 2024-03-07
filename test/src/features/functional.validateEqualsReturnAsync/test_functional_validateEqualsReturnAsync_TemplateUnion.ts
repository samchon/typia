import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_validateEqualsReturnAsync_TemplateUnion =
  _test_functional_validateEqualsReturnAsync("TemplateUnion")(TemplateUnion)(
    (p: (input: TemplateUnion) => Promise<TemplateUnion>) =>
      typia.functional.validateEqualsReturn(p),
  );
