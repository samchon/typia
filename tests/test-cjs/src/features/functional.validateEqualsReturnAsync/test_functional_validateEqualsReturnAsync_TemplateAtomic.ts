import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_validateEqualsReturnAsync_TemplateAtomic =
  (): Promise<void> =>
    _test_functional_validateEqualsReturnAsync("TemplateAtomic")(
      TemplateAtomic,
    )((p: (input: TemplateAtomic) => Promise<TemplateAtomic>) =>
      typia.functional.validateEqualsReturn(p),
    );
