import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_assertReturnCustom_TemplateAtomic = (): void =>
  _test_functional_assertReturn(CustomGuardError)("TemplateAtomic")(
    TemplateAtomic,
  )((p: (input: TemplateAtomic) => TemplateAtomic) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
