import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_functional_assertParameters_ObjectUnionNonPredictable =
  (): void =>
    _test_functional_assertParameters(TypeGuardError)(
      "ObjectUnionNonPredictable",
    )(ObjectUnionNonPredictable)(
      (p: (input: ObjectUnionNonPredictable) => ObjectUnionNonPredictable) =>
        typia.functional.assertParameters(p),
    );
