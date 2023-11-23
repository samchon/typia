import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_reflect_metadata_TypeTagInfinite = _test_reflect_metadata(
  "TypeTagInfinite",
)(typia.reflect.metadata<[TypeTagInfinite]>());
