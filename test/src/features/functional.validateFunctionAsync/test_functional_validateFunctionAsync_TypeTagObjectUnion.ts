import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_functional_validateFunctionAsync_TypeTagObjectUnion =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("TypeTagObjectUnion")(
      TypeTagObjectUnion,
    )((p: (input: TypeTagObjectUnion) => Promise<TypeTagObjectUnion>) =>
      typia.functional.validateFunction(p),
    );
