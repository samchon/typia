import typia from "typia";
import { TypeTagRange } from "../../structures/TypeTagRange";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_TypeTagRange = 
  _test_reflect_metadata("TypeTagRange")(
    typia.reflect.metadata<[TypeTagRange]>()
  );