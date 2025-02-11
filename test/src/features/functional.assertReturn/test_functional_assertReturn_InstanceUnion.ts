import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_functional_assertReturn_InstanceUnion =
  _test_functional_assertReturn(TypeGuardError)("InstanceUnion")(InstanceUnion)(
    (p: (input: InstanceUnion) => InstanceUnion) =>
      typia.functional.assertReturn(p),
  );
