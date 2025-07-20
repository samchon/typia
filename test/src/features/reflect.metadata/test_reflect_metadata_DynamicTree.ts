import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_reflect_metadata_DynamicTree = (): void =>
  _test_reflect_metadata("DynamicTree")(
    typia.reflect.metadata<[DynamicTree]>(),
  );
