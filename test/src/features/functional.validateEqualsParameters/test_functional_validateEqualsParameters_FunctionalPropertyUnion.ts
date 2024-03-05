import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_functional_validateEqualsParameters_FunctionalPropertyUnion =
  _test_functional_validateEqualsParameters("FunctionalPropertyUnion")(
    FunctionalPropertyUnion,
  )((p: (input: FunctionalPropertyUnion) => FunctionalPropertyUnion) =>
    typia.functional.validateEqualsParameters(p),
  );
