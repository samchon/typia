import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_assertReturn_TemplateConstant = (): void =>
  _test_functional_assertReturn(TypeGuardError)("TemplateConstant")(
    TemplateConstant,
  )((p: (input: TemplateConstant) => TemplateConstant) =>
    typia.functional.assertReturn(p),
  );
