import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_assertEqualsReturn_TemplateUnion =
  _test_functional_assertEqualsReturn(TypeGuardError)("TemplateUnion")(
    TemplateUnion,
  )((p: (input: TemplateUnion) => TemplateUnion) =>
    typia.functional.assertEqualsReturn(p),
  );
