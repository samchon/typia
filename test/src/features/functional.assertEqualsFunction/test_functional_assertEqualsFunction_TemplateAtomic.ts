import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_TemplateAtomic =
  _test_functional_assertEqualsFunction(TypeGuardError)("TemplateAtomic")(
    TemplateAtomic,
  )((p: (input: TemplateAtomic) => TemplateAtomic) =>
    typia.functional.assertEqualsFunction(p),
  );
