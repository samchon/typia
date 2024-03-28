import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_assertParametersCustom_ObjectRequired =
  _test_functional_assertParameters(CustomGuardError)("ObjectRequired")(
    ObjectRequired,
  )((p: (input: ObjectRequired) => ObjectRequired) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
