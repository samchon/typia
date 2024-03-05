import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_assertEqualsParametersCustom_ObjectDescription =
  _test_functional_assertEqualsParameters(CustomGuardError)(
    "ObjectDescription",
  )(ObjectDescription)((p: (input: ObjectDescription) => ObjectDescription) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
