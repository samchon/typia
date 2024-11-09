import typia from "typia";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_FunctionalArray = 
  _test_reflect_metadata("FunctionalArray")(
    typia.reflect.metadata<[FunctionalArray]>()
  );