import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_functional_assertEqualsParameters_ObjectUnionNonPredictable =
  _test_functional_assertEqualsParameters(TypeGuardError)(
    "ObjectUnionNonPredictable",
  )(ObjectUnionNonPredictable)(
    (p: (input: ObjectUnionNonPredictable) => ObjectUnionNonPredictable) =>
      typia.functional.assertEqualsParameters(p),
  );
