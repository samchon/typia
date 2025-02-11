import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_assertEqualsParametersAsync_TemplateConstant =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "TemplateConstant",
  )(TemplateConstant)(
    (p: (input: TemplateConstant) => Promise<TemplateConstant>) =>
      typia.functional.assertEqualsParameters(p),
  );
