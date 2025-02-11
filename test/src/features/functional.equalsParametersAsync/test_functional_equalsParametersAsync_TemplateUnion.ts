import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_equalsParametersAsync_TemplateUnion =
  _test_functional_equalsParametersAsync("TemplateUnion")(TemplateUnion)(
    (p: (input: TemplateUnion) => Promise<TemplateUnion>) =>
      typia.functional.equalsParameters(p),
  );
