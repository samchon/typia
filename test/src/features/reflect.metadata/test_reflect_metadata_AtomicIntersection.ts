import typia from "typia";
import { AtomicIntersection } from "../../structures/AtomicIntersection";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_AtomicIntersection = _test_reflect_metadata(
  "AtomicIntersection",
)(typia.reflect.metadata<[AtomicIntersection]>());
