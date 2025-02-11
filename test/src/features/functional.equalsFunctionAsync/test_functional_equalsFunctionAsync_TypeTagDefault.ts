import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_equalsFunctionAsync_TypeTagDefault =
  _test_functional_equalsFunctionAsync("TypeTagDefault")(TypeTagDefault)(
    (p: (input: TypeTagDefault) => Promise<TypeTagDefault>) =>
      typia.functional.equalsFunction(p),
  );
