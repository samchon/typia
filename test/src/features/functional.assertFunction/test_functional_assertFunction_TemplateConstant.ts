import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_assertFunction_TemplateConstant = (): void =>
  _test_functional_assertFunction(TypeGuardError)("TemplateConstant")(
    TemplateConstant,
  )((p: (input: TemplateConstant) => TemplateConstant) =>
    typia.functional.assertFunction(p),
  );
