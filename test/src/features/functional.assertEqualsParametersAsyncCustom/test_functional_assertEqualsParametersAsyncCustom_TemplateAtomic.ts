import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_assertEqualsParametersAsyncCustom_TemplateAtomic =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "TemplateAtomic",
  )(TemplateAtomic)((p: (input: TemplateAtomic) => Promise<TemplateAtomic>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
