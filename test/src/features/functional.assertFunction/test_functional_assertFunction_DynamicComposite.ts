import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_assertFunction_DynamicComposite =
  _test_functional_assertFunction(TypeGuardError)("DynamicComposite")(
    DynamicComposite,
  )((p: (input: DynamicComposite) => DynamicComposite) =>
    typia.functional.assertFunction(p),
  );
