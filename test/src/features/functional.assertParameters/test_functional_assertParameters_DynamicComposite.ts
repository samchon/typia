import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_assertParameters_DynamicComposite = (): void =>
  _test_functional_assertParameters(TypeGuardError)("DynamicComposite")(
    DynamicComposite,
  )((p: (input: DynamicComposite) => DynamicComposite) =>
    typia.functional.assertParameters(p),
  );
