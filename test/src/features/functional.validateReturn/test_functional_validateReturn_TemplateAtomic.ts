import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_validateReturn_TemplateAtomic = (): void =>
  _test_functional_validateReturn("TemplateAtomic")(TemplateAtomic)(
    (p: (input: TemplateAtomic) => TemplateAtomic) =>
      typia.functional.validateReturn(p),
  );
