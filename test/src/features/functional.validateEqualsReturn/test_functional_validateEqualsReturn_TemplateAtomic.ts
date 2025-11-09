import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_validateEqualsReturn_TemplateAtomic = (): void =>
  _test_functional_validateEqualsReturn("TemplateAtomic")(TemplateAtomic)(
    (p: (input: TemplateAtomic) => TemplateAtomic) =>
      typia.functional.validateEqualsReturn(p),
  );
