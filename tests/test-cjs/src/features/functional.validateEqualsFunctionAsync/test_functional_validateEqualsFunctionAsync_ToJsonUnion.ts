import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_validateEqualsFunctionAsync_ToJsonUnion =
  (): Promise<void> =>
    _test_functional_validateEqualsFunctionAsync("ToJsonUnion")(ToJsonUnion)(
      (p: (input: ToJsonUnion) => Promise<ToJsonUnion>) =>
        typia.functional.validateEqualsFunction(p),
    );
