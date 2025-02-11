import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_functional_isParametersAsync_InstanceUnion =
  _test_functional_isParametersAsync("InstanceUnion")(InstanceUnion)(
    (p: (input: InstanceUnion) => Promise<InstanceUnion>) =>
      typia.functional.isParameters(p),
  );
