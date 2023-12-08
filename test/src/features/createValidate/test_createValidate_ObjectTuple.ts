import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_createValidate_ObjectTuple = _test_validate(
  "ObjectTuple",
)<ObjectTuple>(ObjectTuple)(typia.createValidate<ObjectTuple>());
