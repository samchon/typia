import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_validateEqualsFunctionAsync_TemplateConstant =
  _test_functional_validateEqualsFunctionAsync("TemplateConstant")(
    TemplateConstant,
  )((p: (input: TemplateConstant) => Promise<TemplateConstant>) =>
    typia.functional.validateEqualsFunction(p),
  );
