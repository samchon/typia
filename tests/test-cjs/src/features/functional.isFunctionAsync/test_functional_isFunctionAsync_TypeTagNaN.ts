import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_isFunctionAsync_TypeTagNaN = (): Promise<void> =>
  _test_functional_isFunctionAsync("TypeTagNaN")(TypeTagNaN)(
    (p: (input: TypeTagNaN) => Promise<TypeTagNaN>) =>
      typia.functional.isFunction(p),
  );
