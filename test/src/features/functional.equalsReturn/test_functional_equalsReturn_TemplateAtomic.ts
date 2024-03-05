import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_equalsReturn_TemplateAtomic =
  _test_functional_equalsReturn("TemplateAtomic")(TemplateAtomic)(
    (p: (input: TemplateAtomic) => TemplateAtomic) =>
      typia.functional.equalsReturn(p),
  );
