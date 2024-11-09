import typia from "typia";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ClassGetter = 
  _test_reflect_metadata("ClassGetter")(
    typia.reflect.metadata<[ClassGetter]>()
  );