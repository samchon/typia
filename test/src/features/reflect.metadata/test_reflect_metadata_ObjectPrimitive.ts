import typia from "typia";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectPrimitive = 
  _test_reflect_metadata("ObjectPrimitive")(
    typia.reflect.metadata<[ObjectPrimitive]>()
  );