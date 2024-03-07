import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_ToJsonUnion =
  _test_functional_assertEqualsFunction(TypeGuardError)("ToJsonUnion")(
    ToJsonUnion,
  )((p: (input: ToJsonUnion) => ToJsonUnion) =>
    typia.functional.assertEqualsFunction(p),
  );
