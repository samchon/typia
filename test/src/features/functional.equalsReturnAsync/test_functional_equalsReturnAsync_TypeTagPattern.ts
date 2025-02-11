import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_equalsReturnAsync_TypeTagPattern =
  _test_functional_equalsReturnAsync("TypeTagPattern")(TypeTagPattern)(
    (p: (input: TypeTagPattern) => Promise<TypeTagPattern>) =>
      typia.functional.equalsReturn(p),
  );
