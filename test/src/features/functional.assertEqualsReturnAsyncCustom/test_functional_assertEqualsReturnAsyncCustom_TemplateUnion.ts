import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_assertEqualsReturnAsyncCustom_TemplateUnion =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(CustomGuardError)("TemplateUnion")(
      TemplateUnion,
    )((p: (input: TemplateUnion) => Promise<TemplateUnion>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
