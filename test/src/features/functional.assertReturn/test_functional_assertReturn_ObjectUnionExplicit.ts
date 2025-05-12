import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_functional_assertReturn_ObjectUnionExplicit =
  _test_functional_assertReturn(TypeGuardError)("ObjectUnionExplicit")(
    ObjectUnionExplicit,
  )((p: (input: ObjectUnionExplicit) => ObjectUnionExplicit) =>
    typia.functional.assertReturn(p),
  );
