import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_validateReturn_TypeTagPattern =
  _test_functional_validateReturn("TypeTagPattern")(TypeTagPattern)(
    (p: (input: TypeTagPattern) => TypeTagPattern) =>
      typia.functional.validateReturn(p),
  );
