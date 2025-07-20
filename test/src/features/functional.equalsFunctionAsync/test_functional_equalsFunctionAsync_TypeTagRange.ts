import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_equalsFunctionAsync_TypeTagRange =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("TypeTagRange")(TypeTagRange)(
      (p: (input: TypeTagRange) => Promise<TypeTagRange>) =>
        typia.functional.equalsFunction(p),
    );
