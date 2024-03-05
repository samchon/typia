import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_validateReturn_ClassGetter =
  _test_functional_validateReturn("ClassGetter")(ClassGetter)(
    (p: (input: ClassGetter) => ClassGetter) =>
      typia.functional.validateReturn(p),
  );
