import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_assertEqualsReturnAsyncCustom_TemplateAtomic =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(CustomGuardError)(
      "TemplateAtomic",
    )(TemplateAtomic)((p: (input: TemplateAtomic) => Promise<TemplateAtomic>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
