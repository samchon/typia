import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_ObjectDynamic = (): void => _test_functional_assertReturn(CustomGuardError)(
  "ObjectDynamic"
)(ObjectDynamic)(
  (p: (input: ObjectDynamic) => ObjectDynamic) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)