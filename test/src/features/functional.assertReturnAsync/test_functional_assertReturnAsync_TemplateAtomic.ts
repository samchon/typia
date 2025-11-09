import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_assertReturnAsync_TemplateAtomic =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("TemplateAtomic")(
      TemplateAtomic,
    )((p: (input: TemplateAtomic) => Promise<TemplateAtomic>) =>
      typia.functional.assertReturn(p),
    );
