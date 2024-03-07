import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_validateEqualsFunctionAsync_TypeTagType =
  _test_functional_validateEqualsFunctionAsync("TypeTagType")(TypeTagType)(
    (p: (input: TypeTagType) => Promise<TypeTagType>) =>
      typia.functional.validateEqualsFunction(p),
  );
