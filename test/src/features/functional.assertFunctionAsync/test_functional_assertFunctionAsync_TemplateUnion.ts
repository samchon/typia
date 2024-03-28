import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_assertFunctionAsync_TemplateUnion =
  _test_functional_assertFunctionAsync(TypeGuardError)("TemplateUnion")(
    TemplateUnion,
  )((p: (input: TemplateUnion) => Promise<TemplateUnion>) =>
    typia.functional.assertFunction(p),
  );
