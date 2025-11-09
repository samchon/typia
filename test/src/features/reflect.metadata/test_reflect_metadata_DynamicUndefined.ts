import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_reflect_metadata_DynamicUndefined = (): void =>
  _test_reflect_metadata("DynamicUndefined")(
    typia.reflect.metadata<[DynamicUndefined]>(),
  );
