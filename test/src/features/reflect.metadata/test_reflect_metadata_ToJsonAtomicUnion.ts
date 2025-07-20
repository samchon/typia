import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_reflect_metadata_ToJsonAtomicUnion = (): void =>
  _test_reflect_metadata("ToJsonAtomicUnion")(
    typia.reflect.metadata<[ToJsonAtomicUnion]>(),
  );
