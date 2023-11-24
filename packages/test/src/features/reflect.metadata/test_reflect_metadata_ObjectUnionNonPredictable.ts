import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_reflect_metadata_ObjectUnionNonPredictable =
  _test_reflect_metadata("ObjectUnionNonPredictable")(
    typia.reflect.metadata<[ObjectUnionNonPredictable]>(),
  );
