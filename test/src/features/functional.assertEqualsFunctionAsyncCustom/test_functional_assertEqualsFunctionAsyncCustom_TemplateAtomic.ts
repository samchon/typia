import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_assertEqualsFunctionAsyncCustom_TemplateAtomic =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "TemplateAtomic",
  )(TemplateAtomic)((p: (input: TemplateAtomic) => Promise<TemplateAtomic>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
