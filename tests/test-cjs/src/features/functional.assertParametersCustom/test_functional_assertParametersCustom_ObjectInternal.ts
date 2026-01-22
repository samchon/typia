import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_assertParametersCustom_ObjectInternal = (): void =>
  _test_functional_assertParameters(CustomGuardError)("ObjectInternal")(
    ObjectInternal,
  )((p: (input: ObjectInternal) => ObjectInternal) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
