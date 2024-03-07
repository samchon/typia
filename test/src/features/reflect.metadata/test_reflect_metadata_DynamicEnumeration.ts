import typia from "typia";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_DynamicEnumeration = _test_reflect_metadata(
  "DynamicEnumeration",
)(typia.reflect.metadata<[DynamicEnumeration]>());
