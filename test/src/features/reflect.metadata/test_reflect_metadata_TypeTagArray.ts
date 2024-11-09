import typia from "typia";
import { TypeTagArray } from "../../structures/TypeTagArray";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_TypeTagArray = 
  _test_reflect_metadata("TypeTagArray")(
    typia.reflect.metadata<[TypeTagArray]>()
  );