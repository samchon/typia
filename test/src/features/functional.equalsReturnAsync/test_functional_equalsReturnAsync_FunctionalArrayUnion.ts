import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_functional_equalsReturnAsync_FunctionalArrayUnion =
  (): Promise<void> =>
    _test_functional_equalsReturnAsync("FunctionalArrayUnion")(
      FunctionalArrayUnion,
    )((p: (input: FunctionalArrayUnion) => Promise<FunctionalArrayUnion>) =>
      typia.functional.equalsReturn(p),
    );
