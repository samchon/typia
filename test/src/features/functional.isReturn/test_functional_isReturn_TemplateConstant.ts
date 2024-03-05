import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_isReturn_TemplateConstant =
  _test_functional_isReturn("TemplateConstant")(TemplateConstant)(
    (p: (input: TemplateConstant) => TemplateConstant) =>
      typia.functional.isReturn(p),
  );
