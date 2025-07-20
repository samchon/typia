import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_validateParameters_TemplateConstant = (): void =>
  _test_functional_validateParameters("TemplateConstant")(TemplateConstant)(
    (p: (input: TemplateConstant) => TemplateConstant) =>
      typia.functional.validateParameters(p),
  );
