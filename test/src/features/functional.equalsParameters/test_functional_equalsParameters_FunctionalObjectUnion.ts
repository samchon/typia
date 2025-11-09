import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_functional_equalsParameters_FunctionalObjectUnion =
  (): void =>
    _test_functional_equalsParameters("FunctionalObjectUnion")(
      FunctionalObjectUnion,
    )((p: (input: FunctionalObjectUnion) => FunctionalObjectUnion) =>
      typia.functional.equalsParameters(p),
    );
