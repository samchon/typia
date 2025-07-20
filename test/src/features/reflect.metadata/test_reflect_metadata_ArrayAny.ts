import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_reflect_metadata_ArrayAny = (): void =>
  _test_reflect_metadata("ArrayAny")(typia.reflect.metadata<[ArrayAny]>());
