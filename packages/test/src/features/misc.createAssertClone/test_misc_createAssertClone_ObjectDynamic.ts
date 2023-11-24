import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_misc_createAssertClone_ObjectDynamic = _test_misc_assertClone(
  "ObjectDynamic",
)<ObjectDynamic>(ObjectDynamic)(typia.misc.createAssertClone<ObjectDynamic>());
