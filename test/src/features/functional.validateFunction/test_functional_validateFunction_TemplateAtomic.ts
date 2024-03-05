import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_validateFunction_TemplateAtomic =
  _test_functional_validateFunction("TemplateAtomic")(TemplateAtomic)(
    (p: (input: TemplateAtomic) => TemplateAtomic) =>
      typia.functional.validateFunction(p),
  );
