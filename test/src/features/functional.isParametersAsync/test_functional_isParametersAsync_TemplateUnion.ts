import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_isParametersAsync_TemplateUnion =
  _test_functional_isParametersAsync("TemplateUnion")(TemplateUnion)(
    (p: (input: TemplateUnion) => Promise<TemplateUnion>) =>
      typia.functional.isParameters(p),
  );
