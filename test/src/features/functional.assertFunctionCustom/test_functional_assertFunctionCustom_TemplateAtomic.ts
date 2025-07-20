import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_assertFunctionCustom_TemplateAtomic = (): void =>
  _test_functional_assertFunction(CustomGuardError)("TemplateAtomic")(
    TemplateAtomic,
  )((p: (input: TemplateAtomic) => TemplateAtomic) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
