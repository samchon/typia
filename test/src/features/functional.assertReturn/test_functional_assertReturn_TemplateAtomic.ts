import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_assertReturn_TemplateAtomic = (): void =>
  _test_functional_assertReturn(TypeGuardError)("TemplateAtomic")(
    TemplateAtomic,
  )((p: (input: TemplateAtomic) => TemplateAtomic) =>
    typia.functional.assertReturn(p),
  );
