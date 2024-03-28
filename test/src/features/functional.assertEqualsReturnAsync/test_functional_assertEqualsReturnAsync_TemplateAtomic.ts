import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_assertEqualsReturnAsync_TemplateAtomic =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("TemplateAtomic")(
    TemplateAtomic,
  )((p: (input: TemplateAtomic) => Promise<TemplateAtomic>) =>
    typia.functional.assertEqualsReturn(p),
  );
