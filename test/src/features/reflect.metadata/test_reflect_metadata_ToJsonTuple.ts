import typia from "typia";
import { ToJsonTuple } from "../../structures/ToJsonTuple";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ToJsonTuple = 
  _test_reflect_metadata("ToJsonTuple")(
    typia.reflect.metadata<[ToJsonTuple]>()
  );