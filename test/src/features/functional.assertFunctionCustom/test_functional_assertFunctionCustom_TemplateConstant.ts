import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TemplateConstant } from "../../structures/TemplateConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_TemplateConstant =
  _test_functional_assertFunction(CustomGuardError)("TemplateConstant")(
    TemplateConstant,
  )((p: (input: TemplateConstant) => TemplateConstant) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
