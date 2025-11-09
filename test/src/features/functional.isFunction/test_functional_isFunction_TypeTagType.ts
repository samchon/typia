import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_isFunction_TypeTagType = (): void =>
  _test_functional_isFunction("TypeTagType")(TypeTagType)(
    (p: (input: TypeTagType) => TypeTagType) => typia.functional.isFunction(p),
  );
