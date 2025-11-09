import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_equalsFunction_TemplateAtomic = (): void =>
  _test_functional_equalsFunction("TemplateAtomic")(TemplateAtomic)(
    (p: (input: TemplateAtomic) => TemplateAtomic) =>
      typia.functional.equalsFunction(p),
  );
