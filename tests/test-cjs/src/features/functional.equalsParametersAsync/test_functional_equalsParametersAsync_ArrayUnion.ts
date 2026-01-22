import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_equalsParametersAsync_ArrayUnion =
  (): Promise<void> =>
    _test_functional_equalsParametersAsync("ArrayUnion")(ArrayUnion)(
      (p: (input: ArrayUnion) => Promise<ArrayUnion>) =>
        typia.functional.equalsParameters(p),
    );
