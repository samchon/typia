import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_assertEqualsParameters_DynamicComposite =
  _test_functional_assertEqualsParameters(TypeGuardError)("DynamicComposite")(
    DynamicComposite,
  )((p: (input: DynamicComposite) => DynamicComposite) =>
    typia.functional.assertEqualsParameters(p),
  );
