import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_createIs_ObjectHttpArray = _test_is(
  "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)(typia.createIs<ObjectHttpArray>());
