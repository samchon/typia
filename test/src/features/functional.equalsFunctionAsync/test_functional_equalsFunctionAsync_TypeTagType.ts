import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_equalsFunctionAsync_TypeTagType =
  _test_functional_equalsFunctionAsync("TypeTagType")(TypeTagType)(
    (p: (input: TypeTagType) => Promise<TypeTagType>) =>
      typia.functional.equalsFunction(p),
  );
