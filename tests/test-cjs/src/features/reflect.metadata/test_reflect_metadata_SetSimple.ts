import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { SetSimple } from "../../structures/SetSimple";

export const test_reflect_metadata_SetSimple = (): void =>
  _test_reflect_metadata("SetSimple")(typia.reflect.metadata<[SetSimple]>());
