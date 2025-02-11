import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_assertParametersCustom_ObjectUndefined =
  _test_functional_assertParameters(CustomGuardError)("ObjectUndefined")(
    ObjectUndefined,
  )((p: (input: ObjectUndefined) => ObjectUndefined) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
