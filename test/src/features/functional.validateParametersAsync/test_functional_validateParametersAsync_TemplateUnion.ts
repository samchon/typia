import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_validateParametersAsync_TemplateUnion =
  _test_functional_validateParametersAsync("TemplateUnion")(TemplateUnion)(
    (p: (input: TemplateUnion) => Promise<TemplateUnion>) =>
      typia.functional.validateParameters(p),
  );
