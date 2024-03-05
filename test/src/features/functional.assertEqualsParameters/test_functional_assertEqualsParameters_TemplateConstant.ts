import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_assertEqualsParameters_TemplateConstant =
  _test_functional_assertEqualsParameters(TypeGuardError)("TemplateConstant")(
    TemplateConstant,
  )((p: (input: TemplateConstant) => TemplateConstant) =>
    typia.functional.assertEqualsParameters(p),
  );
