import typia from "typia";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ArrayRepeatedRequired =
  _test_reflect_metadata("ArrayRepeatedRequired")(
    typia.reflect.metadata<[ArrayRepeatedRequired]>(),
  );
