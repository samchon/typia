import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_ObjectUnionDouble =
  _test_functional_assertFunctionAsync(TypeGuardError)("ObjectUnionDouble")(
    ObjectUnionDouble,
  )((p: (input: ObjectUnionDouble) => Promise<ObjectUnionDouble>) =>
    typia.functional.assertFunction(p),
  );
