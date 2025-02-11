import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_equalsFunctionAsync_TemplateUnion =
  _test_functional_equalsFunctionAsync("TemplateUnion")(TemplateUnion)(
    (p: (input: TemplateUnion) => Promise<TemplateUnion>) =>
      typia.functional.equalsFunction(p),
  );
