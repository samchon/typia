import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_assertEqualsFunction_TemplateConstant = (): void =>
  _test_functional_assertEqualsFunction(TypeGuardError)("TemplateConstant")(
    TemplateConstant,
  )((p: (input: TemplateConstant) => TemplateConstant) =>
    typia.functional.assertEqualsFunction(p),
  );
