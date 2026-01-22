import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_assertParameters_TemplateAtomic = (): void =>
  _test_functional_assertParameters(TypeGuardError)("TemplateAtomic")(
    TemplateAtomic,
  )((p: (input: TemplateAtomic) => TemplateAtomic) =>
    typia.functional.assertParameters(p),
  );
