import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_createValidateEquals_ObjectHttpArray = _test_validateEquals(
  "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)(
  typia.createValidateEquals<ObjectHttpArray>(),
);
