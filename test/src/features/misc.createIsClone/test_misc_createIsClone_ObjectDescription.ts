import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_misc_createIsClone_ObjectDescription = _test_misc_isClone(
  "ObjectDescription",
)<ObjectDescription>(ObjectDescription)(
  typia.misc.createIsClone<ObjectDescription>(),
);
