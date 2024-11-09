import typia from "typia";
import { DynamicTag } from "../../structures/DynamicTag";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_DynamicTag = 
  _test_reflect_metadata("DynamicTag")(
    typia.reflect.metadata<[DynamicTag]>()
  );