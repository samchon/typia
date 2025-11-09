import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_functional_validateFunction_ObjectUnionNonPredictable =
  (): void =>
    _test_functional_validateFunction("ObjectUnionNonPredictable")(
      ObjectUnionNonPredictable,
    )((p: (input: ObjectUnionNonPredictable) => ObjectUnionNonPredictable) =>
      typia.functional.validateFunction(p),
    );
