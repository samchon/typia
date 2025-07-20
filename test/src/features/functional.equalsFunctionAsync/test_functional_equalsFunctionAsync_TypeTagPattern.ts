import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_equalsFunctionAsync_TypeTagPattern =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("TypeTagPattern")(TypeTagPattern)(
      (p: (input: TypeTagPattern) => Promise<TypeTagPattern>) =>
        typia.functional.equalsFunction(p),
    );
