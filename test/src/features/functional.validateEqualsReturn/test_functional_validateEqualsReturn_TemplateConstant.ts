import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_validateEqualsReturn_TemplateConstant =
  _test_functional_validateEqualsReturn("TemplateConstant")(TemplateConstant)(
    (p: (input: TemplateConstant) => TemplateConstant) =>
      typia.functional.validateEqualsReturn(p),
  );
