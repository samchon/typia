import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_equalsFunctionAsync_TypeTagLength =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("TypeTagLength")(TypeTagLength)(
      (p: (input: TypeTagLength) => Promise<TypeTagLength>) =>
        typia.functional.equalsFunction(p),
    );
