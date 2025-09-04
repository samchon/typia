import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_functional_equalsParametersAsync_FunctionalPropertyUnion =
  (): Promise<void> =>
    _test_functional_equalsParametersAsync("FunctionalPropertyUnion")(
      FunctionalPropertyUnion,
    )(
      (
        p: (input: FunctionalPropertyUnion) => Promise<FunctionalPropertyUnion>,
      ) => typia.functional.equalsParameters(p),
    );
