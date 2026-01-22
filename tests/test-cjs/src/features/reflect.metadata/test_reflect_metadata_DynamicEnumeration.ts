import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_reflect_metadata_DynamicEnumeration = (): void =>
  _test_reflect_metadata("DynamicEnumeration")(
    typia.reflect.metadata<[DynamicEnumeration]>(),
  );
