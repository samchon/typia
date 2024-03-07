import typia from "typia";
import { AtomicClass } from "../../structures/AtomicClass";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_AtomicClass = _test_reflect_metadata(
  "AtomicClass",
)(typia.reflect.metadata<[AtomicClass]>());
