import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_equalsFunctionAsync_TypeTagNaN =
  _test_functional_equalsFunctionAsync("TypeTagNaN")(TypeTagNaN)(
    (p: (input: TypeTagNaN) => Promise<TypeTagNaN>) =>
      typia.functional.equalsFunction(p),
  );
