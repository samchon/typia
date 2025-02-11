import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_functional_isParameters_FunctionalPropertyUnion =
  _test_functional_isParameters("FunctionalPropertyUnion")(
    FunctionalPropertyUnion,
  )((p: (input: FunctionalPropertyUnion) => FunctionalPropertyUnion) =>
    typia.functional.isParameters(p),
  );
