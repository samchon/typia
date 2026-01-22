import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_functional_isFunction_ObjectUnionNonPredictable = (): void =>
  _test_functional_isFunction("ObjectUnionNonPredictable")(
    ObjectUnionNonPredictable,
  )((p: (input: ObjectUnionNonPredictable) => ObjectUnionNonPredictable) =>
    typia.functional.isFunction(p),
  );
