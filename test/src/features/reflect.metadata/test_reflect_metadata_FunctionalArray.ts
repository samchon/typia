import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_reflect_metadata_FunctionalArray = _test_reflect_metadata(
  "FunctionalArray",
)(typia.reflect.metadata<[FunctionalArray]>());
