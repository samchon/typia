import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_functional_validateReturnAsync_TypeTagObjectUnion =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("TypeTagObjectUnion")(
      TypeTagObjectUnion,
    )((p: (input: TypeTagObjectUnion) => Promise<TypeTagObjectUnion>) =>
      typia.functional.validateReturn(p),
    );
