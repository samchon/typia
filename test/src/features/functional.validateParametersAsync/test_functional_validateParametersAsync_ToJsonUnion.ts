import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_validateParametersAsync_ToJsonUnion =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("ToJsonUnion")(ToJsonUnion)(
      (p: (input: ToJsonUnion) => Promise<ToJsonUnion>) =>
        typia.functional.validateParameters(p),
    );
