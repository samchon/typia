import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { SetUnion } from "../../structures/SetUnion";

export const test_reflect_metadata_SetUnion = (): void =>
  _test_reflect_metadata("SetUnion")(typia.reflect.metadata<[SetUnion]>());
