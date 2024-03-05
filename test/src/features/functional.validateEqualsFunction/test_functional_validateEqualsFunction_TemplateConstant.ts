import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_validateEqualsFunction_TemplateConstant =
  _test_functional_validateEqualsFunction("TemplateConstant")(TemplateConstant)(
    (p: (input: TemplateConstant) => TemplateConstant) =>
      typia.functional.validateEqualsFunction(p),
  );
