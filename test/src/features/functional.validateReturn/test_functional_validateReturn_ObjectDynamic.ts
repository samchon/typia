import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_functional_validateReturn_ObjectDynamic =
  _test_functional_validateReturn("ObjectDynamic")(ObjectDynamic)(
    (p: (input: ObjectDynamic) => ObjectDynamic) =>
      typia.functional.validateReturn(p),
  );
