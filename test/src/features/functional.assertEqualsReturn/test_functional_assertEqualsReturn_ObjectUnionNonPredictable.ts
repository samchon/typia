import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_functional_assertEqualsReturn_ObjectUnionNonPredictable =
  _test_functional_assertEqualsReturn(TypeGuardError)(
    "ObjectUnionNonPredictable",
  )(ObjectUnionNonPredictable)(
    (p: (input: ObjectUnionNonPredictable) => ObjectUnionNonPredictable) =>
      typia.functional.assertEqualsReturn(p),
  );
