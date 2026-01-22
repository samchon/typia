import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_assertReturn_ObjectTuple = (): void =>
  _test_functional_assertReturn(TypeGuardError)("ObjectTuple")(ObjectTuple)(
    (p: (input: ObjectTuple) => ObjectTuple) =>
      typia.functional.assertReturn(p),
  );
