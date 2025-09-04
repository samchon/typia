import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_equalsParametersAsync_TemplateConstant =
  (): Promise<void> =>
    _test_functional_equalsParametersAsync("TemplateConstant")(
      TemplateConstant,
    )((p: (input: TemplateConstant) => Promise<TemplateConstant>) =>
      typia.functional.equalsParameters(p),
    );
