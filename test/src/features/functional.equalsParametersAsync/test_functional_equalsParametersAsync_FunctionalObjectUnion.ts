import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_functional_equalsParametersAsync_FunctionalObjectUnion =
  _test_functional_equalsParametersAsync("FunctionalObjectUnion")(
    FunctionalObjectUnion,
  )((p: (input: FunctionalObjectUnion) => Promise<FunctionalObjectUnion>) =>
    typia.functional.equalsParameters(p),
  );
