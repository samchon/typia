import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_equalsReturnAsync_TypeTagNaN =
  _test_functional_equalsReturnAsync("TypeTagNaN")(TypeTagNaN)(
    (p: (input: TypeTagNaN) => Promise<TypeTagNaN>) =>
      typia.functional.equalsReturn(p),
  );
