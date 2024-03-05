import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_functional_validateEqualsParameters_FunctionalValueUnion =
  _test_functional_validateEqualsParameters("FunctionalValueUnion")(
    FunctionalValueUnion,
  )((p: (input: FunctionalValueUnion) => FunctionalValueUnion) =>
    typia.functional.validateEqualsParameters(p),
  );
