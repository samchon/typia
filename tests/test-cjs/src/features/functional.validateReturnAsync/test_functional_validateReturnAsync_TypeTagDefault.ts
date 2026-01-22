import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_validateReturnAsync_TypeTagDefault =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("TypeTagDefault")(TypeTagDefault)(
      (p: (input: TypeTagDefault) => Promise<TypeTagDefault>) =>
        typia.functional.validateReturn(p),
    );
