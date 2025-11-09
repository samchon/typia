import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_isFunctionAsync_TypeTagPattern =
  (): Promise<void> =>
    _test_functional_isFunctionAsync("TypeTagPattern")(TypeTagPattern)(
      (p: (input: TypeTagPattern) => Promise<TypeTagPattern>) =>
        typia.functional.isFunction(p),
    );
