import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_equalsReturnAsync_TemplateUnion =
  _test_functional_equalsReturnAsync("TemplateUnion")(TemplateUnion)(
    (p: (input: TemplateUnion) => Promise<TemplateUnion>) =>
      typia.functional.equalsReturn(p),
  );
