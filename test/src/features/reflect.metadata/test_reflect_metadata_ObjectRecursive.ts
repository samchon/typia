import typia from "typia";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectRecursive = 
  _test_reflect_metadata("ObjectRecursive")(
    typia.reflect.metadata<[ObjectRecursive]>()
  );