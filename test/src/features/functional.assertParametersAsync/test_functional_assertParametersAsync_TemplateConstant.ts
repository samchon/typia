import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TemplateConstant } from "../../structures/TemplateConstant";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_TemplateConstant =
  _test_functional_assertParametersAsync(TypeGuardError)("TemplateConstant")(
    TemplateConstant,
  )((p: (input: TemplateConstant) => Promise<TemplateConstant>) =>
    typia.functional.assertParameters(p),
  );
