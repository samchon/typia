import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_validateEqualsParametersAsync_TemplateUnion =
  _test_functional_validateEqualsParametersAsync("TemplateUnion")(
    TemplateUnion,
  )((p: (input: TemplateUnion) => Promise<TemplateUnion>) =>
    typia.functional.validateEqualsParameters(p),
  );
