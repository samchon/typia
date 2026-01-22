import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_functional_assertEqualsFunction_ObjectUnionNonPredictable =
  (): void =>
    _test_functional_assertEqualsFunction(TypeGuardError)(
      "ObjectUnionNonPredictable",
    )(ObjectUnionNonPredictable)(
      (p: (input: ObjectUnionNonPredictable) => ObjectUnionNonPredictable) =>
        typia.functional.assertEqualsFunction(p),
    );
