import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_assertEqualsReturnCustom_TemplateConstant =
  _test_functional_assertEqualsReturn(CustomGuardError)("TemplateConstant")(
    TemplateConstant,
  )((p: (input: TemplateConstant) => TemplateConstant) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
