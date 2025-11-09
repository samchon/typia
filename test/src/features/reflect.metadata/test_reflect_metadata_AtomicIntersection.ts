import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_reflect_metadata_AtomicIntersection = (): void =>
  _test_reflect_metadata("AtomicIntersection")(
    typia.reflect.metadata<[AtomicIntersection]>(),
  );
