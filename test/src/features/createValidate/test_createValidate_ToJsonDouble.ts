import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_createValidate_ToJsonDouble = _test_validate(
  "ToJsonDouble",
)<ToJsonDouble>(ToJsonDouble)(typia.createValidate<ToJsonDouble>());
