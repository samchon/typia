import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_assertFunction_TemplateAtomic =
  _test_functional_assertFunction(TypeGuardError)("TemplateAtomic")(
    TemplateAtomic,
  )((p: (input: TemplateAtomic) => TemplateAtomic) =>
    typia.functional.assertFunction(p),
  );
