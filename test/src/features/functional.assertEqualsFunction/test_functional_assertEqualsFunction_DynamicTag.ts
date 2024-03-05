import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_assertEqualsFunction_DynamicTag =
  _test_functional_assertEqualsFunction(TypeGuardError)("DynamicTag")(
    DynamicTag,
  )((p: (input: DynamicTag) => DynamicTag) =>
    typia.functional.assertEqualsFunction(p),
  );
