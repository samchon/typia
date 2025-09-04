import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_reflect_metadata_FunctionalObjectUnion = (): void =>
  _test_reflect_metadata("FunctionalObjectUnion")(
    typia.reflect.metadata<[FunctionalObjectUnion]>(),
  );
