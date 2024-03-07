import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_validateReturnAsync_TemplateUnion =
  _test_functional_validateReturnAsync("TemplateUnion")(TemplateUnion)(
    (p: (input: TemplateUnion) => Promise<TemplateUnion>) =>
      typia.functional.validateReturn(p),
  );
