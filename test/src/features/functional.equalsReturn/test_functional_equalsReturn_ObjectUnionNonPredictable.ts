import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_functional_equalsReturn_ObjectUnionNonPredictable =
  (): void =>
    _test_functional_equalsReturn("ObjectUnionNonPredictable")(
      ObjectUnionNonPredictable,
    )((p: (input: ObjectUnionNonPredictable) => ObjectUnionNonPredictable) =>
      typia.functional.equalsReturn(p),
    );
