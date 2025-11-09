import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_functional_equalsFunction_FunctionalObjectUnion = (): void =>
  _test_functional_equalsFunction("FunctionalObjectUnion")(
    FunctionalObjectUnion,
  )((p: (input: FunctionalObjectUnion) => FunctionalObjectUnion) =>
    typia.functional.equalsFunction(p),
  );
