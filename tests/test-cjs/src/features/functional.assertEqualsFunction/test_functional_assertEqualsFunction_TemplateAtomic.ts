import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_assertEqualsFunction_TemplateAtomic = (): void =>
  _test_functional_assertEqualsFunction(TypeGuardError)("TemplateAtomic")(
    TemplateAtomic,
  )((p: (input: TemplateAtomic) => TemplateAtomic) =>
    typia.functional.assertEqualsFunction(p),
  );
