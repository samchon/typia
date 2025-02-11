import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_functional_assertFunctionAsync_ObjectUnionExplicit =
  _test_functional_assertFunctionAsync(TypeGuardError)("ObjectUnionExplicit")(
    ObjectUnionExplicit,
  )((p: (input: ObjectUnionExplicit) => Promise<ObjectUnionExplicit>) =>
    typia.functional.assertFunction(p),
  );
