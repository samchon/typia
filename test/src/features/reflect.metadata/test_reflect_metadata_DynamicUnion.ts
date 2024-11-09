import typia from "typia";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_DynamicUnion = 
  _test_reflect_metadata("DynamicUnion")(
    typia.reflect.metadata<[DynamicUnion]>()
  );