import typia from "typia";
import { SetUnion } from "../../structures/SetUnion";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_SetUnion = _test_reflect_metadata(
  "SetUnion",
)(typia.reflect.metadata<[SetUnion]>());
