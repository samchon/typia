import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_ObjectDynamic = (): void => _test_functional_assertParameters(CustomGuardError)(
  "ObjectDynamic"
)(ObjectDynamic)(
  (p: (input: ObjectDynamic) => ObjectDynamic) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)