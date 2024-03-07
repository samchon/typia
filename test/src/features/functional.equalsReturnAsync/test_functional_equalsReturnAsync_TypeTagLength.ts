import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_equalsReturnAsync_TypeTagLength =
  _test_functional_equalsReturnAsync("TypeTagLength")(TypeTagLength)(
    (p: (input: TypeTagLength) => Promise<TypeTagLength>) =>
      typia.functional.equalsReturn(p),
  );
