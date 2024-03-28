import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_reflect_metadata_TypeTagBigInt = _test_reflect_metadata(
  "TypeTagBigInt",
)(typia.reflect.metadata<[TypeTagBigInt]>());
