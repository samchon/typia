import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_reflect_metadata_TypeTagLength = _test_reflect_metadata(
  "TypeTagLength",
)(typia.reflect.metadata<[TypeTagLength]>());
