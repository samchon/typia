import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_equalsReturnAsync_ArraySimple =
  (): Promise<void> =>
    _test_functional_equalsReturnAsync("ArraySimple")(ArraySimple)(
      (p: (input: ArraySimple) => Promise<ArraySimple>) =>
        typia.functional.equalsReturn(p),
    );
