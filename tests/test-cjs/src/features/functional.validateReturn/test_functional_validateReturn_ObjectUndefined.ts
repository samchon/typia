import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_validateReturn_ObjectUndefined = (): void =>
  _test_functional_validateReturn("ObjectUndefined")(ObjectUndefined)(
    (p: (input: ObjectUndefined) => ObjectUndefined) =>
      typia.functional.validateReturn(p),
  );
