import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_functional_equalsParameters_ObjectUnionNonPredictable =
  _test_functional_equalsParameters("ObjectUnionNonPredictable")(
    ObjectUnionNonPredictable,
  )((p: (input: ObjectUnionNonPredictable) => ObjectUnionNonPredictable) =>
    typia.functional.equalsParameters(p),
  );
