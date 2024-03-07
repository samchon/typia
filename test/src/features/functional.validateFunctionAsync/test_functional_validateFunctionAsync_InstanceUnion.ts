import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_functional_validateFunctionAsync_InstanceUnion =
  _test_functional_validateFunctionAsync("InstanceUnion")(InstanceUnion)(
    (p: (input: InstanceUnion) => Promise<InstanceUnion>) =>
      typia.functional.validateFunction(p),
  );
