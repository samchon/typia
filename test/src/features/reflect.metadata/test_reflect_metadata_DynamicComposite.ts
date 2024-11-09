import typia from "typia";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_DynamicComposite = 
  _test_reflect_metadata("DynamicComposite")(
    typia.reflect.metadata<[DynamicComposite]>()
  );