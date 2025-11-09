import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_functional_isParameters_ObjectUnionNonPredictable =
  (): void =>
    _test_functional_isParameters("ObjectUnionNonPredictable")(
      ObjectUnionNonPredictable,
    )((p: (input: ObjectUnionNonPredictable) => ObjectUnionNonPredictable) =>
      typia.functional.isParameters(p),
    );
