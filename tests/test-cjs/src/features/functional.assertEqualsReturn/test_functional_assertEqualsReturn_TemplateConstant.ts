import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_assertEqualsReturn_TemplateConstant = (): void =>
  _test_functional_assertEqualsReturn(TypeGuardError)("TemplateConstant")(
    TemplateConstant,
  )((p: (input: TemplateConstant) => TemplateConstant) =>
    typia.functional.assertEqualsReturn(p),
  );
