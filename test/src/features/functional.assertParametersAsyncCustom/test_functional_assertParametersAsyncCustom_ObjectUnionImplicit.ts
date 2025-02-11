import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_functional_assertParametersAsyncCustom_ObjectUnionImplicit =
  _test_functional_assertParametersAsync(CustomGuardError)(
    "ObjectUnionImplicit",
  )(ObjectUnionImplicit)(
    (p: (input: ObjectUnionImplicit) => Promise<ObjectUnionImplicit>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
