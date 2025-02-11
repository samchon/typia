import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_assertFunctionAsync_TemplateConstant =
  _test_functional_assertFunctionAsync(TypeGuardError)("TemplateConstant")(
    TemplateConstant,
  )((p: (input: TemplateConstant) => Promise<TemplateConstant>) =>
    typia.functional.assertFunction(p),
  );
