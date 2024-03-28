import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_assertFunction_TemplateUnion =
  _test_functional_assertFunction(TypeGuardError)("TemplateUnion")(
    TemplateUnion,
  )((p: (input: TemplateUnion) => TemplateUnion) =>
    typia.functional.assertFunction(p),
  );
