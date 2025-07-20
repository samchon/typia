import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_functional_validateEqualsReturn_ObjectUnionNonPredictable =
  (): void =>
    _test_functional_validateEqualsReturn("ObjectUnionNonPredictable")(
      ObjectUnionNonPredictable,
    )((p: (input: ObjectUnionNonPredictable) => ObjectUnionNonPredictable) =>
      typia.functional.validateEqualsReturn(p),
    );
