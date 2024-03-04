import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_assertParametersCustom_ObjectDescription =
  _test_functional_assertParameters(CustomGuardError)("ObjectDescription")(
    ObjectDescription,
  )((p: (input: ObjectDescription) => ObjectDescription) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
