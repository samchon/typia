import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_validateEqualsReturnAsync_TemplateConstant =
  _test_functional_validateEqualsReturnAsync("TemplateConstant")(
    TemplateConstant,
  )((p: (input: TemplateConstant) => Promise<TemplateConstant>) =>
    typia.functional.validateEqualsReturn(p),
  );
