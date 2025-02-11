import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_isFunctionAsync_TypeTagDefault =
  _test_functional_isFunctionAsync("TypeTagDefault")(TypeTagDefault)(
    (p: (input: TypeTagDefault) => Promise<TypeTagDefault>) =>
      typia.functional.isFunction(p),
  );
