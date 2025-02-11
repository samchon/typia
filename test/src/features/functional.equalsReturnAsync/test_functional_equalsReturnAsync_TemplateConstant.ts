import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_equalsReturnAsync_TemplateConstant =
  _test_functional_equalsReturnAsync("TemplateConstant")(TemplateConstant)(
    (p: (input: TemplateConstant) => Promise<TemplateConstant>) =>
      typia.functional.equalsReturn(p),
  );
