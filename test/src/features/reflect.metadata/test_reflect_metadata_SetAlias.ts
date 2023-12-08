import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { SetAlias } from "../../structures/SetAlias";

export const test_reflect_metadata_SetAlias = _test_reflect_metadata(
  "SetAlias",
)(typia.reflect.metadata<[SetAlias]>());
