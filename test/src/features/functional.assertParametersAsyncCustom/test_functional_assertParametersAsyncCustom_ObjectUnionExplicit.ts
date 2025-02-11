import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_functional_assertParametersAsyncCustom_ObjectUnionExplicit =
  _test_functional_assertParametersAsync(CustomGuardError)(
    "ObjectUnionExplicit",
  )(ObjectUnionExplicit)(
    (p: (input: ObjectUnionExplicit) => Promise<ObjectUnionExplicit>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
