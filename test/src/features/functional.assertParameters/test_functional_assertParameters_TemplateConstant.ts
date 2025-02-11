import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_assertParameters_TemplateConstant =
  _test_functional_assertParameters(TypeGuardError)("TemplateConstant")(
    TemplateConstant,
  )((p: (input: TemplateConstant) => TemplateConstant) =>
    typia.functional.assertParameters(p),
  );
