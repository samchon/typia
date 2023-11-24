import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_validate_ToJsonNull = _test_validate(
  "ToJsonNull",
)<ToJsonNull>(ToJsonNull)((input) => typia.validate<ToJsonNull>(input));
