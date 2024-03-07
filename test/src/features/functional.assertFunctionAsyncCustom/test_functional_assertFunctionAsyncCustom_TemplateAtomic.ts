import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_TemplateAtomic =
  _test_functional_assertFunctionAsync(CustomGuardError)("TemplateAtomic")(
    TemplateAtomic,
  )((p: (input: TemplateAtomic) => Promise<TemplateAtomic>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
