import typia from "typia";
import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ToJsonArray = 
  _test_reflect_metadata("ToJsonArray")(
    typia.reflect.metadata<[ToJsonArray]>()
  );