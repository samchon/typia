import typia from "typia";
import { TypeTagNaN } from "../../structures/TypeTagNaN";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_TypeTagNaN = 
  _test_reflect_metadata("TypeTagNaN")(
    typia.reflect.metadata<[TypeTagNaN]>()
  );