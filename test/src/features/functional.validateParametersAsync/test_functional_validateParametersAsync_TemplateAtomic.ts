import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_validateParametersAsync_TemplateAtomic =
  _test_functional_validateParametersAsync("TemplateAtomic")(TemplateAtomic)(
    (p: (input: TemplateAtomic) => Promise<TemplateAtomic>) =>
      typia.functional.validateParameters(p),
  );
