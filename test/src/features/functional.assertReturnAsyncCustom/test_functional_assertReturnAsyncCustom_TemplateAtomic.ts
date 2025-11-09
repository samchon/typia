import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_assertReturnAsyncCustom_TemplateAtomic =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)("TemplateAtomic")(
      TemplateAtomic,
    )((p: (input: TemplateAtomic) => Promise<TemplateAtomic>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
