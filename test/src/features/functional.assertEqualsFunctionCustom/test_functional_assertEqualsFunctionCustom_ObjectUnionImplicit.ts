import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_functional_assertEqualsFunctionCustom_ObjectUnionImplicit =
  _test_functional_assertEqualsFunction(CustomGuardError)(
    "ObjectUnionImplicit",
  )(ObjectUnionImplicit)(
    (p: (input: ObjectUnionImplicit) => ObjectUnionImplicit) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
