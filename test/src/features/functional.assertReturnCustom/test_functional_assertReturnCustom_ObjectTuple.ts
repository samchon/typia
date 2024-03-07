import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectTuple } from "../../structures/ObjectTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_ObjectTuple =
  _test_functional_assertReturn(CustomGuardError)("ObjectTuple")(ObjectTuple)(
    (p: (input: ObjectTuple) => ObjectTuple) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
