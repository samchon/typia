import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_functional_assertFunction_ObjectUnionNonPredictable =
  _test_functional_assertFunction(TypeGuardError)("ObjectUnionNonPredictable")(
    ObjectUnionNonPredictable,
  )((p: (input: ObjectUnionNonPredictable) => ObjectUnionNonPredictable) =>
    typia.functional.assertFunction(p),
  );
