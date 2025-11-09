import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_isFunction_TemplateConstant = (): void =>
  _test_functional_isFunction("TemplateConstant")(TemplateConstant)(
    (p: (input: TemplateConstant) => TemplateConstant) =>
      typia.functional.isFunction(p),
  );
