import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_functional_equalsReturn_FunctionalArrayUnion = (): void =>
  _test_functional_equalsReturn("FunctionalArrayUnion")(FunctionalArrayUnion)(
    (p: (input: FunctionalArrayUnion) => FunctionalArrayUnion) =>
      typia.functional.equalsReturn(p),
  );
