import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_validateReturn_ObjectTuple =
  _test_functional_validateReturn("ObjectTuple")(ObjectTuple)(
    (p: (input: ObjectTuple) => ObjectTuple) =>
      typia.functional.validateReturn(p),
  );
