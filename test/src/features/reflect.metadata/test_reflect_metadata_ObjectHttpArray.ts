import typia from "typia";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectHttpArray = 
  _test_reflect_metadata("ObjectHttpArray")(
    typia.reflect.metadata<[ObjectHttpArray]>()
  );