import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_assertEqualsFunction_DynamicComposite =
  _test_functional_assertEqualsFunction(TypeGuardError)("DynamicComposite")(
    DynamicComposite,
  )((p: (input: DynamicComposite) => DynamicComposite) =>
    typia.functional.assertEqualsFunction(p),
  );
