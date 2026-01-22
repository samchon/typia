import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_validateEqualsFunctionAsync_TemplateAtomic =
  (): Promise<void> =>
    _test_functional_validateEqualsFunctionAsync("TemplateAtomic")(
      TemplateAtomic,
    )((p: (input: TemplateAtomic) => Promise<TemplateAtomic>) =>
      typia.functional.validateEqualsFunction(p),
    );
