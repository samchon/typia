import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { InstanceUnion } from "../../structures/InstanceUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_InstanceUnion =
  _test_functional_assertParameters(TypeGuardError)("InstanceUnion")(
    InstanceUnion,
  )((p: (input: InstanceUnion) => InstanceUnion) =>
    typia.functional.assertParameters(p),
  );
