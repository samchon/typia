import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { DynamicTag } from "../../structures/DynamicTag";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParameters_DynamicTag =
  _test_functional_assertEqualsParameters(TypeGuardError)("DynamicTag")(
    DynamicTag,
  )((p: (input: DynamicTag) => DynamicTag) =>
    typia.functional.assertEqualsParameters(p),
  );
