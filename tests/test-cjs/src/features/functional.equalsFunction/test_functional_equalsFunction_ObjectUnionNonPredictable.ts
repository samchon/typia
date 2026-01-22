import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_functional_equalsFunction_ObjectUnionNonPredictable =
  (): void =>
    _test_functional_equalsFunction("ObjectUnionNonPredictable")(
      ObjectUnionNonPredictable,
    )((p: (input: ObjectUnionNonPredictable) => ObjectUnionNonPredictable) =>
      typia.functional.equalsFunction(p),
    );
