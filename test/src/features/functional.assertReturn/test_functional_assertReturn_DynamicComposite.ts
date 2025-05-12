import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_assertReturn_DynamicComposite =
  _test_functional_assertReturn(TypeGuardError)("DynamicComposite")(
    DynamicComposite,
  )((p: (input: DynamicComposite) => DynamicComposite) =>
    typia.functional.assertReturn(p),
  );
