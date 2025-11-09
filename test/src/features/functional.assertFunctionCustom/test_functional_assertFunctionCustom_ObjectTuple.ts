import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_assertFunctionCustom_ObjectTuple = (): void =>
  _test_functional_assertFunction(CustomGuardError)("ObjectTuple")(ObjectTuple)(
    (p: (input: ObjectTuple) => ObjectTuple) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
