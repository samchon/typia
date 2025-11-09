import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_reflect_metadata_FunctionalValue = (): void =>
  _test_reflect_metadata("FunctionalValue")(
    typia.reflect.metadata<[FunctionalValue]>(),
  );
