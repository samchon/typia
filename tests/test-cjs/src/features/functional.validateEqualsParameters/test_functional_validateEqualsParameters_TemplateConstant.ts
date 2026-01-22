import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_validateEqualsParameters_TemplateConstant =
  (): void =>
    _test_functional_validateEqualsParameters("TemplateConstant")(
      TemplateConstant,
    )((p: (input: TemplateConstant) => TemplateConstant) =>
      typia.functional.validateEqualsParameters(p),
    );
