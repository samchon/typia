import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_assertReturnCustom_TemplateConstant =
  _test_functional_assertReturn(CustomGuardError)("TemplateConstant")(
    TemplateConstant,
  )((p: (input: TemplateConstant) => TemplateConstant) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
