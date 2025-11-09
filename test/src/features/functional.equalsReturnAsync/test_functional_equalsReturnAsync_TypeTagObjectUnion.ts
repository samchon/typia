import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_functional_equalsReturnAsync_TypeTagObjectUnion =
  (): Promise<void> =>
    _test_functional_equalsReturnAsync("TypeTagObjectUnion")(
      TypeTagObjectUnion,
    )((p: (input: TypeTagObjectUnion) => Promise<TypeTagObjectUnion>) =>
      typia.functional.equalsReturn(p),
    );
