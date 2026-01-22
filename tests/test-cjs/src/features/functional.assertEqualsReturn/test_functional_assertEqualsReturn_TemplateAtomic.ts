import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_assertEqualsReturn_TemplateAtomic = (): void =>
  _test_functional_assertEqualsReturn(TypeGuardError)("TemplateAtomic")(
    TemplateAtomic,
  )((p: (input: TemplateAtomic) => TemplateAtomic) =>
    typia.functional.assertEqualsReturn(p),
  );
