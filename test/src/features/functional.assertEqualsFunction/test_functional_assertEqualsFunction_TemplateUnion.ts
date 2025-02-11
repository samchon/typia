import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_assertEqualsFunction_TemplateUnion =
  _test_functional_assertEqualsFunction(TypeGuardError)("TemplateUnion")(
    TemplateUnion,
  )((p: (input: TemplateUnion) => TemplateUnion) =>
    typia.functional.assertEqualsFunction(p),
  );
