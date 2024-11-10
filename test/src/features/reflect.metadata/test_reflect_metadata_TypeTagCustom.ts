import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_reflect_metadata_TypeTagCustom = _test_reflect_metadata(
  "TypeTagCustom",
)(typia.reflect.metadata<[TypeTagCustom]>());
