import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_equalsReturnAsync_TypeTagRange =
  (): Promise<void> =>
    _test_functional_equalsReturnAsync("TypeTagRange")(TypeTagRange)(
      (p: (input: TypeTagRange) => Promise<TypeTagRange>) =>
        typia.functional.equalsReturn(p),
    );
