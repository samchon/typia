import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_validateReturn_TemplateConstant = (): void =>
  _test_functional_validateReturn("TemplateConstant")(TemplateConstant)(
    (p: (input: TemplateConstant) => TemplateConstant) =>
      typia.functional.validateReturn(p),
  );
