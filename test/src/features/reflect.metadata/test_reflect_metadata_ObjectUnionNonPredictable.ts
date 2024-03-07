import typia from "typia";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectUnionNonPredictable =
  _test_reflect_metadata("ObjectUnionNonPredictable")(
    typia.reflect.metadata<[ObjectUnionNonPredictable]>(),
  );
