import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_reflect_metadata_DynamicConstant = (): void =>
  _test_reflect_metadata("DynamicConstant")(
    typia.reflect.metadata<[DynamicConstant]>(),
  );
