import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_isParametersAsync_TemplateConstant =
  _test_functional_isParametersAsync("TemplateConstant")(TemplateConstant)(
    (p: (input: TemplateConstant) => Promise<TemplateConstant>) =>
      typia.functional.isParameters(p),
  );
