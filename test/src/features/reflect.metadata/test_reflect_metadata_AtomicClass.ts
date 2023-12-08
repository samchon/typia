import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_reflect_metadata_AtomicClass = _test_reflect_metadata(
  "AtomicClass",
)(typia.reflect.metadata<[AtomicClass]>());
