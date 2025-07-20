import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_isFunction_TypeTagFormat = (): void =>
  _test_functional_isFunction("TypeTagFormat")(TypeTagFormat)(
    (p: (input: TypeTagFormat) => TypeTagFormat) =>
      typia.functional.isFunction(p),
  );
