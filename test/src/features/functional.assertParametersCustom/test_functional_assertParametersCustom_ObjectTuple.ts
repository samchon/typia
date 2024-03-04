import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_assertParametersCustom_ObjectTuple =
  _test_functional_assertParameters(CustomGuardError)("ObjectTuple")(
    ObjectTuple,
  )((p: (input: ObjectTuple) => ObjectTuple) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
