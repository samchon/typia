import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_isParameters_TemplateConstant = (): void =>
  _test_functional_isParameters("TemplateConstant")(TemplateConstant)(
    (p: (input: TemplateConstant) => TemplateConstant) =>
      typia.functional.isParameters(p),
  );
