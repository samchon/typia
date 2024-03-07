import typia from "typia";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_DynamicTemplate = _test_reflect_metadata(
  "DynamicTemplate",
)(typia.reflect.metadata<[DynamicTemplate]>());
