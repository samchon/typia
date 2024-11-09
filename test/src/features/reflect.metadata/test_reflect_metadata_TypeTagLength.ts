import typia from "typia";
import { TypeTagLength } from "../../structures/TypeTagLength";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_TypeTagLength = 
  _test_reflect_metadata("TypeTagLength")(
    typia.reflect.metadata<[TypeTagLength]>()
  );