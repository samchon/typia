import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_reflect_metadata_ToJsonDouble = _test_reflect_metadata(
  "ToJsonDouble",
)(typia.reflect.metadata<[ToJsonDouble]>());
