import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_reflect_metadata_FunctionalProperty = (): void =>
  _test_reflect_metadata("FunctionalProperty")(
    typia.reflect.metadata<[FunctionalProperty]>(),
  );
