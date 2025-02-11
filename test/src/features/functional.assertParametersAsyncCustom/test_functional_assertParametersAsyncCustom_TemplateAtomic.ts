import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_assertParametersAsyncCustom_TemplateAtomic =
  _test_functional_assertParametersAsync(CustomGuardError)("TemplateAtomic")(
    TemplateAtomic,
  )((p: (input: TemplateAtomic) => Promise<TemplateAtomic>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
