import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_validateReturnAsync_TemplateConstant =
  _test_functional_validateReturnAsync("TemplateConstant")(TemplateConstant)(
    (p: (input: TemplateConstant) => Promise<TemplateConstant>) =>
      typia.functional.validateReturn(p),
  );
