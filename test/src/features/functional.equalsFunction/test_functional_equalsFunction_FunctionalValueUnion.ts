import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_functional_equalsFunction_FunctionalValueUnion = (): void =>
  _test_functional_equalsFunction("FunctionalValueUnion")(FunctionalValueUnion)(
    (p: (input: FunctionalValueUnion) => FunctionalValueUnion) =>
      typia.functional.equalsFunction(p),
  );
