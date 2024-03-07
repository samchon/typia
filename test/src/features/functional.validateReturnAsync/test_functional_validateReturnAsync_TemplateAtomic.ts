import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_validateReturnAsync_TemplateAtomic =
  _test_functional_validateReturnAsync("TemplateAtomic")(TemplateAtomic)(
    (p: (input: TemplateAtomic) => Promise<TemplateAtomic>) =>
      typia.functional.validateReturn(p),
  );
