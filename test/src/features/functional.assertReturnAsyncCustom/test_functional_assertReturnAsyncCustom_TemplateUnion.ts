import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TemplateUnion } from "../../structures/TemplateUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_TemplateUnion = (): Promise<void> => _test_functional_assertReturnAsync(CustomGuardError)(
  "TemplateUnion"
)(TemplateUnion)(
  (p: (input: TemplateUnion) => Promise<TemplateUnion>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)