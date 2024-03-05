import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_validateReturn_ObjectRequired =
  _test_functional_validateReturn("ObjectRequired")(ObjectRequired)(
    (p: (input: ObjectRequired) => ObjectRequired) =>
      typia.functional.validateReturn(p),
  );
