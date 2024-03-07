import typia from "typia";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ToJsonAtomicUnion = _test_reflect_metadata(
  "ToJsonAtomicUnion",
)(typia.reflect.metadata<[ToJsonAtomicUnion]>());
