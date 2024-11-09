import typia from "typia";
import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectTuple = 
  _test_reflect_metadata("ObjectTuple")(
    typia.reflect.metadata<[ObjectTuple]>()
  );