import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_validateFunctionAsync_TemplateConstant =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("TemplateConstant")(
      TemplateConstant,
    )((p: (input: TemplateConstant) => Promise<TemplateConstant>) =>
      typia.functional.validateFunction(p),
    );
