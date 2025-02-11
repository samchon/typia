import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_assertFunctionAsyncCustom_TemplateAtomic =
  _test_functional_assertFunctionAsync(CustomGuardError)("TemplateAtomic")(
    TemplateAtomic,
  )((p: (input: TemplateAtomic) => Promise<TemplateAtomic>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
