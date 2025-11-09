import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_validateEqualsReturnAsync_TypeTagType =
  (): Promise<void> =>
    _test_functional_validateEqualsReturnAsync("TypeTagType")(TypeTagType)(
      (p: (input: TypeTagType) => Promise<TypeTagType>) =>
        typia.functional.validateEqualsReturn(p),
    );
