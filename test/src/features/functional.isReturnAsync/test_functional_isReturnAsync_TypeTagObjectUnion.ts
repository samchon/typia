import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_functional_isReturnAsync_TypeTagObjectUnion =
  (): Promise<void> =>
    _test_functional_isReturnAsync("TypeTagObjectUnion")(TypeTagObjectUnion)(
      (p: (input: TypeTagObjectUnion) => Promise<TypeTagObjectUnion>) =>
        typia.functional.isReturn(p),
    );
