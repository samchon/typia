import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_isFunctionAsync_TemplateAtomic =
  _test_functional_isFunctionAsync("TemplateAtomic")(TemplateAtomic)(
    (p: (input: TemplateAtomic) => Promise<TemplateAtomic>) =>
      typia.functional.isFunction(p),
  );
