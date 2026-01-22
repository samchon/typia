import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_assertParametersCustom_TemplateConstant =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)("TemplateConstant")(
      TemplateConstant,
    )((p: (input: TemplateConstant) => TemplateConstant) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
