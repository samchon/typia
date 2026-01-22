import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_functional_validateParameters_FunctionalValueUnion =
  (): void =>
    _test_functional_validateParameters("FunctionalValueUnion")(
      FunctionalValueUnion,
    )((p: (input: FunctionalValueUnion) => FunctionalValueUnion) =>
      typia.functional.validateParameters(p),
    );
