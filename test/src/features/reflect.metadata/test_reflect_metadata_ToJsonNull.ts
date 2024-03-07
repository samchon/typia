import typia from "typia";
import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ToJsonNull = _test_reflect_metadata(
  "ToJsonNull",
)(typia.reflect.metadata<[ToJsonNull]>());
