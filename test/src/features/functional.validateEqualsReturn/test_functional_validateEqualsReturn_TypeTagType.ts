import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_validateEqualsReturn_TypeTagType =
  _test_functional_validateEqualsReturn("TypeTagType")(TypeTagType)(
    (p: (input: TypeTagType) => TypeTagType) =>
      typia.functional.validateEqualsReturn(p),
  );
