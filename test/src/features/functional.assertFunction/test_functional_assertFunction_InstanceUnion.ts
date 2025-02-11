import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_functional_assertFunction_InstanceUnion =
  _test_functional_assertFunction(TypeGuardError)("InstanceUnion")(
    InstanceUnion,
  )((p: (input: InstanceUnion) => InstanceUnion) =>
    typia.functional.assertFunction(p),
  );
