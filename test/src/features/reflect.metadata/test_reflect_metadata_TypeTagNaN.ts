import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_reflect_metadata_TypeTagNaN = (): void =>
  _test_reflect_metadata("TypeTagNaN")(typia.reflect.metadata<[TypeTagNaN]>());
