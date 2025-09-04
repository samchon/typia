import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_assertEqualsReturn_DynamicComposite = (): void =>
  _test_functional_assertEqualsReturn(TypeGuardError)("DynamicComposite")(
    DynamicComposite,
  )((p: (input: DynamicComposite) => DynamicComposite) =>
    typia.functional.assertEqualsReturn(p),
  );
