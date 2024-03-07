import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_ObjectUnionNonPredictable =
  _test_functional_assertEqualsFunction(TypeGuardError)(
    "ObjectUnionNonPredictable",
  )(ObjectUnionNonPredictable)(
    (p: (input: ObjectUnionNonPredictable) => ObjectUnionNonPredictable) =>
      typia.functional.assertEqualsFunction(p),
  );
