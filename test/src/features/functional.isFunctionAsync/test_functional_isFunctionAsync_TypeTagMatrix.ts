import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_functional_isFunctionAsync_TypeTagMatrix =
  _test_functional_isFunctionAsync("TypeTagMatrix")(TypeTagMatrix)(
    (p: (input: TypeTagMatrix) => Promise<TypeTagMatrix>) =>
      typia.functional.isFunction(p),
  );
