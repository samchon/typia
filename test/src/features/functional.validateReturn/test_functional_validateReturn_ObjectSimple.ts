import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_validateReturn_ObjectSimple =
  _test_functional_validateReturn("ObjectSimple")(ObjectSimple)(
    (p: (input: ObjectSimple) => ObjectSimple) =>
      typia.functional.validateReturn(p),
  );
