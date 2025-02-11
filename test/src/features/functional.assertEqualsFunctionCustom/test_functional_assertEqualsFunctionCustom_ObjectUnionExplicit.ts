import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_functional_assertEqualsFunctionCustom_ObjectUnionExplicit =
  _test_functional_assertEqualsFunction(CustomGuardError)(
    "ObjectUnionExplicit",
  )(ObjectUnionExplicit)(
    (p: (input: ObjectUnionExplicit) => ObjectUnionExplicit) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
