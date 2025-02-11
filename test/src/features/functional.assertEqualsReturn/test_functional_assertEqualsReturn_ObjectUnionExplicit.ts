import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_functional_assertEqualsReturn_ObjectUnionExplicit =
  _test_functional_assertEqualsReturn(TypeGuardError)("ObjectUnionExplicit")(
    ObjectUnionExplicit,
  )((p: (input: ObjectUnionExplicit) => ObjectUnionExplicit) =>
    typia.functional.assertEqualsReturn(p),
  );
