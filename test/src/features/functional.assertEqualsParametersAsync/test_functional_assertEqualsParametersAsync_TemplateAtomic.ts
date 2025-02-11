import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_assertEqualsParametersAsync_TemplateAtomic =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "TemplateAtomic",
  )(TemplateAtomic)((p: (input: TemplateAtomic) => Promise<TemplateAtomic>) =>
    typia.functional.assertEqualsParameters(p),
  );
