import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_validateParametersAsync_ArrayUnion =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("ArrayUnion")(ArrayUnion)(
      (p: (input: ArrayUnion) => Promise<ArrayUnion>) =>
        typia.functional.validateParameters(p),
    );
