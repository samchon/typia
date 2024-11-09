import typia from "typia";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_TypeTagInfinite = 
  _test_reflect_metadata("TypeTagInfinite")(
    typia.reflect.metadata<[TypeTagInfinite]>()
  );