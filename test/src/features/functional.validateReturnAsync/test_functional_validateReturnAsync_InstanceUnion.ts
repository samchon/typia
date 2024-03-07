import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_functional_validateReturnAsync_InstanceUnion =
  _test_functional_validateReturnAsync("InstanceUnion")(InstanceUnion)(
    (p: (input: InstanceUnion) => Promise<InstanceUnion>) =>
      typia.functional.validateReturn(p),
  );
