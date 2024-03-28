import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_assertEqualsReturnCustom_TemplateAtomic =
  _test_functional_assertEqualsReturn(CustomGuardError)("TemplateAtomic")(
    TemplateAtomic,
  )((p: (input: TemplateAtomic) => TemplateAtomic) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
