import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_reflect_metadata_ToJsonNull = (): void =>
  _test_reflect_metadata("ToJsonNull")(typia.reflect.metadata<[ToJsonNull]>());
