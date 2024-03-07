import typia from "typia";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_DynamicNever = _test_reflect_metadata(
  "DynamicNever",
)(typia.reflect.metadata<[DynamicNever]>());
