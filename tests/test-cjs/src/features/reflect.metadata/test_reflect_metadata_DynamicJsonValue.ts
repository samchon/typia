import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_reflect_metadata_DynamicJsonValue = (): void =>
  _test_reflect_metadata("DynamicJsonValue")(
    typia.reflect.metadata<[DynamicJsonValue]>(),
  );
