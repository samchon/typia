import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_validateEqualsParametersAsync_TemplateConstant =
  _test_functional_validateEqualsParametersAsync("TemplateConstant")(
    TemplateConstant,
  )((p: (input: TemplateConstant) => Promise<TemplateConstant>) =>
    typia.functional.validateEqualsParameters(p),
  );
