import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_TemplateAtomic = _test_functional_assertReturnAsync(CustomGuardError)(
  "TemplateAtomic"
)(TemplateAtomic)(
  (p: (input: TemplateAtomic) => Promise<TemplateAtomic>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)