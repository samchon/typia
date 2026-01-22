import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_isFunctionAsync_TypeTagType = (): Promise<void> =>
  _test_functional_isFunctionAsync("TypeTagType")(TypeTagType)(
    (p: (input: TypeTagType) => Promise<TypeTagType>) =>
      typia.functional.isFunction(p),
  );
