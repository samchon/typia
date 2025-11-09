import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_equalsFunction_TemplateConstant = (): void =>
  _test_functional_equalsFunction("TemplateConstant")(TemplateConstant)(
    (p: (input: TemplateConstant) => TemplateConstant) =>
      typia.functional.equalsFunction(p),
  );
