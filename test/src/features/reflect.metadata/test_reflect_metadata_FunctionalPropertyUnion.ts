import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_reflect_metadata_FunctionalPropertyUnion = (): void =>
  _test_reflect_metadata("FunctionalPropertyUnion")(
    typia.reflect.metadata<[FunctionalPropertyUnion]>(),
  );
