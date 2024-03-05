import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_validateFunction_TemplateUnion =
  _test_functional_validateFunction("TemplateUnion")(TemplateUnion)(
    (p: (input: TemplateUnion) => TemplateUnion) =>
      typia.functional.validateFunction(p),
  );
