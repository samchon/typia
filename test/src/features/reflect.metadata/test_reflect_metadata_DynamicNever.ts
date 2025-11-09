import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_reflect_metadata_DynamicNever = (): void =>
  _test_reflect_metadata("DynamicNever")(
    typia.reflect.metadata<[DynamicNever]>(),
  );
