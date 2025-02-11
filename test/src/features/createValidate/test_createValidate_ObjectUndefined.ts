import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_createValidate_ObjectUndefined = _test_validate(
  "ObjectUndefined",
)<ObjectUndefined>(ObjectUndefined)(typia.createValidate<ObjectUndefined>());
