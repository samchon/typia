import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_assertEqualsFunctionCustom_TemplateConstant =
  _test_functional_assertEqualsFunction(CustomGuardError)("TemplateConstant")(
    TemplateConstant,
  )((p: (input: TemplateConstant) => TemplateConstant) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
