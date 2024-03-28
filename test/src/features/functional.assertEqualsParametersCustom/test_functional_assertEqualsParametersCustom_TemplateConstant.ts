import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_assertEqualsParametersCustom_TemplateConstant =
  _test_functional_assertEqualsParameters(CustomGuardError)("TemplateConstant")(
    TemplateConstant,
  )((p: (input: TemplateConstant) => TemplateConstant) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
