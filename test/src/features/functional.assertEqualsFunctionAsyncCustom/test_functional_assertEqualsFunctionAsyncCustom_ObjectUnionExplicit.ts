import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_ObjectUnionExplicit =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "ObjectUnionExplicit",
  )(ObjectUnionExplicit)(
    (p: (input: ObjectUnionExplicit) => Promise<ObjectUnionExplicit>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
