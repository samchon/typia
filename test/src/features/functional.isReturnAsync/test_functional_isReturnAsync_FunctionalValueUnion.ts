import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_functional_isReturnAsync_FunctionalValueUnion =
  _test_functional_isReturnAsync("FunctionalValueUnion")(FunctionalValueUnion)(
    (p: (input: FunctionalValueUnion) => Promise<FunctionalValueUnion>) =>
      typia.functional.isReturn(p),
  );
