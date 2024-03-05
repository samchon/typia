import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_functional_equalsParameters_FunctionalValueUnion =
  _test_functional_equalsParameters("FunctionalValueUnion")(
    FunctionalValueUnion,
  )((p: (input: FunctionalValueUnion) => FunctionalValueUnion) =>
    typia.functional.equalsParameters(p),
  );
