import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_functional_equalsFunctionAsync_FunctionalValueUnion =
  _test_functional_equalsFunctionAsync("FunctionalValueUnion")(
    FunctionalValueUnion,
  )((p: (input: FunctionalValueUnion) => Promise<FunctionalValueUnion>) =>
    typia.functional.equalsFunction(p),
  );
