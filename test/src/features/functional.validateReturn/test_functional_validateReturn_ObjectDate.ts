import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_functional_validateReturn_ObjectDate =
  _test_functional_validateReturn("ObjectDate")(ObjectDate)(
    (p: (input: ObjectDate) => ObjectDate) =>
      typia.functional.validateReturn(p),
  );
