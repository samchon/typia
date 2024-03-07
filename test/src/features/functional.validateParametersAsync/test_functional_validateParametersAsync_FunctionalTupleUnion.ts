import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_functional_validateParametersAsync_FunctionalTupleUnion =
  _test_functional_validateParametersAsync("FunctionalTupleUnion")(
    FunctionalTupleUnion,
  )((p: (input: FunctionalTupleUnion) => Promise<FunctionalTupleUnion>) =>
    typia.functional.validateParameters(p),
  );
