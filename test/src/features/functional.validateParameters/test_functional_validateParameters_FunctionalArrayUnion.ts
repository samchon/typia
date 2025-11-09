import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_functional_validateParameters_FunctionalArrayUnion =
  (): void =>
    _test_functional_validateParameters("FunctionalArrayUnion")(
      FunctionalArrayUnion,
    )((p: (input: FunctionalArrayUnion) => FunctionalArrayUnion) =>
      typia.functional.validateParameters(p),
    );
