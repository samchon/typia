import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_createValidate_ObjectUnionNonPredictable = _test_validate(
  "ObjectUnionNonPredictable",
)<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)(
  typia.createValidate<ObjectUnionNonPredictable>(),
);
