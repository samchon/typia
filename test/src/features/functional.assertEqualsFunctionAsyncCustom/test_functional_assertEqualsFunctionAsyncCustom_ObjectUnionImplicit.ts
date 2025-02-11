import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_functional_assertEqualsFunctionAsyncCustom_ObjectUnionImplicit =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "ObjectUnionImplicit",
  )(ObjectUnionImplicit)(
    (p: (input: ObjectUnionImplicit) => Promise<ObjectUnionImplicit>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
