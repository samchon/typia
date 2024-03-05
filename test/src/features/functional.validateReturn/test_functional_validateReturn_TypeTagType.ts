import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_validateReturn_TypeTagType =
  _test_functional_validateReturn("TypeTagType")(TypeTagType)(
    (p: (input: TypeTagType) => TypeTagType) =>
      typia.functional.validateReturn(p),
  );
