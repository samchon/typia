import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_ObjectUnionNonPredictable =
  _test_functional_assertReturn(TypeGuardError)("ObjectUnionNonPredictable")(
    ObjectUnionNonPredictable,
  )((p: (input: ObjectUnionNonPredictable) => ObjectUnionNonPredictable) =>
    typia.functional.assertReturn(p),
  );
